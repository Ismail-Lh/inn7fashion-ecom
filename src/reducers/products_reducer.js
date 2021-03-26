import { GET_ALL_PRODUCTS, UPDATE_GENDER, GET_DESIGNER } from '../actions';

const ProductsReducer = (state, action) => {
  if (action.type === GET_ALL_PRODUCTS) {
    const { men, women } = action.payload;

    return {
      ...state,
      all_products: { men: [...men], women: [...women] },
    };
  }

  if (action.type === UPDATE_GENDER) {
    return { ...state, gender: action.payload };
  }

  if (action.type === GET_DESIGNER) {
    const designer = action.payload;

    return { ...state, designer_data: designer };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
