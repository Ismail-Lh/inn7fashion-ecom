import React from 'react';

import {
  Hero,
  FeaturedProduct,
  InstaShop,
  NewsletterForm,
} from '../components';

import { featuredImages } from '../utils/constants';

import feat_1 from '../assets/feat-home-1.jpg';
import feat_2 from '../assets/feat-home-2.jpg';

const images = { feat_1, feat_2 };

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct images={featuredImages(images)} />
      <InstaShop />
      <NewsletterForm />
    </>
  );
};

export default HomePage;
