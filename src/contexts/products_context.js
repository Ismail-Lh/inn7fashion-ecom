import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { GET_ALL_PRODUCTS, UPDATE_GENDER, GET_DESIGNER } from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';

const initialState = {
  all_products: getLocalStorage('allProducts'),
  loading: false,
  gender: getLocalStorage('gender'),
  designer_data: getLocalStorage('designerData'),
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // Get products from firebase hooks
  const { men, loading } = useFirebaseData('men');
  const { women } = useFirebaseData('women');

  // Get allProducts function
  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: { men, women, loading },
    });
  }, [men, women]);

  // Update gender function
  const updateGender = e => {
    const { gender } = e.target.dataset;
    dispatch({ type: UPDATE_GENDER, payload: gender });
  };

  // Get designer function
  const getDesigner = designer => {
    dispatch({
      type: GET_DESIGNER,
      payload: designer,
    });
  };

  // Set allProducts, gender & designerData to localStorage
  useEffect(() => {
    setLocalStorage('allProducts', state.all_products);
    setLocalStorage('gender', state.gender);
    setLocalStorage('designerData', state.designer_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.all_products, state.gender, state.designer_data]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        updateGender,
        getDesigner,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
