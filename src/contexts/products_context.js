import React, { createContext, useContext, useEffect, useReducer } from 'react';

import {
  GET_POPULAR_PRODUCTS,
  UPDATE_CATEGORIES,
  GET_SINGLE_PRODUCT,
} from '../actions';

import ProductsReducer from '../reducers/products_reducer';
import AllProducts from '../productsData';

const initialState = {
  all_products: [AllProducts],
  popular_products: [],
  categories: 'men',
  single_product: {},
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getPopularProducts = categories => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
      payload: {
        allProducts: state.all_products,
        categories,
      },
    });
  };

  const updateCategories = e => {
    const value = e.target.dataset.categories;

    dispatch({ type: UPDATE_CATEGORIES, payload: value });
  };

  const getSingleProduct = (id, categories) => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: {
        allProducts: state.all_products,
        id,
        categories,
      },
    });
  };

  useEffect(() => {
    getPopularProducts(state.categories);
  }, [state.categories]);

  return (
    <ProductsContext.Provider
      value={{ ...state, updateCategories, getSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
