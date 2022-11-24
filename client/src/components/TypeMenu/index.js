import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_TYPES,
  UPDATE_CURRENT_Type,
} from '../../utils/actions';
import { QUERY_TYPES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function TypeMenu() {
  const [state, dispatch] = useStoreContext();

  const { types } = state;

  const { loading, data: TypeData } = useQuery(QUERY_TYPES);

  useEffect(() => {
    if (TypeData) {
      dispatch({
        type: UPDATE_TYPES,
        types: TypeData.types,
      });
      TypeData.types.forEach((type) => {
        idbPromise('types', 'put', type);
      });
    } else if (!loading) {
      idbPromise('types', 'get').then((types) => {
        dispatch({
          type: UPDATE_TYPES,
          types: types,
        });
      });
    }
  }, [TypeData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_Type,
      currentType: id,
    });
  };

  return (
    <div className='type'>
      {/* <h2>Choose a type:</h2> */}
      {types.map((item) => (
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
