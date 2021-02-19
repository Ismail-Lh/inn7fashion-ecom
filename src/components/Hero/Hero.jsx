import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <Link to='/men' className='hero__men'></Link>

      <Link to='/women' className='hero__women'></Link>
    </div>
  );
};

export default Hero;
