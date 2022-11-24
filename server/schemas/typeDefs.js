const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Type {
    _id: ID
    name: String
  }

  type Pokemon {
    _id: ID
    name: String
    description: String
    image: String
    adoptfee: Float
    ability: String
    weekness: String
    type: Type
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
    types: [Type]
    pokemons(type: ID, name: String): [Pokemon]
    pokemon(_id: ID!): Pokemon  
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addOrder(pokemons: [ID]!): Order
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
//line 45  quanity delete
//line 55 updatePokemon(_id: ID!, quantity: Int!): Pokemon