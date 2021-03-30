import React from 'react';

import './Spinner.scss';

import PuffLoader from 'react-spinners/PuffLoader';
import { useProductsContext } from '../../contexts/products_context';

const Spinner = () => {
  const { loading } = useProductsContext();

  return (
    <div className='spinner'>
      <PuffLoader color={'#282828'} loading={loading} size={100} />
    </div>
  );
};

export default Spinner;
