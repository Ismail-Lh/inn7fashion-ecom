import React from 'react';
import { useCartContext } from '../../contexts/cart_context';

import './CartModel.scss';
import { Button, CartModelItem } from '..';

const CartModel = () => {
  const { cart, hideCart } = useCartContext();

  return (
    <div className='cartModel'>
      <div className='cartModel__overlay' onMouseEnter={hideCart} />
      <div className='cartModel__content' onMouseLeave={hideCart}>
        <div className='triangle'></div>
        <p className='cartModel__total'>{cart.length} items total</p>
        {cart.map(item => (
          <CartModelItem {...item} key={item.id} />
        ))}
        <p className='cartModel__subtotal'>subtotal : $250.00</p>
        <Button outline>view shopping bag</Button>
        <Button>checkout</Button>
      </div>
    </div>
  );
};

export default CartModel;
