import React from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import './CardItem.scss';

import { useProductsContext } from '../../contexts/products_context';
import ProductPrice from '../ProductPrice/ProductPrice';

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
          <i className='fas fa-search' />
          <i className='far fa-heart' />
        </div>

        <div className='sizes'>
          {sizes.map(({ size, isAvailable }) => (
            <p className={`${isAvailable ? 'bold' : 'regular'}`} key={uuidv4()}>
              {size}
            </p>
          ))}
        </div>
      </Link>

      <h3 className='card__name'>{name}</h3>
      <p className='card__designer'>{designer}</p>
      <p className='card__price'>
        <ProductPrice price={price} discountPer={discountPer} />
      </p>
    </div>
  );
};

export default CardItem;
