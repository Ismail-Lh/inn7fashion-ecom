import React, { useEffect } from 'react';

import './Spinner.scss';

import PuffLoader from 'react-spinners/PuffLoader';

const Spinner = ({ loading, setLoading }) => {
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <div className='spinner'>
      <PuffLoader color={'#282828'} loading={loading} size={100} />
    </div>
  );
};

export default Spinner;
