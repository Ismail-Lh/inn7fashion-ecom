import React from 'react';
import { Link } from 'react-router-dom';

import { useProductsContext } from '../../contexts/products_context';
import { designers } from '../../productsData';
import { Links } from '..';

import './DesignersContainer.scss';

const DesignersContainer = () => {
  const { categories } = useProductsContext();
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
              <ul>
                {designer.map((des, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/${categories}/designers/${des
                        .trim()
                        .toLowerCase()}`}
                      key={idx}>
                      {des}
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
