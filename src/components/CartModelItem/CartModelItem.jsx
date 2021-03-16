import React from 'react';
import { Link } from 'react-router-dom';

import './CartModelItem.scss';

import { finalItemPrice, formatPrice } from '../../utils/helpers';
import { useCartContext } from '../../contexts/cart_context';
import { useProductsContext } from '../../contexts/products_context';

const CartModelItem = ({
  id,
  name,
  designer,
  price,
  size,
  image,
  discountPer,
}) => {
  const { removeItem } = useCartContext();
  const { categories } = useProductsContext();

  return (
    <div className='cartModel__item'>
      <button className='delete-icon' onClick={() => removeItem(id)}>
        <i className='fas fa-trash-alt' />
      </button>
      <Link
        // ------------------------------------
        to={`/products/${categories}/${designer}/${name}`}
        className='cartModel__img'>
        <img src={image} alt={name} />
      </Link>
      <div className='cartModel__info'>
        <p className='name'>{name}</p>
        <p className='designer'>{designer}</p>
        <p className='price'>
          {formatPrice(finalItemPrice(price, discountPer))}
        </p>
        <p className='size'>
          <small>Size :</small> <span>{size}</span>
        </p>
      </div>
    </div>
  );
};

export default CartModelItem;
