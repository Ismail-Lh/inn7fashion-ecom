import React, { createContext, useContext, useEffect, useReducer } from 'react';

import {
  GET_ALL_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  UPDATE_GENDER,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER,
  GET_PRODUCTS_BY_GENDER,
} from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';
// import { designers } from '../productsData';

const initialState = {
  all_products: getLocalStorage('allProducts'),
  gender: getLocalStorage('gender'),
  products_by_gender: getLocalStorage('productsByGender'),
  popular_products: [],
  single_product: getLocalStorage('singleProduct'),
  designer_data: getLocalStorage('designerData'),
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const { men } = useFirebaseData('men');
  const { women } = useFirebaseData('women');

  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: { men, women },
    });
  }, [men, women]);

  const updateGender = e => {
    const { gender } = e.target.dataset;

    dispatch({ type: UPDATE_GENDER, payload: gender });

    dispatch({ type: GET_PRODUCTS_BY_GENDER });
  };

  const getPopularProducts = () => {
    dispatch({
      type: GET_POPULAR_PRODUCTS,
    });
  };

  const getSingleProduct = id => {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: id,
    });
  };

  const getDesigner = designer => {
    dispatch({
      type: GET_DESIGNER,
      payload: designer,
    });
  };

  useEffect(() => {
    getPopularProducts();

    setLocalStorage('allProducts', state.all_products);
    setLocalStorage('gender', state.gender);
    setLocalStorage('productsByGender', state.products_by_gender);
    setLocalStorage('singleProduct', state.single_product);
    setLocalStorage('designerData', state.designer_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.all_products,
    state.gender,
    state.products_by_gender,
    state.single_product,
    state.designer_data,
  ]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        updateGender,
        getSingleProduct,
        getDesigner,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
