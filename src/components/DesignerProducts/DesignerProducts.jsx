import React from 'react';

import './DesignerProducts.scss';

import { useProductsContext } from '../../contexts/products_context';
import { CardItem } from '../';

const DesignerProducts = () => {
  const { designer_products: products } = useProductsContext();
  return (
    <div className='products__grid'>
      {products.map(product => (
        <CardItem {...product} />
      ))}
    </div>
  );
};

export default DesignerProducts;
