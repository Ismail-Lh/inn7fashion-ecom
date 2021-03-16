import React from 'react';
import { useCartContext } from '../../contexts/cart_context';

import './RemoveButton.scss';

const RemoveButton = ({ id }) => {
  const { removeItem } = useCartContext();
  return (
    <button className='delete-icon' onClick={() => removeItem(id)}>
      <i className='fas fa-trash-alt' />
    </button>
  );
};

export default RemoveButton;
