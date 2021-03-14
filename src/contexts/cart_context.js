import { createContext, useContext, useReducer, useEffect } from 'react';
import CartReducer from '../reducers/cart_reducer';

import { getLocalStorage } from '../utils/helpers';
import { ADD_PRODUCT_TO_CART, SELECT_SIZE } from '../actions';

const initialState = { cart: getLocalStorage('cart'), size: '' };

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = product => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product });
  };

  const selectSize = size => {
    dispatch({ type: SELECT_SIZE, payload: size });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, selectSize }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
