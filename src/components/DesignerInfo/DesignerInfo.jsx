import React from 'react';
import { useProductsContext } from '../../contexts/products_context';

import './DesignerInfo.scss';

const DesignerInfo = () => {
  const { designer_data: designer } = useProductsContext();

  return (
    <div className='designer__info'>
      <h1 className='designer__info-name'>{designer.desig}</h1>
      <p className='designer__info-desc'>{designer.desc}</p>
    </div>
  );
};

export default DesignerInfo;
