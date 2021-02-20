import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturedProduct.scss';

const FeaturedProduct = ({ images }) => {
  return (
    <div className='featured__grid'>
      {images.map(({ img, id, url, alt }) => (
        <Link to={url} key={id} className={`featured__grid-item-${id}`}>
          <img src={img} alt={alt} />
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProduct;
