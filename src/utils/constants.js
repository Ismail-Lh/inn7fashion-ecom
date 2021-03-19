import { v4 as uuidv4 } from 'uuid';

import feat_img_3 from '../assets/feat-3.jpg';
import feat_img_4 from '../assets/feat-4.jpg';

export const navLinks = [
  {
    id: 1,
    link: 'new in',
    url: 'new-in',
  },
  {
    id: 2,
    link: 'designers',
    url: 'designers',
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

export const dropDownLinks = {
  men: {
    designers: [
      'VIEW ALL',
      '10SEI0OTTO',
      '11 BY BORIS BIDJAN SABERI',
      '139DCE',
      '50 60 OFF',
      'AITO',
      'ANDREA ZORI',
      'AVANT TOI',
      'BAZZ&LUTRA',
      'BLK DNM',
      'CROQUIS BY JNBY',
      'DAMIR DOMA',
      'ISSAC SELLAM',
    ],
    clothing: [
      'VIEW ALL',
      'BLAZERS',
      'cardigans',
      'coats',
      'denim',
      'jackets',
      'knitwear',
      'leather jackets',
      'pants',
      'shirts',
      'shorts',
      'tank tops',
      't-shirts',
      'vests',
      'jumpsuits',
    ],
    footwear: [
      'view all',
      'boots',
      'lace-ups',
      'loafers',
      'sandals',
      'sneakers',
    ],
    bags: [
      'view all',
      'backpacks',
      'cases & wallets',
      'shoulder bags',
      'pouches',
    ],
    accessories: [
      'view all',
      'belts',
      'gloves',
      'hats',
      'jewelry',
      'scarves',
      'sunglasses',
      'perfumes',
      'masks',
    ],
  },
  women: {
    designers: [
      'VIEW ALL',
      '10SEI0OTTO',
      '11 BY BORIS BIDJAN SABERI',
      '139DCE',
      '50 60 OFF',
      'AITO',
      'ANDREA ZORI',
      'AVANT TOI',
      'BAZZ&LUTRA',
      'BLK DNM',
      'CROQUIS BY JNBY',
      'DAMIR DOMA',
      'ISSAC SELLAM',
    ],
    clothing: [
      'VIEW ALL',
      'BLAZERS',
      'coats',
      'denim',
      'dresses',
      'jackets',
      'knitwear',
      'leather jackets',
      'leggins',
      'pants',
      'shirts',
      'skirts',
      'sweatshirts',
      'swimsuits',
      'tank tops',
      'tops',
      't-shirts',
      'vests',
    ],
    footwear: [
      'view all',
      'boots',
      'flats',
      'lace-ups',
      'loafers',
      'sandals',
      'sneakers',
      'wedges',
    ],
    bags: [
      'view all',
      'backpacks',
      'cases & wallets',
      'clutches',
      'shoulder bags',
    ],
    accessories: [
      'view all',
      'belts',
      'cases & wallets',
      'gloves',
      'hats',
      'jewelry',
      'scarves',
      'sunglasses',
      'perfumes',
    ],
  },
};

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

export const featuredImages = ({
  feat_1,
  feat_2,
  feat_3 = feat_img_3,
  feat_4 = feat_img_4,
}) => {
  const images = [
    { id: 1, img: feat_1, url: '/', alt: 'feat_1' },
    { id: 2, img: feat_2, url: '/', alt: 'feat_2' },
    { id: 3, img: feat_3, url: '/', alt: 'feat_3' },
    { id: 4, img: feat_4, url: '/', alt: 'feat_4' },
  ];

  return images;
};

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
