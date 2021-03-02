import React, { useState } from 'react';
import { useProductsContext } from '../../contexts/products_context';

import './SingleProductImages.scss';

const SingleProductImages = () => {
  const { single_product: product } = useProductsContext();
  const { images } = product;

  const [idx, setIdx] = useState(0);

  return (
    <div className='single_product-images'>
      <div className='single_product-images-1'>
        {images.map((img, idx) => (
          <img src={img} alt={img} key={idx} onClick={() => setIdx(idx)} />
        ))}
      </div>
      <div className='single_product-images-2'>
        <img src={images[idx]} alt={images[idx]} />
      </div>
    </div>
  );
};

export default SingleProductImages;
