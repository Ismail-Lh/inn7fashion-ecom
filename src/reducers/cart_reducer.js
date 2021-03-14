import { ADD_PRODUCT_TO_CART, SELECT_SIZE } from '../actions';

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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
