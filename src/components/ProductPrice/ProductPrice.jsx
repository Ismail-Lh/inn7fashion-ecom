import React from 'react';

import './ProductPrice.scss';

import { formatPrice, finalItemPrice } from '../../utils/helpers';

const ProductPrice = ({ price, discountPer }) => {
  return (
    <div>
      {discountPer ? (
        <>
          <span className='price__old'>{formatPrice(price)}</span>
          <span className='price__new'>
            {formatPrice(finalItemPrice(price, discountPer))}
          </span>
        </>
      ) : (
        <span>{formatPrice(price)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
