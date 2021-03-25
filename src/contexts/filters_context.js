import React, { createContext, useContext, useEffect, useReducer } from 'react';
import FiltersReducer from '../reducers/filters_reducer';
import { useProductsContext } from './products_context';

import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  GET_DESIGNER_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
} from '../actions';

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: 'price-lowest',
  filters: {
    max_price: 0,
    min_price: 0,
    price: 0,
    min_percentage: 10,
    max_percentage: 10,
    percentage: 10,
  },
};

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const {
    products_by_gender: products,
    designer_data: designer,
  } = useProductsContext();
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  const updateSort = e => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = e => {
    let { name, value } = e.target;

    if (name === 'price') value = +value;

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const getProductsByCategory = category => {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: { category, products },
    });
  };

  const getDesignerProducts = designer => {
    dispatch({
      type: GET_DESIGNER_PRODUCTS,
      payload: { designer, products },
    });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS, payload: state.sort });
  }, [state.sort, state.filters, products]);

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        clearFilters,
        getProductsByCategory,
        getDesignerProducts,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
