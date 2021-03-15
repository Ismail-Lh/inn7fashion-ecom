import React from 'react';

import './CartModelItem.scss';

import { formatPrice } from '../../utils/helpers';
import { useCartContext } from '../../contexts/cart_context';

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
    <div className='cartModel__item'>
      <button className='delete-icon' onClick={() => removeItem(id)}>
        <i className='fas fa-trash-alt' />
      </button>
      <div className='cartModel__img'>
        <img src={image} alt={name} />
      </div>
      <div className='cartModel__info'>
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
