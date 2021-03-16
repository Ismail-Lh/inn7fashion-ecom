import React from 'react';
import { RemoveButton } from '..';
import { useCartContext } from '../../contexts/cart_context';
import { formatPrice, finalItemPrice } from '../../utils/helpers';

import './ShoppingCartProducts.scss';

const ShoppingCartProducts = () => {
  const { cart } = useCartContext();
  return (
    <div className='shoppingCart__products'>
      <div className='header'>
        <p>product</p>
        <p>price</p>
        <p>qty</p>
        <p>actions</p>
      </div>

      <div className='products'>
        {cart.map(
          ({ id, name, price, designer, color, image, size, discountPer }) => (
            <div className='product' key={id}>
              <div className='product__image'>
                <img src={image} alt={name} />
                <div className='product__info'>
                  <p className='product__name'>{name}</p>
                  <p className='product__designer'>{designer}</p>
                  <p className='product__sku'>sku : {color}</p>
                  <p className='product__color'>color : {color}</p>
                  <p className='product__size'>
                    Size : <span>{size}</span>
                  </p>
                </div>
              </div>
              <div className='product__price'>
                <p>{formatPrice(finalItemPrice(price, discountPer))}</p>
              </div>

              <div className='product__qty'></div>

              <div className='product__actions'>
                <RemoveButton id={id} />
                <p>remove product</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ShoppingCartProducts;
