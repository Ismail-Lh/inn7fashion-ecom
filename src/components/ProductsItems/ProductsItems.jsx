import React from 'react';
import { CardItem } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

import './ProductsItems.scss';

const ProductsItems = () => {
  const { filtered_products: products } = useFiltersContext();
  return (
    <div className='products__grid'>
      {products.map(product => (
        <CardItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsItems;
