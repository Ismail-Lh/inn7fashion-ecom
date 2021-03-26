import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import FiltersReducer from '../reducers/filters_reducer';
import { useProductsContext } from './products_context';

import {
  LOAD_PRODUCTS,
  GET_FILTERS_VALUE,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  GET_DESIGNER_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_GENDER,
  GET_POPULAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
} from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

const initialState = {
  filtered_products: getLocalStorage('filteredProducts'),
  popular_products: [],
  single_product: getLocalStorage('singleProduct'),
  designer_products: getLocalStorage('designerProducts'),
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
    all_products: products,
    gender,
    designer_data: designer,
  } = useProductsContext();
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS_BY_GENDER, payload: { gender, products } });
  }, [gender, products]);

  useEffect(() => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
    });
  }, [gender]);

  const getSingleProduct = id => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: id,
    });
  };

  const getDesignerProducts = designer => {
    dispatch({
      type: GET_DESIGNER_PRODUCTS,
      payload: designer,
    });
  };

  const getProductsByCategory = category => {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: category,
    });
  };

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

  useEffect(() => {
    setLocalStorage('filteredProducts', state.filtered_products);
    setLocalStorage('designerProducts', state.designer_products);
  }, [state.filtered_products, state.designer_products, gender]);

  useEffect(() => {
    setLocalStorage('singleProduct', state.single_product);
  }, [state.single_product, state.filtered_products]);

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
        getSingleProduct,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
