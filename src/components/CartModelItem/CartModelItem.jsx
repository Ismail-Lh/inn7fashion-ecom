import React from 'react';

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
  color,
  discountPer,
}) => {
  const { gender } = useProductsContext();

  return (
    <div className='cartModel__item'>
      <RemoveButton id={id} />
      <div className='cartModel__img'>
        <img
          src={`/images/${gender}/${designer}/${name}/${color}/1.jpg`}
          alt={name}
        />
      </div>
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
