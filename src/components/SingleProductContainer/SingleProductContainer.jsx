import React from 'react';
import { Link } from 'react-router-dom';

import './SingleProductContainer.scss';
import { SingleProductImages, SingleProductInfo } from '..';
import { useProductsContext } from '../../contexts/products_context';

const SingleProductContainer = () => {
  const { single_product: product, categories } = useProductsContext();
  const name = product[0].map(item => item.name);
  const designer = product[0].map(item => item.designer);

  return (
    <div className='single_product'>
      <div className='single_product-links'>
        <Link to='/'>home /</Link>
        <Link to={`/${categories}`}>{categories} /</Link>
        <Link to={`/${designer}`}>{designer} /</Link>
        <p>{name}</p>
      </div>

      <div className='single_product-grid'>
        <SingleProductImages />
        <SingleProductInfo />
      </div>
    </div>
  );
};

export default SingleProductContainer;
