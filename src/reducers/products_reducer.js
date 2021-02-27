import { GET_POPULAR_PRODUCTS, UPDATE_CATEGORIES } from '../actions';

const ProductsReducer = (state, action) => {
  if (action.type === GET_POPULAR_PRODUCTS) {
    const { allProducts, categories } = action.payload;

    const popularProducts = allProducts.map(products =>
      products[categories].filter(product => product.popularity === true)
    );

    return { ...state, popular_products: [...popularProducts] };
  }

  if (action.type === UPDATE_CATEGORIES) {
    return { ...state, categories: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
