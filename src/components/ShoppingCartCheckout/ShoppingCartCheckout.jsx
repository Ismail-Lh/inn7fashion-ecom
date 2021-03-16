import React from 'react';
import { Button } from '..';
import { useCartContext } from '../../contexts/cart_context';

import './ShoppingCartCheckout.scss';

const ShoppingCartCheckout = () => {
  const { subtotal } = useCartContext();
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
        <p className='subtotal'>subtotal : {subtotal}</p>
        <p className='grandtotal'>grand total : {subtotal}</p>

        <Button>proceed to checkout</Button>
      </div>
    </div>
  );
};

export default ShoppingCartCheckout;
