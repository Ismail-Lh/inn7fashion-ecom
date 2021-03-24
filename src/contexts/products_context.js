import React, { createContext, useContext, useEffect, useReducer } from 'react';

import {
  GET_ALL_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  UPDATE_CATEGORIES,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER_PRODUCTS,
  GET_DESIGNER,
  GET_PRODUCTS_BY_CATEGORY,
} from '../actions';

import { getLocalStorage, setLocalStorage } from '../utils/helpers';

import useFirebaseData from '../hooks/useFirebaseData';

import ProductsReducer from '../reducers/products_reducer';
// import { designers } from '../productsData';

const initialState = {
  all_products: getLocalStorage('allProducts'),
  popular_products: [],
  categories: getLocalStorage('categories'),
  single_product: getLocalStorage('singleProduct'),
  designer_products: getLocalStorage('designerProducts'),
  designer_data: getLocalStorage('designerData'),
  products_category: getLocalStorage('productsCategory'),
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

  const updateCategories = e => {
    const value = e.target.dataset.categories;

    dispatch({ type: UPDATE_CATEGORIES, payload: value });
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

  const getProductsByCategory = category => {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: {
        category,
        allProducts: state.all_products,
        categories: state.categories,
      },
    });
  };

  useEffect(() => {
    getPopularProducts();

    setLocalStorage('allProducts', state.all_products);
    setLocalStorage('categories', state.categories);
    setLocalStorage('singleProduct', state.single_product);
    setLocalStorage('designerProducts', state.designer_products);
    setLocalStorage('designerData', state.designer_data);
    setLocalStorage('productsCategory', state.products_category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.all_products,
    state.categories,
    state.designer_products,
    state.single_product,
    state.designer_data,
    state.products_category,
  ]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        updateCategories,
        getSingleProduct,
        getDesignerProducts,
        getProductsByCategory,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
