import React from 'react';

import './CategoryProductsContainer.scss';

import { ProductsContainer } from '..';
// import { useFiltersContext } from '../../contexts/filters_context';

const CategoryProductsContainer = () => {
  return (
    <div className='categoryProducts__container'>
      <ProductsContainer />
    </div>
  );
};

export default CategoryProductsContainer;
