import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useProductsContext } from '../../contexts/products_context';
import { useFiltersContext } from '../../contexts/filters_context';
import { designers } from '../../productsData';
import { Links } from '..';

import './DesignersContainer.scss';

const DesignersContainer = () => {
  const { gender, getDesigner } = useProductsContext();
  const { getDesignerProducts } = useFiltersContext();

  return (
    <div className='designers'>
      <Links>
        <Link to='/'>home /</Link>
        <Link to={`/${gender}`}>{gender} /</Link>
        <p>designers</p>
      </Links>

      <h1 className='designers__title'>designer</h1>

      <div className='designers__grid'>
        {designers[gender].map(({ order, designer, id }) => {
          return (
            <div className='designers__grid-items' key={id}>
              <h2>{order}</h2>
              <ul>
                {designer.map(item => (
                  <li key={uuidv4()}>
                    <Link
                      to={`/${gender}/designers/${item.desig
                        .trim()
                        .toLowerCase()}`}
                      key={item.desigId}
                      onClick={() => {
                        getDesigner(item);
                        getDesignerProducts(item.desig);
                      }}>
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
