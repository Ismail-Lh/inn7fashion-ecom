import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './DesignerProductsContainer.scss';

import { useProductsContext } from '../../contexts/products_context';
import { DesignerInfo, Links, ProductsContainer, Spinner } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

const DesignerProductsContainer = () => {
  const { gender, designer_data: designer } = useProductsContext();
  const { filtered_products: products } = useFiltersContext();
  const [loading, setLoading] = useState(true);

  return (
    <div className='designer__container'>
      {loading ? (
        <Spinner loading={loading} setLoading={setLoading} />
      ) : (
        <>
          <Links>
            <Link to='/'>home /</Link>
            <Link to={`/${gender}`}>{gender} /</Link>
            <Link to={`/${gender}/designers`}>designers /</Link>
            <p>{designer.desig}</p>
          </Links>
          <DesignerInfo />
          <ProductsContainer products={products} />
        </>
      )}
    </div>
  );
};

export default DesignerProductsContainer;
