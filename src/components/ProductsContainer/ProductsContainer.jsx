import React, { useState, useEffect } from 'react';

import './ProductsContainer.scss';
import { Filters, Sort, ProductsItems, Pagination } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

const ProductsContainer = () => {
  const {
    filtered_products: products,
    products_category: category,
  } = useFiltersContext();

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

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

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
        currentPage={currentPage}
      />
    </>
  );
};

export default ProductsContainer;
