import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import './PopularProducts.scss';

import { CardItem } from '..';
import { popularProducts } from '../../utils/constants';

const PopularProducts = () => {
  const [breakPoints, setbreakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 1 },
    { width: 1040, itemsToShow: 3 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]);

  return (
    <div className='cards'>
      <h1>most popular</h1>
      <div>
        <Carousel
          itemsToScroll={1}
          pagination={false}
          breakPoints={breakPoints}>
          {popularProducts.map(product => (
            <CardItem key={product.id} {...product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularProducts;
