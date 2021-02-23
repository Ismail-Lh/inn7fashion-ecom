import React from 'react';
import { Link } from 'react-router-dom';

import './InstaShop.scss';

import img_1 from '../../assets/insta-1.jpg';
import img_2 from '../../assets/insta-2.jpg';
import img_3 from '../../assets/insta-3.jpg';
import img_4 from '../../assets/insta-4.jpg';
import img_5 from '../../assets/insta-5.jpg';

const images = [
  { id: 1, img: img_1, alt: 'insta-1' },
  { id: 2, img: img_2, alt: 'insta-2' },
  { id: 3, img: img_3, alt: 'insta-3' },
  { id: 4, img: img_4, alt: 'insta-4' },
  { id: 5, img: img_5, alt: 'insta-5' },
];

const InstaShop = () => {
  return (
    <div className='instashop'>
      <div className='instashop__title'>
        <h1>SHOP INSTAGRAM</h1>
        <a href='https://www.instagram.com/inn7/' target='_'>
          @inn7
        </a>
      </div>

      <div className='instashop__grid'>
        {images.map(({ id, img, alt }) => (
          <div
            className={`instashop__grid-item-${id} instashop__grid-items`}
            key={id}>
            <img src={img} alt={alt} />
            <div className='overlay'>
              <i className='fab fa-instagram' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaShop;
