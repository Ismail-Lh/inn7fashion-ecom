import React, { useState } from 'react';
import { useProductsContext } from '../../contexts/products_context';

import './SingleProductImages.scss';

const SingleProductImages = () => {
  const { single_product: product } = useProductsContext();
  const images = product[0].map(({ images }) => images);

  const [image, setImage] = useState(0);

  return (
    <div className='single_product-images'>
      <div className='single_product-images-1'>
        {images.map(img =>
          img.map((src, idx) => (
            <img src={src} alt={src} key={idx} onClick={() => setImage(idx)} />
          ))
        )}
      </div>
      <div className='single_product-images-2'>
        {images.map((src, idx) => (
          <img src={src[image]} alt={src} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SingleProductImages;
