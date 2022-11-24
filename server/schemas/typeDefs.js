const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Poketype {
    _id: ID
    name: String
  }

  type Pokemon {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    adoptfee: Float
    ability: String
    weakness: String
    poketype: Poketype
  }

  type Order {
    _id: ID
    adoptDate: String
    pokemons: [Pokemon]
  }

  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    poketypes: [Poketype]
    pokemons(poketype: ID, name: String): [Pokemon]
    pokemon(_id: ID!): Pokemon  
    user: User
    order(_id: ID!): Order
    checkout(pokemons: [ID]!): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addOrder(pokemons: [ID]!): Order
    updateUser(userName: String, email: String, password: String): User
    updatePokemon(_id: ID!, quantity: Int!): Pokemon
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

//line 55 updatePokemon(_id: ID!, quantity: Int!): Pokemon