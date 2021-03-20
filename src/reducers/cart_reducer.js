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

import { finalItemPrice, formatPrice } from '../utils/helpers';

const CartReducer = (state, action) => {
  if (action.type === SELECT_SIZE) {
    return { ...state, size: action.payload };
  }

  if (action.type === ADD_PRODUCT_TO_CART) {
    const { product, amount, id, size } = action.payload;

    const tempItem = state.cart.find(item => item.id === id + size);

    if (tempItem) {
      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === id + size) {
          let newAmount = cartItem.amount + amount;

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + size,
        name: product.name,
        designer: product.designer,
        sku: product.sku,
        color: product.color,
        price: product.price,
        discountPer: product.discountPer,
        image: product.images[0],
        size,
        amount,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
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

  if (action.type === COUNT_CART_TOTALS) {
    const prices = state.cart.map(({ price, discountPer, amount }) => {
      if (!discountPer) return price * amount;

      return finalItemPrice(price, discountPer) * amount;
    });
    const subTotal = prices.reduce((acc, curr) => acc + curr, 0);

    return { ...state, subtotal: formatPrice(subTotal) };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map(item => {
      if (item.id === id) {
        let newAmount;
        if (value === 'inc') {
          newAmount = item.amount + 1;

          if (newAmount > item.max) {
            newAmount = item.max;
          }

          return { ...item, amount: newAmount };
        } else if (value === 'dec') {
          newAmount = item.amount - 1;

          if (newAmount < 1) {
            newAmount = 1;
          }

          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
