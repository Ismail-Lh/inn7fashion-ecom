import React from 'react';
import { useFiltersContext } from '../../contexts/filters_context';
import { formatPrice } from '../../utils/helpers';

import './Filters.scss';

const Filters = () => {
  const { filters } = useFiltersContext();
  const { max_price, min_price, price } = filters;

  return (
    <div className='filters'>
      <h1 className='filters__title'>Filters</h1>
      <form className='filters__form' onSubmit={e => e.preventDefault()}>
        <div className='sale'>
          <select name='sale'>
            <option value='10%' default>
              10%
            </option>
            <option value='20%'>20%</option>
            <option value='30% '>30%</option>
            <option value='40%'>40%</option>
            <option value='50%'>50%</option>
            <option value='60%'>60%</option>
            <option value='70%'>70%</option>
          </select>
        </div>

        <div className='collections'>
          <select name='collection'>
            <option value='summer 2021' default>
              summer 2021
            </option>
            <option value='winter 20/21'>winter 20/21</option>
            <option value='summer 2020'>summer 2020</option>
            <option value='winter 19/20'>winter 19/20</option>
            <option value='summer 2019'>summer 2019</option>
          </select>
        </div>

        <div className='price'>
          <h2>price {formatPrice(price)}</h2>
          <input
            type='range'
            name='price'
            value={price}
            min={min_price}
            max={max_price}
          />
        </div>
      </form>

      <button className='clear-btn'>clear filters</button>
    </div>
  );
};

export default Filters;
