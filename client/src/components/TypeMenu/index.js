import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_POKETYPES,
  UPDATE_CURRENT_POKETYPE,
} from '../../utils/actions';
import { QUERY_POKETYPES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function TypeMenu() {
  const [state, dispatch] = useStoreContext();

  const { poketypes } = state;

  const { loading, data: PoketypeData } = useQuery(QUERY_POKETYPES);

  useEffect(() => {
    if (PoketypeData) {
      dispatch({
        type: UPDATE_POKETYPES,
        poketypes: PoketypeData.poketypes,
      });
      PoketypeData.poketypes.forEach((poketype) => {
        idbPromise('poketypes', 'put', poketype);
      });
    } else if (!loading) {
      idbPromise('poketypes', 'get').then((poketypes) => {
        dispatch({
          type: UPDATE_POKETYPES,
          poketypes: poketypes,
        });
      });
    }
  }, [PoketypeData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_POKETYPE,
      currentPoketype: id,
    });
  };

  return (
    <div className='type'>
      {/* <h2>Choose a type:</h2> */}
      {poketypes.map((item) => (
        <button id="type-button"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default TypeMenu;
