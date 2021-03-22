import React, { useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import './PopularProducts.scss';

import { CardItem } from '..';
import { useProductsContext } from '../../contexts/products_context';

const PopularProducts = () => {
  // const { popular_products } = useProductsContext();

  const [breakPoints, setbreakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 1 },
    { width: 1040, itemsToShow: 3 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]);

  const arrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <i class='fas fa-chevron-left' />
      ) : (
        <i class='fas fa-chevron-right' />
      );
    return (
      <button onClick={onClick} disabled={isEdge} className='btns'>
        {pointer}
      </button>
    );
  };

  return (
    <div className='cards'>
      <h1>most popular</h1>
      <div>
        {/* <Carousel
          itemsToScroll={1}
          pagination={false}
          renderArrow={arrow}
          breakPoints={breakPoints}>
          {popular_products.map(products =>
            products.map(product => <CardItem key={product.id} {...product} />)
          )}
        </Carousel> */}
      </div>
    </div>
  );
};

export default PopularProducts;
