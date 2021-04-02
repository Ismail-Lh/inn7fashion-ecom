import {
  GET_ALL_PRODUCTS,
  UPDATE_GENDER,
  GET_DESIGNER,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from '../actions';

const ProductsReducer = (state, action) => {
  // Get allProducts action
  if (action.type === GET_ALL_PRODUCTS) {
    const { men, women, loading } = action.payload;

    return {
      ...state,
      all_products: { men: [...men], women: [...women] },
      loading,
    };
  }

  // Update gender action
  if (action.type === UPDATE_GENDER) {
    return { ...state, gender: action.payload };
  }

  // Get designer action
  if (action.type === GET_DESIGNER) {
    const designer = action.payload;

    return { ...state, designer_data: designer };
  }

  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSideBarOpen: true };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSideBarOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
