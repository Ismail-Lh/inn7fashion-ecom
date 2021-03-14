import React from 'react';
import { useCartContext } from '../../contexts/cart_context';

import './CartModel.scss';
import { CartModelItem } from '..';

const CartModel = () => {
  const { cart } = useCartContext();

  return (
    <div className='cart-overlay'>
      <div className='cart-model'>
        <p className='cart-model__total'>{cart.length} items total</p>
        {cart.map(item => (
          <CartModelItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CartModel;
