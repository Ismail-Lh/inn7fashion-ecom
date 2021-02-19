import React from 'react';
import { Hero, FeaturedProduct } from '../components';

import feathome1 from '../assets/feat-home-1.jpg';
import feathome2 from '../assets/feat-home-2.jpg';
import feathome3 from '../assets/feat-home-3.jpg';
import feathome4 from '../assets/feat-home-4.jpg';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct
        p_1={feathome1}
        p_2={feathome2}
        p_3={feathome3}
        p_4={feathome4}
      />
    </>
  );
};

export default HomePage;
