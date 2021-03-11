import React, { createContext, useContext, useEffect, useReducer } from 'react';
import FiltersReducer from '../reducers/filters_reducer';
import { useProductsContext } from './products_context';

import { LOAD_PRODUCTS, UPDATE_SORT, SORT_PRODUCTS } from '../actions';

const initialState = {
  filtered_products: [],
  all_products: [],
  filters: {
    max_price: 0,
    min_price: 0,
    price: 0,
  },
};

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const { designer_products: products } = useProductsContext();
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  const updateSort = e => {
    const sortValue = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: sortValue });
  };

  return (
    <FiltersContext.Provider value={{ ...state, updateSort }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
