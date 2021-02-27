import React from 'react';
import { Link } from 'react-router-dom';

import './CardItem.scss';
import { formatPrice } from '../../utils/helpers';
import { useProductsContext } from '../../contexts/products_context';

const CardItem = ({
  name,
  designer,
  price,
  discountPer,
  images,
  sizes,
  id,
}) => {
  const { categories, getSingleProduct } = useProductsContext();

  const salePrice = (price * discountPer) / 100;
  const url = `${categories}/${designer}/${name}`;

  return (
    <div className='card'>
      <Link
        to={`/products/${url}`}
        className='card__img'
        onClick={() => getSingleProduct(id, categories)}>
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
      </Link>

      <h3 className='card__name'>{name}</h3>
      <p className='card__designer'>{designer}</p>
      <p className='card__price'>
        <span>{formatPrice(price)}</span> <span>{formatPrice(salePrice)}</span>{' '}
      </p>
    </div>
  );
};

export default CardItem;
