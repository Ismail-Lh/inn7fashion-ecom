import React, { useState } from 'react';

import './ProductsContainer.scss';
import { Filters, Sort, ProductsItems, Pagination } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

const ProductsContainer = () => {
  const { filtered_products: products } = useFiltersContext();

  const [productsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = products.length;
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <div className='products__container'>
        <Sort />
        <Filters />
        <ProductsItems currentProducts={currentProducts} />
      </div>
      <Pagination
        totalProducts={totalProducts}
        paginate={paginate}
        productsPerPage={productsPerPage}
      />
    </>
  );
};

export default ProductsContainer;
