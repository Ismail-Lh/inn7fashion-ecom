import React from 'react';
import { Link } from 'react-router-dom';

import { AmountButtons, RemoveButton } from '..';
import { useCartContext } from '../../contexts/cart_context';
import { useProductsContext } from '../../contexts/products_context';
import { formatPrice, finalItemPrice } from '../../utils/helpers';

import './ShoppingCartProducts.scss';

const ShoppingCartProducts = () => {
  const { cart, toggleCartAmount } = useCartContext();
  const { gender, getSingleProduct } = useProductsContext();

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
          ({
            id,
            name,
            price,
            designer,
            color,
            image,
            size,
            discountPer,
            sku,
            amount,
          }) => (
            <div className='product' key={id}>
              <div className='product__image'>
                <Link
                  to={`/products/${gender}/${designer}/${name}`}
                  onClick={() => getSingleProduct(id, gender)}>
                  <img
                    src={`/images/${gender}/${designer}/${name}/${color}/small/1.jpg`}
                    alt={name}
                  />
                </Link>
                <div className='product__info'>
                  <p className='product__name'>{name}</p>
                  <p className='product__designer'>{designer}</p>
                  <p className='product__sku'>sku : {sku}</p>
                  <p className='product__color'>color : {color}</p>
                  <p className='product__size'>
                    Size : <span>{size}</span>
                  </p>
                </div>
              </div>
              <div className='product__price'>
                <p>
                  {discountPer
                    ? formatPrice(finalItemPrice(price, discountPer))
                    : formatPrice(price)}
                </p>
              </div>

              <div className='product__qty'>
                <AmountButtons
                  amount={amount}
                  increaseAmount={() => toggleCartAmount(id, 'inc')}
                  decreaseAmount={() => toggleCartAmount(id, 'dec')}
                />
              </div>

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
