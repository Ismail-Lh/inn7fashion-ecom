import { v4 as uuidv4 } from 'uuid';

// Men
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

// Women
import dce_jacket_1 from './assets/women/139dec/139dec jacket/1.jpg';
import dce_jacket_2 from './assets/women/139dec/139dec jacket/2.jpg';

import coat_1 from './assets/women/avant toi/coat/1.jpg';
import coat_2 from './assets/women/avant toi/coat/2.jpg';

import rta_stella_1 from './assets/women/rta/rta stella/1.jpg';
import rta_stella_2 from './assets/women/rta/rta stella/2.jpg';

import trasint_leather_jacket_1 from './assets/women/trasint/trasint leather jacket/1.jpg';
import trasint_leather_jacket_2 from './assets/women/trasint/trasint leather jacket/2.jpg';

import y3_adilette_1 from './assets/women/y-3/y-3 adilette slide sandals/1.jpg';
import y3_adilette_2 from './assets/women/y-3/y-3 adilette slide sandals/2.jpg';

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
      popularity: true,
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
      popularity: true,
    },
  ],
  women: [
    {
      id: uuidv4(),
      name: '139dce jacket',
      designer: '139dce',
      images: [dce_jacket_1, dce_jacket_2],
      price: 33000,
      discountPer: 33,
      sizes: [
        { size: 's', isAvailable: true },
        { size: 'm', isAvailable: false },
        { size: 'l', isAvailable: true },
        { size: 'xl', isAvailable: false },
      ],
      popularity: true,
    },
    {
      id: uuidv4(),
      name: 'coat',
      designer: 'avant toi',
      images: [coat_1, coat_2],
      price: 131500,
      discountPer: 50,
      sizes: [
        { size: 's', isAvailable: true },
        { size: 'm', isAvailable: true },
      ],
      popularity: true,
    },
    {
      id: uuidv4(),
      name: 'rta stella',
      designer: 'rta',
      images: [rta_stella_1, rta_stella_2],
      price: 68500,
      discountPer: 50,
      sizes: [
        { size: 's', isAvailable: true },
        { size: 'm', isAvailable: false },
        { size: 'l', isAvailable: true },
      ],
      popularity: true,
    },
    {
      id: uuidv4(),
      name: 'trasint leather jacket',
      designer: 'trasint',
      images: [trasint_leather_jacket_1, trasint_leather_jacket_2],
      price: 85500,
      discountPer: 50,
      sizes: [
        { size: '1', isAvailable: true },
        { size: '2', isAvailable: false },
        { size: '3', isAvailable: false },
        { size: '4', isAvailable: true },
      ],
      popularity: true,
    },
    {
      id: uuidv4(),
      name: 'y-3 adilette slide sandals',
      designer: 'y-3',
      images: [y3_adilette_1, y3_adilette_2],
      price: 10500,
      discountPer: 1,
      sizes: [
        { size: '5', isAvailable: false },
        { size: '6', isAvailable: true },
        { size: '7', isAvailable: true },
        { size: '8', isAvailable: true },
      ],
      popularity: true,
    },
  ],
};

export default AllProducts;
