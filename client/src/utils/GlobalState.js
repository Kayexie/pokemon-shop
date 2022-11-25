import React, { createContext, useContext } from "react";
import { usePokemonReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = usePokemonReducer({
    pokemons: [],
    cart: [],
    cartOpen: false,
    poketypes: [],
    currentPoketype: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
