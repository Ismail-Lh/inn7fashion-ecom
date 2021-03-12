import React, { createContext, useContext, useEffect, useReducer } from 'react';
import FiltersReducer from '../reducers/filters_reducer';
import { useProductsContext } from './products_context';

import { LOAD_PRODUCTS, UPDATE_SORT, SORT_PRODUCTS } from '../actions';

const initialState = {
  all_products: [],
  filtered_products: [],
  filters: {
    max_price: 0,
    min_price: 0,
    price: 0,
  },
  sort: 'price-lowest',
};

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const { designer_products: products } = useProductsContext();
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  const updateSort = e => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS, payload: state.sort });
  }, [state.sort, products]);

  return (
    <FiltersContext.Provider value={{ ...state, updateSort }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
