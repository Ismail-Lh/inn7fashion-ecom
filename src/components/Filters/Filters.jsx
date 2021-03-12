import React from 'react';
import { useFiltersContext } from '../../contexts/filters_context';
import { formatPrice } from '../../utils/helpers';

import './Filters.scss';

const Filters = () => {
  const { filters, updateFilters, clearFilters } = useFiltersContext();
  const {
    max_price,
    min_price,
    price,
    percentage,
    max_percentage,
    min_percentage,
  } = filters;

  return (
    <div className='filters'>
      <h1 className='filters__title'>Filters</h1>
      <form className='filters__form' onSubmit={e => e.preventDefault()}>
        <div className='filters__percentage'>
          <input
            type='range'
            name='percentage'
            min={min_percentage}
            max={max_percentage}
            step='5'
            value={percentage}
            onChange={updateFilters}
          />
          <p>{percentage}%</p>
        </div>

        <div className='filters__collection'>
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

        <div className='filters__price'>
          <h2>price {formatPrice(price)}</h2>
          <input
            type='range'
            name='price'
            value={price}
            min={min_price}
            max={max_price}
            onChange={updateFilters}
          />
        </div>
      </form>

      <button className='clear-btn' onClick={clearFilters}>
        clear filters
      </button>
    </div>
  );
};

export default Filters;
