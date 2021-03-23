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
  color,
}) => {
  const { categories, getSingleProduct } = useProductsContext();

  const url = `${categories}/${designer}/${name}`;

  return (
    <div className='card'>
      <Link
        to={`/products/${url}`}
        className='card__img'
        onClick={() => getSingleProduct(id)}>
        <img
          src={`/images/${categories}/${designer}/${name}/${color}/${
            images.indexOf(images[0]) + 1
          }.jpg`}
          alt={`${designer}-${name}-1`}
          className='card__img-1'
        />
        <img
          src={`/images/${categories}/${designer}/${name}/${color}/${
            images.indexOf(images[1]) + 1
          }.jpg`}
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
        <h3 className='card__name'>{name}</h3>
      </Link>
      <p className='card__designer'>{designer}</p>

      <ProductPrice price={price} discountPer={discountPer} />
    </div>
  );
};

export default CardItem;
