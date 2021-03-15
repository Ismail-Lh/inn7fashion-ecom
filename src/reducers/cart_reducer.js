import {
  ADD_PRODUCT_TO_CART,
  SELECT_SIZE,
  SHOW_CART_MODEL,
  HIDE_CART_MODEL,
  REMOVE_PRODUCT_FROM_CART,
  GET_CART_SUBTOTAL,
} from '../actions';

import { finalItemPrice, formatPrice } from '../utils/helpers';

const CartReducer = (state, action) => {
  if (action.type === SELECT_SIZE) {
    return { ...state, size: action.payload };
  }

  if (action.type === ADD_PRODUCT_TO_CART) {
    const product = action.payload;

    const newItem = {
      id: product.id,
      name: product.name,
      designer: product.designer,
      color: product.color,
      price: product.price,
      discountPer: product.discountPer,
      image: product.images[0],
      size: state.size,
    };

    return { ...state, cart: [...state.cart, newItem] };
  }

  if (action.type === SHOW_CART_MODEL) {
    return { ...state, show_cart: true };
  }

  if (action.type === HIDE_CART_MODEL) {
    return { ...state, show_cart: false };
  }

  if (action.type === REMOVE_PRODUCT_FROM_CART) {
    const id = action.payload;
    const tempCart = state.cart.filter(product => product.id !== id);

    return { ...state, cart: tempCart };
  }

  if (action.type === GET_CART_SUBTOTAL) {
    const prices = state.cart.map(({ price, discountPer }) =>
      finalItemPrice(price, discountPer)
    );
    const subTotal = prices.reduce((acc, curr) => acc + curr, 0);

    return { ...state, subtotal: formatPrice(subTotal) };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
