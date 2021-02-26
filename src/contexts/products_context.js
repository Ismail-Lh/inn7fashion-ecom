import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { GET_POPULAR_PRODUCTS } from '../actions';

import ProductsReducer from '../reducers/products_reducer';
import AllProducts from '../productsData';

const ProductsContext = createContext();

const initialState = {
  all_products: [AllProducts],
  popular_products: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getPopularProducts = () => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
      payload: {
        allProducts: state.all_products,
      },
    });
  };

  //   useEffect(() => {
  //     getPopularProducts();
  //   }, []);

  return (
    <ProductsContext.Provider value={{ ...state, getPopularProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
