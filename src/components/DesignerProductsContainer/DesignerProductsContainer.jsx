import React from 'react';
import { Link } from 'react-router-dom';

import './DesignerProductsContainer.scss';

import { useProductsContext } from '../../contexts/products_context';
import { DesignerInfo, DesignerProducts, Links } from '..';

const DesignerProductsContainer = () => {
  const { categories, designer_data: designer } = useProductsContext();

  return (
    <div className='designer__container'>
      <Links>
        <Link to='/'>home /</Link>
        <Link to={`/${categories}`}>{categories} /</Link>
        <Link to={`/${categories}/designers`}>designers /</Link>
        <p>{designer.desig}</p>
      </Links>
      <DesignerInfo />
      <DesignerProducts />
    </div>
  );
};

export default DesignerProductsContainer;
