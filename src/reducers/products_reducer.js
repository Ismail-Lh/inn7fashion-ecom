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

    return {
      ...state,
      all_products: { men: [...men], women: [...women] },
    };
  }

  if (action.type === UPDATE_CATEGORIES) {
    return { ...state, categories: action.payload };
  }

  if (action.type === GET_POPULAR_PRODUCTS) {
    const { categories, all_products } = state;

    const popularProducts = all_products[categories]
      .map(products => products)
      .filter(product => product.popularity === true);

    return { ...state, popular_products: popularProducts };
  }

  if (action.type === GET_SINGLE_PRODUCT) {
    const { categories, all_products } = state;
    const id = action.payload;

    const singleProduct = all_products[categories]
      .map(products => products)
      .filter(product => product.id === id);

    return { ...state, single_product: singleProduct };
  }

  if (action.type === GET_DESIGNER) {
    const designer = action.payload;

    return { ...state, designer_data: designer };
  }

  if (action.type === GET_DESIGNER_PRODUCTS) {
    const { all_products, categories } = state;
    const { designer } = action.payload;

    const designerProducts = all_products[categories]
      .map(products => products)
      .filter(
        product => product?.designer?.toLowerCase() === designer.toLowerCase()
      );

    return { ...state, designer_products: designerProducts };
  }

  if (action.type === GET_PRODUCTS_BY_CATEGORY) {
    const { category, allProducts, categories } = action.payload;

    const products = allProducts[categories].map(products => products);

    const productsCategory = products.filter(
      product => product?.category?.toLowerCase() === category.toLowerCase()
    );

    return { ...state, products_category: productsCategory };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
