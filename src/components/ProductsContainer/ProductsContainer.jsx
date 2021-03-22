import React from 'react';

import './ProductsContainer.scss';
import { Filters, Sort, ProductsItems } from '..';

const ProductsContainer = () => {
  return (
    <div className='products__container'>
      <Sort />
      <Filters />
      <ProductsItems />
    </div>
  );
};

export default ProductsContainer;
