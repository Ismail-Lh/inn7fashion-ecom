import { v4 as uuidv4 } from 'uuid';

import isaac_sellam_epicurien_wax_pants_white_1 from './assets/men/isaac sellam/isaac sellam epicurien-wax pants/white/1.jpg';
import isaac_sellam_epicurien_wax_pants_white_2 from './assets/men/isaac sellam/isaac sellam epicurien-wax pants/white/2.jpg';

import isaac_sellam_epicurien_wax_pants_grey_1 from './assets/men/isaac sellam/isaac sellam epicurien-wax pants/grey/1.jpg';
import isaac_sellam_epicurien_wax_pants_grey_2 from './assets/men/isaac sellam/isaac sellam epicurien-wax pants/grey/2.jpg';

import epicurien_wax_black_1 from './assets/men/isaac sellam/epicurien-wax/black/1.jpg';
import epicurien_wax_black_2 from './assets/men/isaac sellam/epicurien-wax/black/2.jpg';

import carson_black_1 from './assets/men/the last conspiracy/carson/black/1.jpg';
import carson_black_2 from './assets/men/the last conspiracy/carson/black/2.jpg';

import riley_black_1 from './assets/men/the last conspiracy/riley/black/1.jpg';
import riley_black_2 from './assets/men/the last conspiracy/riley/black/2.jpg';

import caden_black_1 from './assets/men/the last conspiracy/caden/black/1.jpg';
import caden_black_2 from './assets/men/the last conspiracy/caden/black/2.jpg';

const AllProducts = {
  men: [
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
      popularity: true,
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
      popularity: true,
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
      popularity: true,
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
      popularity: true,
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
      popularity: false,
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
      popularity: false,
    },
  ],
  women: [
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
  ],
};

export default AllProducts;
