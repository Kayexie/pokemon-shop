import { gql } from '@apollo/client';

export const QUERY_POKEMONS = gql`
  query getPokemons($type: ID) {
    pokemons(type: $type) {
      _id
      name
      description
      adoptfee
      quantity
      ability
      weakness
      image
      type {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($pokemons: [ID]!) {
    checkout(pokemons: $pokemons) {
      session
    }
  }
`;//something to change (pokemons)

export const QUERY_ALL_POKEMONS = gql`
  {
    pokemons {
      _id
      name
      description
      adoptfee
      quantity
      ability
      weakness
      type {
        name
      }
    }
  }
`;

export const QUERY_TYPES = gql`
  {
    types {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      userName
      orders {
        _id
        adoptDate
        pokemons {
          _id
          name
          description
          adoptfee
          quantity
          ability
          weakness
          image
        }
      }
    }
  }
`;
