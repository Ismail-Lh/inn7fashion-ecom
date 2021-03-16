import React from 'react';

import './ShoppingCartContainer.scss';
import { ShoppingCartCheckout, ShoppingCartProducts } from '../';

const ShoppingCartContainer = () => {
  return (
    <div className='shoppingCart__container'>
      <h1 className='title'>shopping cart</h1>
      <div className='shoppingCart__grid'>
        <ShoppingCartProducts />
        <ShoppingCartCheckout />
      </div>
    </div>
  );
};

export default ShoppingCartContainer;
