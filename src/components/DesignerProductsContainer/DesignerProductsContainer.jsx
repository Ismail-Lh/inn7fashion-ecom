import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './DesignerProductsContainer.scss';

import { useProductsContext } from '../../contexts/products_context';
import { DesignerInfo, Links, ProductsContainer, Spinner } from '..';

const DesignerProductsContainer = () => {
  const { categories, designer_data: designer } = useProductsContext();
  const [loading, setLoading] = useState(true);

  return (
    <div className='designer__container'>
      {loading ? (
        <Spinner loading={loading} setLoading={setLoading} />
      ) : (
        <>
          <Links>
            <Link to='/'>home /</Link>
            <Link to={`/${categories}`}>{categories} /</Link>
            <Link to={`/${categories}/designers`}>designers /</Link>
            <p>{designer.desig}</p>
          </Links>
          <DesignerInfo />
          <ProductsContainer />
        </>
      )}
    </div>
  );
};

export default DesignerProductsContainer;
