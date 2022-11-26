import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './style.css';


function PokemonItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    pokemonType,
    adoptfee,
   quantity,
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        pokemon: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card">
      <img className="image"
          alt={name}
          src={`/images/${image}`}
        />
      <Link to={`/pokemons/${_id}`}>
      <p>{name}</p>
      </Link>
      <div className="card-p">
        <div>{quantity} {pluralize("item", quantity)} available</div>
        <button id='pokemonType'>{pokemonType}</button>
        <div>${adoptfee}</div>
        <button id='button' onClick={addToCart}>Adopt Me</button>
      </div>
    </div>
  );
}

export default PokemonItem;
