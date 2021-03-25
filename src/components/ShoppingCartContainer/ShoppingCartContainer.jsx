import React from 'react';
import { Link } from 'react-router-dom';

import './ShoppingCartContainer.scss';
import { ShoppingCartCheckout, ShoppingCartProducts } from '../';
import { useCartContext } from '../../contexts/cart_context';
import { useProductsContext } from '../../contexts/products_context';

const ShoppingCartContainer = () => {
  const { updateGender } = useProductsContext();
  const { cart } = useCartContext();
  return (
    <>
      {cart.length === 0 ? (
        <div className='shoppingCart__container'>
          <h1 className='title'>your shopping cart is empty!</h1>
          <div className='goTo'>
            <p>Go to</p>
            <div className='goTo__links'>
              <Link to='/'>Home Page</Link>
              <Link to='/men' data-gender='men' onClick={updateGender}>
                Shop Men
              </Link>
              <Link to='/women' data-gender='women' onClick={updateGender}>
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='shoppingCart__container'>
          <h1 className='title'>shopping cart</h1>
          <div className='shoppingCart__grid'>
            <ShoppingCartProducts />
            <ShoppingCartCheckout />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartContainer;
