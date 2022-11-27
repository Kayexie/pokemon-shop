import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/back.png';
import Footer from '../components/Footer';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="containerOrder">
      <div>
      <Link to="/Home">
          <img src={back} width='200px' alt='go back to home'></img>
      </Link>
      </div>
      <div className='orderProduct'>
        {user ? (
          <>
            <div id='orderTitle'>
              Order History for {user.userName} 
            </div>
            {user.orders.map((order) => (
              <div key={order._id} className="orders">
                <div className="flex-row">
                  {order.pokemons.map(({ _id, image, name,  adoptfee }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/pokemons/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${ adoptfee}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default OrderHistory;
