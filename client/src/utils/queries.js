import { gql } from '@apollo/client';

export const QUERY_POKEMONS = gql`
  query getPokemons($poketype: ID) {
    pokemons(poketype: $poketype) {
      _id
      name
      description
      adoptfee
      quantity
      ability
      pokemonType
      weakness
      image
      poketype {
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
      pokemonType
      weakness
      poketype {
        name
      }
    }
  }
`;

export const QUERY_POKETYPES = gql`
  {
    poketypes {
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
          pokemonType
          weakness
          image
        }
      }
    }
  }
`;
