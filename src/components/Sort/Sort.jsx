import React from 'react';
import { useFiltersContext } from '../../contexts/filters_context';

const Sort = () => {
  const { sort, updateSort } = useFiltersContext();
  return (
    <form>
      <label htmlFor='sort'>Sort by</label>
      <select
        name='sort'
        id='sort'
        className='sort-input'
        value={sort}
        onChange={updateSort}>
        <option value='price-lowest'>price (lowest)</option>
        <option value='price-highest'>price (highest)</option>
        <option value='name-a'>name (a - z)</option>
        <option value='name-z'>name (z - a)</option>
      </select>
    </form>
  );
};

export default Sort;
