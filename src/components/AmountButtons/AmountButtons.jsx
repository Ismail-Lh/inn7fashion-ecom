import React from 'react';

import './AmountButtons.scss';

const AmountButtons = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <div className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decreaseAmount}>
        <i className='fas fa-minus' />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increaseAmount}>
        <i className='fas fa-plus' />
      </button>
    </div>
  );
};

export default AmountButtons;
