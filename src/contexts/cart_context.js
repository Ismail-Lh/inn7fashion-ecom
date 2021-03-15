import { createContext, useContext, useReducer, useEffect } from 'react';
import CartReducer from '../reducers/cart_reducer';

import { getLocalStorage } from '../utils/helpers';
import {
  ADD_PRODUCT_TO_CART,
  SELECT_SIZE,
  SHOW_CART_MODEL,
  HIDE_CART_MODEL,
  REMOVE_PRODUCT_FROM_CART,
} from '../actions';

const initialState = {
  cart: getLocalStorage('cart'),
  size: '',
  show_cart: false,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = product => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product });
  };

  const selectSize = size => {
    dispatch({ type: SELECT_SIZE, payload: size });
  };

  const showCart = () => {
    dispatch({ type: SHOW_CART_MODEL });
  };

  const hideCart = () => {
    dispatch({ type: HIDE_CART_MODEL });
  };

  const removeItem = id => {
    console.log(id);
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: id });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        selectSize,
        showCart,
        hideCart,
        removeItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
