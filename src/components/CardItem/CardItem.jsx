import React, { useState } from 'react';

import './CardItem.scss';
import { formatPrice } from '../../utils/helpers';

const CardItem = ({ name, designer, price, discountPer, color, images }) => {
  const salePrice = (price * discountPer) / 100;

  const [img, setImg] = useState(images[0]);

  return (
    <div className='card'>
      <img
        alt={`${designer}-${name}`}
        className='card__img'
        onMouseEnter={() => setImg(images[1])}
        onMouseLeave={() => setImg(images[0])}
        src={img}
      />
      <h3 className='card__name'>{name}</h3>
      <p className='card__designer'>{designer}</p>
      <p className='card__price'>
        <span>{formatPrice(price)}</span> <span>{formatPrice(salePrice)}</span>{' '}
      </p>

      <div className='icons'>
        <i class='fas fa-search' />
        <i class='far fa-heart' />
      </div>
    </div>
  );
};

export default CardItem;
