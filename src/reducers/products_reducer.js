import { GET_POPULAR_PRODUCTS } from '../actions';

const ProductsReducer = (state, action) => {
  if (action.type === GET_POPULAR_PRODUCTS) {
    const { allProducts } = action.payload;

    const popularProducts = allProducts.map(({ men }) =>
      men.filter(product => product.popularity === true)
    );

    return { ...state, popular_products: [...popularProducts] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
