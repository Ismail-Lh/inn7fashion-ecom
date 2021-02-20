import React from 'react';
import { Hero, FeaturedProduct } from '../components';

import feat_home_1 from '../assets/feat-home-1.jpg';
import feat_home_2 from '../assets/feat-home-2.jpg';
import feat_home_3 from '../assets/feat-home-3.jpg';
import feat_home_4 from '../assets/feat-home-4.jpg';

const images = [
  { id: 1, img: feat_home_1, url: '/', alt: 'feat_home_1' },
  { id: 2, img: feat_home_2, url: '/', alt: 'feat_home_2' },
  { id: 3, img: feat_home_3, url: '/', alt: 'feat_home_3' },
  { id: 4, img: feat_home_4, url: '/', alt: 'feat_home_4' },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct images={images} />
    </>
  );
};

export default HomePage;
