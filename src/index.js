import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';

import { ProductsProvider } from './contexts/products_context';
import { FiltersProvider } from './contexts/filters_context';
import { CartProvider } from './contexts/cart_context';
import { FirebaseProvider } from './contexts/firebase_context';

ReactDOM.render(
  <FirebaseProvider>
    <ProductsProvider>
      <FiltersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FiltersProvider>
    </ProductsProvider>
  </FirebaseProvider>,
  document.getElementById('root')
);
