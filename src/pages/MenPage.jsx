import React, { useEffect } from 'react';

import { featuredImages } from '../utils/constants';
import { FeaturedProduct, InstaShop, PopularProducts } from '../components';

import feat_1 from '../assets/men/feat-men-1.jpg';
import feat_2 from '../assets/men/feat-men-2.jpg';

const images = { feat_1, feat_2 };

const MenPage = () => {
  return (
    <>
      <FeaturedProduct images={featuredImages(images)} />
      <PopularProducts />
      <InstaShop />
    </>
  );
};

export default MenPage;
