import { useReducer } from "react";
import {
  UPDATE_POKEMONS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_TYPES,
  UPDATE_CURRENT_Type,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POKEMONS:
      return {
        ...state,
        pokemons: [...action.pokemons],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.pokemon],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.pokemons],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(pokemon => {
          if (action._id === pokemon._id) {
            pokemon.purchaseQuantity = action.purchaseQuantity
          }
          return pokemon
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(pokemon => {
        return pokemon._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_TYPES:
      return {
        ...state,
        types: [...action.types],
      };

    case UPDATE_CURRENT_Type:
      return {
        ...state,
        currentType: action.currentType
      }

    default:
      return state;
  }
};

export function usePokemonReducer(initialState) {
  return useReducer(reducer, initialState)
}
