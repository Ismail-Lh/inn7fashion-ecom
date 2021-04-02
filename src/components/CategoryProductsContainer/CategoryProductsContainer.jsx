import React from 'react';

import { ProductsContainer, Spinner } from '..';
import { useProductsContext } from '../../contexts/products_context';

const CategoryProductsContainer = () => {
  const { loading } = useProductsContext();

  return (
    <div className='categoryProducts__container'>
      {loading ? <Spinner /> : <ProductsContainer />}
    </div>
  );
};

export default CategoryProductsContainer;
