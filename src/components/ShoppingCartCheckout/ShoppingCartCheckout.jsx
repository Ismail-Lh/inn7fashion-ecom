import React from 'react';
import { Button } from '..';

import './ShoppingCartCheckout.scss';

const ShoppingCartCheckout = () => {
  return (
    <div className='shoppingCart__checkout'>
      <div className='promotionalCode'>
        <h2>promotional code</h2>
        <form className='promotionalCode__form'>
          <input
            type='text'
            name='couponCode'
            id='couponCode'
            placeholder='enter your coupon code'
          />
          <button type='submit'>apply</button>
        </form>
      </div>
      <div className='checkout'>
        <h2>order summary</h2>
        <p className='subtotal'>subtotal : $250.00</p>
        <p className='grandtotal'>grand total : $250.00</p>

        <Button>proceed to checkout</Button>
      </div>
    </div>
  );
};

export default ShoppingCartCheckout;
