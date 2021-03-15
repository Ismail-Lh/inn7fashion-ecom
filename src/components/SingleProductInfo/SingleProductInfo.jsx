import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SingleProductInfo.scss';

import { useProductsContext } from '../../contexts/products_context';
import { useCartContext } from '../../contexts/cart_context';
import { formatPrice } from '../../utils/helpers';
import { Button } from '..';

const SingleProductInfo = () => {
  const { single_product: product, categories } = useProductsContext();
  const {
    name,
    designer,
    price,
    collection,
    sizes,
    details,
    desc,
    color,
    sku,
    discountPer,
    id,
  } = product;

  const [size, setSize] = useState('');

  const { addToCart, selectSize } = useCartContext();

  const salePrice = (price * discountPer) / 100;

  return (
    <div className='single-product_info'>
      <div className='single-product_info-1'>
        <h1 className='single-product_info-name'>{name}</h1>
        <h2 className='single-product_info-designer'>
          <Link to={`/${categories}/${designer}`}>{designer}</Link>
        </h2>
        <h2 className='single-product_info-price'>
          <span>{formatPrice(price)}</span>{' '}
          <span>{formatPrice(salePrice)}</span>
        </h2>
      </div>

      <div className='single-product_info-2'>
        {collection && (
          <p className='single-product_info-collection'>{collection}</p>
        )}
        <div className='single-product_info-sizes'>
          <p className='title'>select size - {size}</p>
          <div className='sizes'>
            {sizes.map((s, idx) => (
              <p
                className={`${s.isAvailable ? 'bold' : 'regular'}`}
                key={idx}
                onClick={() => {
                  setSize(s.size);
                  selectSize(s.size);
                }}>
                {s.size}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='single-product_info-3'>
        <Button onClick={() => addToCart(product)}>add to bag</Button>
        <div className='wishlist'>
          <i className='far fa-heart' />
          <p>wishlist</p>
        </div>
      </div>
      <Link to='/' className='link'>
        do you have a question?
      </Link>

      <div className='single-product_info-4'>
        <div className='single-product_info-color_sku'>
          <div>
            <p>color :</p>
            <p>sku :</p>
          </div>
          <div>
            <p>{color}</p>
            <p>{sku}</p>
          </div>
        </div>
      </div>

      <div className='single-product_info-5'>
        <p className='single-product_info-desc'>{desc}</p>
        <ul className='single-product_info-details'>
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProductInfo;
