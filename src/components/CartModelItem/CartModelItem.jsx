import React from 'react';
import { Link } from 'react-router-dom';

import './CartModelItem.scss';

import { finalItemPrice, formatPrice } from '../../utils/helpers';
import { useProductsContext } from '../../contexts/products_context';
import { RemoveButton } from '..';

const CartModelItem = ({
  id,
  name,
  designer,
  price,
  size,
  image,
  discountPer,
}) => {
  const { categories, getSingleProduct } = useProductsContext();

  return (
    <div className='cartModel__item'>
      <RemoveButton id={id} />
      <Link
        to={`/products/${categories}/${designer}/${name}`}
        onClick={() => getSingleProduct(id, categories)}
        className='cartModel__img'>
        <img src={image} alt={name} />
      </Link>
      <div className='cartModel__info'>
        <p className='name'>{name}</p>
        <p className='designer'>{designer}</p>
        <p className='price'>
          {discountPer
            ? formatPrice(finalItemPrice(price, discountPer))
            : formatPrice(price)}
        </p>
        <p className='size'>
          <small>Size :</small> <span>{size}</span>
        </p>
      </div>
    </div>
  );
};

export default CartModelItem;
