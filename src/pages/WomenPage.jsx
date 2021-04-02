import React from 'react';

import { featuredImages } from '../utils/constants';
import { FeaturedProduct, InstaShop, PopularProducts } from '../components';

import feat_1 from '../assets/women/feat-women-1.jpg';
import feat_2 from '../assets/women/feat-women-2.jpg';
import feat_3 from '../assets/women/feat-women-3.jpg';
import feat_4 from '../assets/women/feat-women-4.jpg';

const images = { feat_1, feat_2, feat_3, feat_4 };

const WomenPage = () => {
  return (
    <div className='page__women'>
      <FeaturedProduct images={featuredImages(images)} />
      <PopularProducts />
      <InstaShop />
    </div>
  );
};

export default WomenPage;
