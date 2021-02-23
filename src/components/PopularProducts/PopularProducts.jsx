import React from 'react';

import './PopularProducts.scss';

import { CardItem } from '..';
import { popularProducts } from '../../utils/constants';

const PopularProducts = () => {
  return (
    <div>
      <h1>most popular products</h1>
      {popularProducts.map(products => (
        <CardItem products={products} />
      ))}
    </div>
  );
};

export default PopularProducts;
