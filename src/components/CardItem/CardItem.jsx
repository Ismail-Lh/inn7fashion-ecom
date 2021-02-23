import React from 'react';

import './CardItem.scss';

const CardItem = products => {
  console.log(products);
  return (
    <div className='card'>
      <h1>{products.name}</h1>
    </div>
  );
};

export default CardItem;
