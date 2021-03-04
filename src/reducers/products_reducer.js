import {
  GET_POPULAR_PRODUCTS,
  UPDATE_CATEGORIES,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER_PRODUCTS,
} from '../actions';

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

  if (action.type === GET_SINGLE_PRODUCT) {
    const { allProducts, categories, id } = action.payload;
    const products = allProducts[0][categories].map(products => products);

    const singleProduct = products.filter(p => p.id === id);

    return { ...state, single_product: singleProduct[0] };
  }

  // if (action.type === GET_DESIGNER_PRODUCTS) {
  //   const { allProducts, categories, designer } = action.payload;
  //   const products = allProducts[0][categories].map(products => products);

  //   const designerProducts = products.filter(
  //     products => products.designer === designer
  //   );

  //   console.log(designerProducts);

  //   return { ...state };
  // }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
