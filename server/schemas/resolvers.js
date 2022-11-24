const { AuthenticationError } = require('apollo-server-express');
const { User, Pokemon, Type, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    types: async () => {
      return await Type.find();
    },
    pokemons: async (parent, { type, name }) => {
      const params = {};

      if (type) {
        params.type = type;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Pokemon.find(params).populate('type');
    },
    pokemon: async (parent, { _id }) => {
      return await Pokemon.findById(_id).populate('type');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.pokemons',
          populate: 'type'
        });

        user.orders.sort((a, b) => b.adpotDate - a.adpotDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.pokemons',
          populate: 'type'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ pokmons: args.pokemons });
      const line_items = [];

      const { pokemons } = await order.populate('pokemons');

      for (let i = 0; i < pokemons.length; i++) {
        const pokemon = await stripe.products.create({
          name: pokemons[i].name,
          description: pokemons[i].description,
          images: [`${url}/images/${pokemons[i].image}`]
        });

        const fee = await stripe.prices.create({
          pokemon: pokemon.id,
          unit_amount: pokemons[i].adoptfee * 100,
          currency: 'cad',
        });

        line_items.push({
          adoptfee: fee.id,
          // quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { pokemons }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ pokemons });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // updatePokemon: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
