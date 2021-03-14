import React from 'react';

import './CartModelItem.scss';

import { formatPrice } from '../../utils/helpers';

const CartModelItem = ({ name, designer, price, size, image, discountPer }) => {
  const itemPrice = () => {
    let finalPrice;

    if (discountPer) {
      finalPrice = (price * discountPer) / 100;
    } else {
      finalPrice = price;
    }

    return formatPrice(finalPrice);
  };

  return (
    <div className='cart-model__item'>
      <button className='delete-icon'>
        <i className='fas fa-trash-alt' />
      </button>
      <div className='cart-model__img'>
        <img src={image} alt={name} />
      </div>
      <div className='cart-model__info'>
        <p className='name'>{name}</p>
        <p className='designer'>{designer}</p>
        <p className='price'>{itemPrice()}</p>
        <p className='size'>
          <small>Size :</small> <span>{size}</span>
        </p>
      </div>
    </div>
  );
};

export default CartModelItem;
