import React, { useState } from 'react';

import './CategoryProductsContainer.scss';

import { ProductsContainer, Spinner } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

const CategoryProductsContainer = () => {
  const { filtered_products: products } = useFiltersContext();
  const [loading, setLoading] = useState(true);

  return (
    <div className='categoryProducts__container'>
      {loading ? (
        <Spinner
          setLoading={setLoading}
          loading={loading}
          products={products}
        />
      ) : (
        <ProductsContainer products={products} />
      )}
    </div>
  );
};

export default CategoryProductsContainer;
