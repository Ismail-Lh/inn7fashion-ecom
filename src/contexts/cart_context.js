import { createContext, useContext, useReducer, useEffect } from 'react';
import CartReducer from '../reducers/cart_reducer';

import { getLocalStorage } from '../utils/helpers';
import {
  ADD_PRODUCT_TO_CART,
  SELECT_SIZE,
  SHOW_CART_MODEL,
  HIDE_CART_MODEL,
  REMOVE_PRODUCT_FROM_CART,
  COUNT_CART_TOTALS,
  CLEAR_CART,
  TOGGLE_CART_AMOUNT,
} from '../actions';

const initialState = {
  cart: getLocalStorage('cart'),
  size: '',
  show_cart: false,
  subtotal: 0,
  total_items: 0,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product, amount) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: { amount, product } });
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
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const toggleCartAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_AMOUNT, payload: { id, value } });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
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
        clearCart,
        toggleCartAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
