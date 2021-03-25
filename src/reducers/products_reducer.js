import {
  GET_ALL_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  UPDATE_GENDER,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER,
  GET_PRODUCTS_BY_GENDER,
} from '../actions';

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

  if (action.type === GET_PRODUCTS_BY_GENDER) {
    const { all_products, gender } = state;

    const products = all_products[gender].map(products => products);

    return { ...state, products_by_gender: products };
  }

  if (action.type === GET_POPULAR_PRODUCTS) {
    const { products_by_gender } = state;

    const popularProducts = products_by_gender
      .map(products => products)
      .filter(product => product.popularity === true);

    return { ...state, popular_products: popularProducts };
  }

  if (action.type === GET_SINGLE_PRODUCT) {
    const { products_by_gender } = state;
    const id = action.payload;

    const singleProduct = products_by_gender
      .map(products => products)
      .filter(product => product.id === id);

    return { ...state, single_product: singleProduct };
  }

  if (action.type === GET_DESIGNER) {
    const designer = action.payload;

    return { ...state, designer_data: designer };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
