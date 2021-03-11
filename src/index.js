import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { ProductsProvider } from './contexts/products_context';
import { FiltersProvider } from './contexts/filters_context';

ReactDOM.render(
  <ProductsProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ProductsProvider>,
  document.getElementById('root')
);
