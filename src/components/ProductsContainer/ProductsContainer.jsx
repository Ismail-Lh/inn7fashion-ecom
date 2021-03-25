import React from 'react';

import './ProductsContainer.scss';
import { Filters, Sort, ProductsItems } from '..';

const ProductsContainer = ({ products }) => {
  return (
    <div className='products__container'>
      <Sort />
      <Filters />
      <ProductsItems products={products} />
    </div>
  );
};

export default ProductsContainer;
