import React, { useEffect } from 'react';
import PokemonItem from '../PokemonItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_POKEMONS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import {QUERY_POKEMONS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function PokemonList() {
  const [state, dispatch] = useStoreContext();

  const { currentType } = state;

  const { loading, data } = useQuery(QUERY_POKEMONS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_POKEMONS,
        pokemons: data.pokemons,
      });
      data.pokemons.forEach((pokemon) => {
        idbPromise('pokemons', 'put', pokemon);
      });
    } else if (!loading) {
      idbPromise('pokemons', 'get').then((pokemons) => {
        dispatch({
          type: UPDATE_POKEMONS,
          pokemons: pokemons,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterPokemons() {
    if (!currentType) {
      return state.pokemons;
    }

    return state.pokemons.filter(
      (pokemon) => pokemon.type._id === currentType
    );
  }

  return (
    <div className="my-2">
      {/* <h2>Our pokemons:</h2> */}
      {state.pokemons.length ? (
        <div className="flex-row">
          {filterPokemons().map((pokemon) => (
            <PokemonItem
              key={pokemon._id}
              _id={pokemon._id}
              image={pokemon.image}
              name={pokemon.name}
              price={pokemon.price}
              quantity={pokemon.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any pokemons yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default PokemonList;
