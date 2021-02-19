import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturedProduct.scss';

const FeaturedProduct = ({ p_1, p_2, p_3, p_4 }) => {
  return (
    <div className='featured__grid'>
      <Link to='/' className='featured__grid-item-1'>
        <img src={p_1} alt='img-1' />
      </Link>

      <Link to='/' className='featured__grid-item-2'>
        <img src={p_2} alt='img-2' />
      </Link>

      <Link to='/' className='featured__grid-item-3'>
        <img src={p_3} alt='img-3' />
      </Link>

      <Link to='/' className='featured__grid-item-4'>
        <img src={p_4} alt='img-4' />
      </Link>
    </div>
  );
};

export default FeaturedProduct;
