import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from "../components/Footer";
import TypeMenu from '../components/TypeMenu';
import back from '../assets/back.png';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_POKEMONS,
} from '../utils/actions';
import { QUERY_POKEMONS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentPokemon, setCurrentPokemon] = useState({});

  const { loading, data } = useQuery(QUERY_POKEMONS);

  const { pokemons, cart } = state;

  useEffect(() => {
    if (pokemons.length) {
      setCurrentPokemon(pokemons.find((pokemon) => pokemon._id === id));
    }
 
    else if (data) {
      dispatch({
        type: UPDATE_POKEMONS,
        pokemons: data.pokemons,
      });

      data.pokemons.forEach((pokemon) => {
        idbPromise('pokemons', 'put', pokemon);
      });
    }
 
    else if (!loading) {
      idbPromise('pokemons', 'get').then((indexedPokemons) => {
        dispatch({
          type: UPDATE_POKEMONS,
          pokemons: indexedPokemons,
        });
      });
    }
  }, [pokemons, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        pokemon: { ...currentPokemon, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentPokemon, purchaseQuantity: 1 });
    }
  };

  return (
    <>
      <div><TypeMenu/></div>
      {currentPokemon && cart ? (
        <div className="containerDetail my-1">
          <Link to="/Home">
            <img src={back} width='200px' alt='go back to home'></img>
          </Link>
         <div className='content'>
         <img
            src={`/images/${currentPokemon.image}`}
            alt={currentPokemon.name}
            width='300px'
          />
        <div  className='conent-p'> 
          <p id='pokeName'>{currentPokemon.name}</p>
          <p id='pokeType'>{currentPokemon.pokemonType}</p>
          <p >{currentPokemon.description}</p>
          <p className='title'>Ability:</p>

          <p id='pokeAbility'>{currentPokemon.ability}</p>
          <p className='title'>Weakness:</p>
          <p id='pokeWeakness'>{currentPokemon.weakness}</p>
          
          <p>
            <strong>Adopt Fee:</strong>${currentPokemon.adoptfee}{' '}
            </p>
            <button id='detailButton' onClick={addToCart}>Adopt Me</button>

          </div>
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
      <Footer />
    </>
  );
}

export default Detail;
