import React, { useState } from 'react';

import './CardItem.scss';
import { formatPrice } from '../../utils/helpers';

const CardItem = ({
  name,
  designer,
  price,
  discountPer,
  color,
  images,
  sizes,
}) => {
  const salePrice = (price * discountPer) / 100;

  return (
    <div className='card'>
      <div className='card__img'>
        <img
          src={images[0]}
          alt={`${designer}-${name}-1`}
          className='card__img-1'
        />
        <img
          src={images[1]}
          alt={`${designer}-${name}-2`}
          className='card__img-2'
        />
        <div className='icons'>
          <i class='fas fa-search' />
          <i class='far fa-heart' />
        </div>

        <div className='sizes'>
          {sizes.map(({ size, isAvailable }) => (
            <p className={`${isAvailable ? 'bold' : 'regular'}`}>{size}</p>
          ))}
        </div>
      </div>

      <h3 className='card__name'>{name}</h3>
      <p className='card__designer'>{designer}</p>
      <p className='card__price'>
        <span>{formatPrice(price)}</span> <span>{formatPrice(salePrice)}</span>{' '}
      </p>
    </div>
  );
};

export default CardItem;
