import React, { createContext, useContext, useEffect, useReducer } from 'react';
import FiltersReducer from '../reducers/filters_reducer';
import { useProductsContext } from './products_context';

import {
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
  UPDATE_CATEGORY,
  GET_FILTERS_VALUE,
} from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

const initialState = {
  products_by_gender: getLocalStorage('productsByGender'),
  products: getLocalStorage('products'),
  filtered_products: [],
  popular_products: [],
  single_product: getLocalStorage('singleProduct'),
  products_category: null,
  sort: 'price-lowest',
  filters: {
    max_price: 0,
    min_price: 0,
    price: 0,
    min_percentage: 10,
    max_percentage: 10,
    percentage: 10,
    product_type: 'all',
  },
};

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const { all_products: products, gender } = useProductsContext();
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  // Get products by gender
  useEffect(() => {
    dispatch({ type: GET_PRODUCTS_BY_GENDER, payload: { gender, products } });

    dispatch({
      type: GET_POPULAR_PRODUCTS,
    });
  }, [gender, products]);

  // Get popular products based an their gender
  useEffect(() => {
    setLocalStorage('productsByGender', state.products_by_gender);
  }, [gender, state.products_by_gender]);

  // Get single product info action
  const getSingleProduct = id => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: id,
    });
  };

  // Set single product info to localStorage
  useEffect(() => {
    setLocalStorage('singleProduct', state.single_product);
  }, [state.single_product, state.filtered_products]);

  // Get designer products function
  const getDesignerProducts = designer => {
    dispatch({
      type: GET_DESIGNER_PRODUCTS,
      payload: designer,
    });
  };

  // Get products by their category (clothing, footwear, bags, accessories)
  const getProductsByCategory = category => {
    dispatch({ type: UPDATE_CATEGORY, payload: category });

    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
    });
  };

  // Set products to localStorage
  useEffect(() => {
    setLocalStorage('products', state.products);
  }, [
    state.products_category,
    state.products,
    state.products_by_gender,
    state.filters,
  ]);

  // Update Filters function
  const updateFilters = e => {
    let { name, value } = e.target;

    if (name === 'product_type') value = e.target.textContent;

    if (name === 'price') value = +value;

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  // Filter products function
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters.price, state.filters.product_type]);

  // Get filters value function
  useEffect(() => {
    dispatch({ type: GET_FILTERS_VALUE });
  }, [state.products]);

  // Clear Filters function
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  // Update Sort function
  const updateSort = e => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // Sort products function
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS, payload: state.sort });
  }, [state.sort]);

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
