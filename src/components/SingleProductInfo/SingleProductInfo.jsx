import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SingleProductInfo.scss';

import { useProductsContext } from '../../contexts/products_context';
import { formatPrice } from '../../utils/helpers';

const SingleProductInfo = () => {
  const { single_product: product, categories } = useProductsContext();
  const [size, setSize] = useState('');
  const {
    name,
    designer,
    price,
    collection,
    sizes,
    details,
    desc,
    color,
    sku,
    discountPer,
  } = product;

  const salePrice = (price * discountPer) / 100;

  return (
    <div className='single-product_info'>
      <div className='single-product_info-1'>
        <h1 className='single-product_info-name'>{name}</h1>
        <h2 className='single-product_info-designer'>
          <Link to={`/${categories}/${designer}`}>{designer}</Link>
        </h2>
        <h2 className='single-product_info-price'>
          <span>{formatPrice(price)}</span>{' '}
          <span>{formatPrice(salePrice)}</span>
        </h2>
      </div>

      <div className='single-product_info-2'>
        <p className='single-product_info-collection'>{collection}</p>
        <div className='single-product_info-sizes'>
          <p className='title'>select size - {size}</p>
          <div className='sizes'>
            {sizes.map((s, idx) => (
              <p
                className={`${s.isAvailable ? 'bold' : 'regular'}`}
                key={idx}
                onClick={() => setSize(s.size)}>
                {s.size}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductInfo;
