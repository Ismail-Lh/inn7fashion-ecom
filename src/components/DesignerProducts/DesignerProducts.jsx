import React from 'react';

import './DesignerProducts.scss';

import { useFiltersContext } from '../../contexts/filters_context';
import { CardItem } from '../';

const DesignerProducts = () => {
  const { filtered_products: products } = useFiltersContext();
  return (
    <div className='products__grid'>
      {products.map(product => (
        <CardItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default DesignerProducts;
