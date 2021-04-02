import React from 'react';
import { Link } from 'react-router-dom';

import { useProductsContext } from '../../contexts/products_context';
import { DesignerInfo, Links, ProductsContainer, Spinner } from '..';

const DesignerProductsContainer = () => {
  const { gender, designer_data: designer, loading } = useProductsContext();

  return (
    <div className='designer__container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Links>
            <Link to='/'>home /</Link>
            <Link to={`/${gender}`}>{gender} /</Link>
            <Link to={`/${gender}/designers`}>designers /</Link>
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
