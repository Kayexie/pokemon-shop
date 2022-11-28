import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import cartImage from '../../assets/cart.png';

const stripePromise = loadStripe('pk_test_51M7rzEL7w33it4ToWdbw96IWHdHsZXfXyTqmF3rpv1LS0x53YrdO2l50HRlTmdtRGliSXqHFsdst8VwLtcula8CL00nB2wZ0od');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, pokemons: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.adoptfee * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const pokemonIds = [];
    console.log(pokemonIds);
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        pokemonIds.push(item._id);
        console.log(item._id)
      }
    });

    getCheckout({
      variables: { pokemons: pokemonIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <img src={cartImage} alt="logo" width="100"/>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        <span role="img" aria-label="shocked">
          X
        </span>
      </div>
      <h2>Your Pokémons</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Adopt fee: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button id='cart-button' onClick={submitCheckout}>Adopt Me</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          None of the Pokémons are adopted yet.
        </h3>
      )}
    </div>
  );
};

export default Cart;
