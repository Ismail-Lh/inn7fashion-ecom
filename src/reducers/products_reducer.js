import {
  GET_ALL_PRODUCTS,
  GET_POPULAR_PRODUCTS,
  UPDATE_CATEGORIES,
  GET_SINGLE_PRODUCT,
  GET_DESIGNER_PRODUCTS,
  GET_DESIGNER,
  GET_PRODUCTS_BY_CATEGORY,
} from '../actions';

const ProductsReducer = (state, action) => {
  if (action.type === GET_ALL_PRODUCTS) {
    const { men, women } = action.payload;

    return { ...state, all_products: { men: [...men], women: [...women] } };
  }

  if (action.type === UPDATE_CATEGORIES) {
    return { ...state, categories: action.payload };
  }

  if (action.type === GET_POPULAR_PRODUCTS) {
    const { categories, allProducts } = action.payload;

    const popularProducts = allProducts[categories]
      .map(products => products)
      .filter(product => product.popularity === true);

    return { ...state, popular_products: popularProducts };
  }

  // if (action.type === GET_SINGLE_PRODUCT) {
  //   const { allProducts, categories, id } = action.payload;
  //   const products = allProducts[0][categories].map(products => products);

  //   const singleProduct = products.filter(p => p.id === id);

  //   return { ...state, single_product: singleProduct[0] };
  // }

  // if (action.type === GET_DESIGNER_PRODUCTS) {
  //   const { allProducts, categories, designer } = action.payload;
  //   const products = allProducts[0][categories].map(products => products);

  //   const designerProducts = products.filter(
  //     product => product.designer.toLowerCase() === designer.toLowerCase()
  //   );

  //   return { ...state, designer_products: designerProducts };
  // }

  // if (action.type === GET_DESIGNER) {
  //   const { designer } = action.payload;

  //   return { ...state, designer_data: designer };
  // }
  // if (action.type === GET_PRODUCTS_BY_CATEGORY) {
  //   const { category, allProducts, categories } = action.payload;

  //   const products = allProducts[0][categories].map(products => products);

  //   const productsCategory = products.filter(
  //     product =>
  //       category && product.category.toLowerCase() === category.toLowerCase()
  //   );

  //   return { ...state, products_category: productsCategory };
  // }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
