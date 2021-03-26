import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SingleProductInfo.scss';

import { useProductsContext } from '../../contexts/products_context';
import { useCartContext } from '../../contexts/cart_context';

import { Button, AmountButtons, ProductPrice } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

const SingleProductInfo = ({ product }) => {
  const { gender } = useProductsContext();

  const { addToCart, selectSize } = useCartContext();

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
    stock,
  } = product[0];

  const [size, setSize] = useState('');
  const [showError, setShowError] = useState(false);
  const [amount, setAmount] = useState(1);

  const handelClick = () => {
    if (size.length <= 0) {
      setShowError(true);
    } else {
      addToCart(product, amount, id, size);
      setShowError(false);
    }
  };

  const inc = () => {
    setAmount(oldAmount => {
      let newAmount = oldAmount + 1;

      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const dec = () => {
    setAmount(oldAmount => {
      let newAmount = oldAmount - 1;

      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <div className='single-product_info'>
      <div className='single-product_info-1'>
        <h1 className='single-product_info-name'>{name}</h1>
        <h2 className='single-product_info-designer'>
          <Link to={`/${gender}/${designer}`}>{designer}</Link>
        </h2>
        <h2 className='single-product_info-price'>
          <ProductPrice price={price} discountPer={discountPer} />
        </h2>
      </div>

      <div className='single-product_info-2'>
        {collection && (
          <p className='single-product_info-collection'>{collection}</p>
        )}
        <div className='single-product_info-sizes'>
          <p className='title'>select size - {size}</p>
          <div className='size'>
            {sizes.map((s, idx) => (
              <button
                className={`${
                  s.isAvailable ? 'size__value bold' : 'size__value regular'
                }`}
                disabled={!s.isAvailable}
                key={idx}
                onClick={() => {
                  setSize(s.size);
                  selectSize(s.size);
                }}>
                {s.size}
              </button>
            ))}
          </div>
          {showError && (
            <p className='error'>please select a size! is required.</p>
          )}
        </div>
      </div>

      <div className='single-product_info-3'>
        <AmountButtons
          amount={amount}
          increaseAmount={inc}
          decreaseAmount={dec}
        />
        <Button handelClick={handelClick}>add to bag</Button>
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
          {details?.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProductInfo;

// {
//   /* <div className='wishlist'>
//           <i className='far fa-heart' />
//           <p>wishlist</p>
//         </div> */
// }
