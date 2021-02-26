import { v4 as uuidv4 } from 'uuid';

import feat_3 from '../assets/feat-3.jpg';
import feat_4 from '../assets/feat-4.jpg';

import isaac_sellam_epicurien_wax_pants_white_1 from '../assets/men/isaac sellam/isaac sellam epicurien-wax pants/white/1.jpg';
import isaac_sellam_epicurien_wax_pants_white_2 from '../assets/men/isaac sellam/isaac sellam epicurien-wax pants/white/2.jpg';

import isaac_sellam_epicurien_wax_pants_grey_1 from '../assets/men/isaac sellam/isaac sellam epicurien-wax pants/grey/1.jpg';
import isaac_sellam_epicurien_wax_pants_grey_2 from '../assets/men/isaac sellam/isaac sellam epicurien-wax pants/grey/2.jpg';

import epicurien_wax_black_1 from '../assets/men/isaac sellam/epicurien-wax/black/1.jpg';
import epicurien_wax_black_2 from '../assets/men/isaac sellam/epicurien-wax/black/2.jpg';

import carson_black_1 from '../assets/men/the last conspiracy/carson/black/1.jpg';
import carson_black_2 from '../assets/men/the last conspiracy/carson/black/2.jpg';

import riley_black_1 from '../assets/men/the last conspiracy/riley/black/1.jpg';
import riley_black_2 from '../assets/men/the last conspiracy/riley/black/2.jpg';

import caden_black_1 from '../assets/men/the last conspiracy/caden/black/1.jpg';
import caden_black_2 from '../assets/men/the last conspiracy/caden/black/2.jpg';

export const navLinks = [
  {
    id: 1,
    link: 'new in',
    url: 'new-in',
  },
  {
    id: 2,
    link: 'designer',
    url: 'designer',
  },
  {
    id: 3,
    link: 'clothing',
    url: 'clothing',
  },
  {
    id: 4,
    link: 'footwear',
    url: 'footwear',
  },
  {
    id: 5,
    link: 'bags',
    url: 'bags',
  },
  {
    id: 6,
    link: 'accessories',
    url: 'accessories',
  },
  {
    id: 7,
    link: 'sale',
    url: 'sale',
  },
];

export const footerLinks = [
  {
    title: 'customer service',
    id: '3',
    links: [
      {
        id: uuidv4(),
        link: 'Orders & Shipping',
      },
      {
        id: uuidv4(),
        link: 'Returns & Refunds',
      },
      {
        id: uuidv4(),
        link: 'FAQs',
      },
      {
        id: uuidv4(),
        link: 'Privacy Policy',
      },
      {
        id: uuidv4(),
        link: 'Contact Us',
      },
    ],
  },
  {
    title: 'about',
    id: '4',
    links: [
      {
        id: uuidv4(),
        link: 'About Us',
      },
      {
        id: uuidv4(),
        link: 'INN7 App',
      },
    ],
  },
  {
    title: 'account',
    id: '5',
    links: [
      {
        id: uuidv4(),
        link: 'My Account',
      },
      {
        id: uuidv4(),
        link: 'Order History',
      },
      {
        id: uuidv4(),
        link: 'WISHLIST',
      },
    ],
  },
];

export const featuredImages = ({ feat_1, feat_2 }) => {
  const images = [
    { id: 1, img: feat_1, url: '/', alt: 'feat_1' },
    { id: 2, img: feat_2, url: '/', alt: 'feat_2' },
    { id: 3, img: feat_3, url: '/', alt: 'feat_3' },
    { id: 4, img: feat_4, url: '/', alt: 'feat_4' },
  ];

  return images;
};

export const popularProducts = [
  {
    id: uuidv4(),
    name: 'isaac sellam epicurien-wax pants',
    designer: 'isaac sellam',
    images: [
      isaac_sellam_epicurien_wax_pants_white_1,
      isaac_sellam_epicurien_wax_pants_white_2,
    ],
    price: 67000,
    discountPer: 70,
    color: 'white',
    sizes: [
      { size: 's', isAvailable: false },
      { size: 'm', isAvailable: true },
      { size: 'l', isAvailable: false },
      { size: 'xl', isAvailable: true },
      { size: 'xxl', isAvailable: false },
      { size: 'xxxl', isAvailable: false },
    ],
    popular: true,
  },
  {
    id: uuidv4(),
    name: 'isaac sellam epicurien-wax pants',
    designer: 'isaac sellam',
    images: [
      isaac_sellam_epicurien_wax_pants_grey_1,
      isaac_sellam_epicurien_wax_pants_grey_2,
    ],
    price: 67000,
    discountPer: 70,
    color: 'grey',
    sizes: [
      { size: 's', isAvailable: false },
      { size: 'm', isAvailable: true },
      { size: 'l', isAvailable: false },
      { size: 'xl', isAvailable: true },
      { size: 'xxl', isAvailable: false },
      { size: 'xxxl', isAvailable: false },
    ],
    popular: true,
  },
  {
    id: uuidv4(),
    name: 'epicurien-wax',
    designer: 'isaac sellam',
    images: [epicurien_wax_black_1, epicurien_wax_black_2],
    color: 'black',
    price: 67000,
    discountPer: 70,
    sizes: [
      { size: 's', isAvailable: false },
      { size: 'm', isAvailable: true },
      { size: 'l', isAvailable: false },
      { size: 'xl', isAvailable: true },
      { size: 'xxl', isAvailable: false },
      { size: 'xxxl', isAvailable: false },
    ],
    popular: true,
  },
  {
    id: uuidv4(),
    name: 'carson',
    designer: 'the last conspiracy',
    images: [carson_black_1, carson_black_2],
    color: 'black',
    price: 25500,
    discountPer: 50,
    sizes: [
      { size: '41seu', isAvailable: false },
      { size: '42seu', isAvailable: false },
      { size: '43seu', isAvailable: false },
      { size: '44seu', isAvailable: false },
      { size: '45seu', isAvailable: true },
      { size: '46seu', isAvailable: true },
    ],
    popular: true,
  },
  {
    id: uuidv4(),
    name: 'riley',
    designer: 'the last conspiracy',
    images: [riley_black_1, riley_black_2],
    color: 'black',
    price: 24000,
    discountPer: 50,
    sizes: [
      { size: '41seu', isAvailable: false },
      { size: '42seu', isAvailable: false },
      { size: '43seu', isAvailable: false },
      { size: '44seu', isAvailable: false },
      { size: '45seu', isAvailable: true },
      { size: '46seu', isAvailable: true },
    ],
    popular: true,
  },
  {
    id: uuidv4(),
    name: 'caden',
    designer: 'the last conspiracy',
    images: [caden_black_1, caden_black_2],
    color: 'black',
    price: 22000,
    discountPer: 50,
    sizes: [
      { size: '41seu', isAvailable: false },
      { size: '42seu', isAvailable: false },
      { size: '43seu', isAvailable: false },
      { size: '44seu', isAvailable: false },
      { size: '45seu', isAvailable: true },
      { size: '46seu', isAvailable: true },
    ],
    popular: true,
  },
];

// {
//   /* <i class="fab fa-searchengin"></i> */
// }

// {
//   /* <i class="fas fa-search"></i> */
//   // <i class="fas fa-heart"></i>
//   // <i class="far fa-heart"></i>
//   // <i class="fas fa-user"></i>
//   // <i class="far fa-user"></i>
// }
