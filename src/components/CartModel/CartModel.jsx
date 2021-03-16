import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../contexts/cart_context';

import './CartModel.scss';
import { Button, CartModelItem } from '..';

const CartModel = () => {
  const { cart, hideCart, subtotal } = useCartContext();

  return (
    <div className='cartModel'>
      <div className='cartModel__overlay' onMouseEnter={hideCart} />
      <div className='cartModel__content' onMouseLeave={hideCart}>
        <div className='triangle'></div>
        {cart.length === 0 ? (
          <p className='cartModel__empty'>
            You have no items in your shopping cart.
          </p>
        ) : (
          <div>
            <p className='cartModel__total'>{cart.length} items total</p>
            {cart.map(item => (
              <CartModelItem {...item} key={item.id} />
            ))}
            <p className='cartModel__subtotal'>subtotal : {subtotal}</p>
            <Button outline>
              <Link to='/checkout/cart'>view shopping bag</Link>
            </Button>

            <Button>checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModel;
