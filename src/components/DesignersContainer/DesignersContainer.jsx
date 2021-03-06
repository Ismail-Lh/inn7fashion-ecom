import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useProductsContext } from '../../contexts/products_context';
import { designers } from '../../productsData';
import { Links } from '..';

import './DesignersContainer.scss';

const DesignersContainer = () => {
  const { categories, getDesignerProducts } = useProductsContext();
  return (
    <div className='designers'>
      <Links>
        <Link to='/'>home /</Link>
        <Link to={`/${categories}`}>{categories} /</Link>
        <p>designers</p>
      </Links>

      <h1 className='designers__title'>designer</h1>

      <div className='designers__grid'>
        {designers[categories].map(({ order, designer }) => {
          return (
            <div className='designers__grid-items'>
              <h2>{order}</h2>
              <ul key={uuidv4()}>
                {designer.map(item => (
                  <li key={uuidv4()}>
                    <Link
                      to={`/${categories}/designers/${item.desig
                        .trim()
                        .toLowerCase()}`}
                      key={item.desigId}
                      onClick={() => getDesignerProducts(item)}>
                      {item.desig}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignersContainer;
