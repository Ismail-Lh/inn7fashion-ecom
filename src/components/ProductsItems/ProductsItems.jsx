import React from 'react';
import { CardItem } from '..';

import './ProductsItems.scss';

const ProductsItems = ({ products }) => {
  return (
    <div className='products__grid'>
      {products?.map(product => (
        <CardItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsItems;
