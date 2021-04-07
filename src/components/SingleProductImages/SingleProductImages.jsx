import React, { useState } from 'react';
import { useProductsContext } from '../../contexts/products_context';

import './SingleProductImages.scss';

const SingleProductImages = ({ product }) => {
  const { gender } = useProductsContext();

  const { images, designer, name, color } = product[0];

  const [idx, setIdx] = useState(1);

  return (
    <div className='single_product-images'>
      <div className='single_product-images-1'>
        {images.map((img, i) => (
          <img
            src={`/images/${gender}/${designer}/${name}/${color}/small/${
              i + 1
            }.jpg`}
            alt={img}
            key={i}
            onClick={() => setIdx(i + 1)}
          />
        ))}
      </div>
      <div className='single_product-images-2'>
        <img
          src={`/images/${gender}/${designer}/${name}/${color}/large/${idx}.jpg`}
          alt={images[idx]}
        />
      </div>
    </div>
  );
};

export default SingleProductImages;
