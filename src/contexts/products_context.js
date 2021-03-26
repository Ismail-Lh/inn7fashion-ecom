import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { GET_ALL_PRODUCTS, UPDATE_GENDER, GET_DESIGNER } from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';

const initialState = {
  all_products: getLocalStorage('allProducts'),
  gender: getLocalStorage('gender'),
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
  };

  const getDesigner = designer => {
    dispatch({
      type: GET_DESIGNER,
      payload: designer,
    });
  };

  useEffect(() => {
    setLocalStorage('allProducts', state.all_products);
    setLocalStorage('gender', state.gender);
    setLocalStorage('singleProduct', state.single_product);
    setLocalStorage('designerData', state.designer_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.all_products,
    state.gender,
    state.single_product,
    state.designer_data,
  ]);

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
