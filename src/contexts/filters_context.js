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
  filtered_products: getLocalStorage('filteredProducts'),
  popular_products: [],
  single_product: getLocalStorage('singleProduct'),
  designer_products: getLocalStorage('designerProducts'),
  products_category: 'clothing',
  products_by_category: getLocalStorage('productsByCategory'),
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
  const { all_products: products, gender } = useProductsContext();
  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  // Get single product info action
  const getSingleProduct = id => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: id,
    });
  };

  // Get designer products action
  const getDesignerProducts = designer => {
    dispatch({
      type: GET_DESIGNER_PRODUCTS,
      payload: designer,
    });
  };

  const getProductsByCategory = category => {
    dispatch({ type: UPDATE_CATEGORY, payload: category });

    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
    });
  };

  // Update Sort action
  const updateSort = e => {
    const { value } = e.target;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // Update Filters action
  const updateFilters = e => {
    let { name, value } = e.target;

    if (name === 'price') value = +value;

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  // Clear Filters action
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  // Get products by gender
  useEffect(() => {
    dispatch({ type: GET_PRODUCTS_BY_GENDER, payload: { gender, products } });
  }, [gender, products]);

  // Get popular products based an their gender
  useEffect(() => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
    });

    setLocalStorage('productsByGender', state.products_by_gender);
  }, [gender, state.products_by_gender]);

  // Set filtered & designer products to localStorage

  useEffect(() => {
    setLocalStorage('filteredProducts', state.filtered_products);
    dispatch({ type: GET_FILTERS_VALUE });
  }, [
    state.products_category,
    state.products_by_category,
    state.designer_products,
  ]);

  useEffect(() => {
    setLocalStorage('designerProducts', state.designer_products);
  }, [state.designer_products, gender]);

  // Set single product info to localStorage
  useEffect(() => {
    setLocalStorage('singleProduct', state.single_product);
  }, [state.single_product, state.filtered_products]);

  useEffect(() => {
    setLocalStorage('productsByCategory', state.products_by_category);
  }, [state.products_by_category, state.products_category]);

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
