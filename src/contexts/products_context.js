import React, { createContext, useContext, useEffect, useReducer } from 'react';

import {
  GET_POPULAR_PRODUCTS,
  UPDATE_CATEGORIES,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER_PRODUCTS,
  GET_DESIGNER,
} from '../actions';

import { getLocalStorage } from '../utils/helpers';

import ProductsReducer from '../reducers/products_reducer';
import { AllProducts, designers } from '../productsData';

const initialState = {
  all_products: [AllProducts],
  popular_products: [],
  categories: getLocalStorage('categories'),
  single_product: getLocalStorage('singleProduct'),
  designer_products: getLocalStorage('designerProducts'),
  designer_data: getLocalStorage('designerData'),
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

  const getDesignerProducts = designer => {
    dispatch({
      type: GET_DESIGNER_PRODUCTS,
      payload: {
        allProducts: state.all_products,
        categories: state.categories,
        designer: designer.desig,
      },
    });

    dispatch({
      type: GET_DESIGNER,
      payload: {
        designers,
        categories: state.categories,
        designer,
      },
    });
  };

  useEffect(() => {
    getPopularProducts(state.categories);

    localStorage.setItem('categories', JSON.stringify(state.categories));

    localStorage.setItem('singleProduct', JSON.stringify(state.single_product));

    localStorage.setItem(
      'designerProducts',
      JSON.stringify(state.designer_products)
    );

    localStorage.setItem('designerData', JSON.stringify(state.designer_data));
  }, [
    state.categories,
    state.designer_products,
    state.single_product,
    state.designer_data,
  ]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        updateCategories,
        getSingleProduct,
        getDesignerProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
