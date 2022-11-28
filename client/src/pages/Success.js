import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import success from '../assets/success.png';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const pokemons = cart.map((item) => item._id);

      if (pokemons.length) {
        const { data } = await addOrder({ variables: { pokemons } });
        const productData = data.addOrder.pokemons;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <img src={success} alt='sucess' width='200'/>
        <h2>Thank you for your purchase!</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
