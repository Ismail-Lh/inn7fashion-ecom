import React, { createContext, useContext, useEffect, useReducer } from 'react';

import {
  GET_ALL_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  UPDATE_GENDER,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER_PRODUCTS,
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
  designer_products: getLocalStorage('designerProducts'),
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

    console.log(gender);

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

  const getDesignerProducts = designer => {
    dispatch({
      type: GET_DESIGNER,
      payload: designer,
    });

    dispatch({
      type: GET_DESIGNER_PRODUCTS,
      payload: {
        designer: designer.desig,
      },
    });
  };

  useEffect(() => {
    getPopularProducts();

    setLocalStorage('allProducts', state.all_products);
    setLocalStorage('gender', state.gender);
    setLocalStorage('productsByGender', state.products_by_gender);
    setLocalStorage('singleProduct', state.single_product);
    setLocalStorage('designerProducts', state.designer_products);
    setLocalStorage('designerData', state.designer_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.all_products,
    state.gender,
    state.products_by_gender,
    state.designer_products,
    state.single_product,
    state.designer_data,
  ]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        updateGender,
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
