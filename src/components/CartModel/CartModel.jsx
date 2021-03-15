import React from 'react';
import { useCartContext } from '../../contexts/cart_context';

import './CartModel.scss';
import { Button, CartModelItem } from '..';

const CartModel = () => {
  const { cart } = useCartContext();

  return (
    <div className='cart-overlay'>
      <div className='cart-model'>
        <div className='triangle'></div>
        <p className='cart-model__total'>{cart.length} items total</p>
        {cart.map(item => (
          <CartModelItem {...item} key={item.id} />
        ))}
        <p className='cart-model__subtotal'>subtotal : $250.00</p>
        <Button outline>view shopping bag</Button>
        <Button>checkout</Button>
      </div>
    </div>
  );
};

export default CartModel;
