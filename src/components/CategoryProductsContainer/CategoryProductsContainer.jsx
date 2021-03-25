import React, { useState } from 'react';

import './CategoryProductsContainer.scss';

import { ProductsContainer, Spinner } from '..';
import { useProductsContext } from '../../contexts/products_context';

const CategoryProductsContainer = () => {
  const { products_category: products } = useProductsContext();
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
