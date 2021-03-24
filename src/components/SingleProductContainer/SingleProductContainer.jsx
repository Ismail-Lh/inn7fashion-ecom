import React from 'react';
import { Link } from 'react-router-dom';

import './SingleProductContainer.scss';
import { SingleProductImages, SingleProductInfo, Links } from '..';
import { useProductsContext } from '../../contexts/products_context';

const SingleProductContainer = () => {
  const { single_product: product, categories } = useProductsContext();
  const { name, designer } = product[0];

  return (
    <div className='single_product'>
      <Links>
        <Link to='/'>home /</Link>
        <Link to={`/${categories}`}>{categories} /</Link>
        <Link to={`/${categories}/designers/${designer}`}>{designer} /</Link>
        <p>{name}</p>
      </Links>
      <div className='single_product-grid'>
        <SingleProductImages />
        <SingleProductInfo />
      </div>
    </div>
  );
};

export default SingleProductContainer;
