import React from 'react';
import { Link } from 'react-router-dom';

import './SingleProductContainer.scss';
import { SingleProductImages, SingleProductInfo, Links } from '..';
import { useProductsContext } from '../../contexts/products_context';
import { useFiltersContext } from '../../contexts/filters_context';

const SingleProductContainer = () => {
  const { gender } = useProductsContext();
  const { single_product: product } = useFiltersContext();
  const { name, designer } = product[0];

  return (
    <div className='single_product'>
      <Links>
        <Link to='/'>home /</Link>
        <Link to={`/${gender}`}>{gender} /</Link>
        <Link to={`/${gender}/designers/${designer}`}>{designer} /</Link>
        <p>{name}</p>
      </Links>
      <div className='single_product-grid'>
        <SingleProductImages product={product} />
        <SingleProductInfo product={product} />
      </div>
    </div>
  );
};

export default SingleProductContainer;
