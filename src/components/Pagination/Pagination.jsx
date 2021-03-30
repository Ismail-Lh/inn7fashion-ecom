import React from 'react';

import './Pagination.scss';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li
          key={number}
          className='pagination__item'
          onClick={() => paginate(number)}>
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
