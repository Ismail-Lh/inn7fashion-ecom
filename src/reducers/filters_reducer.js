import {
  LOAD_PRODUCTS,
  GET_FILTERS_VALUE,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  GET_DESIGNER_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_GENDER,
  GET_POPULAR_PRODUCTS,
  GET_SINGLE_PRODUCT,
  UPDATE_CATEGORY,
} from '../actions';

import { finalItemPrice } from '../utils/helpers';

// const getFiltersValue = products => {
//   const prices = products?.map(({ price, discountPer }) => {
//     let finalPrice;
//     if (!discountPer) return price;

//     finalPrice = finalItemPrice(price, discountPer);

//     return finalPrice;
//   });

//   const percentages = products?.map(({ discountPer }) => discountPer);

//   let maxPrice = Math.max(...prices);
//   let minPrice = Math.min(...prices);

//   let maxPercentage = Math.max(...percentages);
//   let minPercentage = Math.min(...percentages);

//   console.log(products);
//   console.log(maxPrice, minPrice, maxPercentage, minPercentage);

//   return { maxPrice, minPrice, maxPercentage, minPercentage };
// };

const FiltersReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BY_GENDER) {
    const { gender, products: allProducts } = action.payload;

    const productsByGender = allProducts[gender]?.map(products => products);

    return { ...state, products_by_gender: productsByGender };
  }

  if (action.type === GET_POPULAR_PRODUCTS) {
    const { products_by_gender: products } = state;

    const popularProducts = products
      ?.map(products => products)
      ?.filter(product => product.popularity === true);

    return { ...state, popular_products: popularProducts };
  }

  if (action.type === GET_SINGLE_PRODUCT) {
    const { products_by_gender: products } = state;
    const id = action.payload;

    const singleProduct = products
      ?.map(products => products)
      ?.filter(product => product.id === id);

    return { ...state, single_product: singleProduct };
  }

  if (action.type === GET_DESIGNER_PRODUCTS) {
    const { products_by_gender: products } = state;
    const designer = action.payload;

    const designerProducts = products?.filter(
      product => product?.designer?.toLowerCase() === designer.toLowerCase()
    );

    return {
      ...state,
      designer_products: designerProducts,
    };
  }

  if (action.type === UPDATE_CATEGORY) {
    return { ...state, products_category: action.payload };
  }

  if (action.type === GET_PRODUCTS_BY_CATEGORY) {
    const { products_category: category, products_by_gender: products } = state;

    const productsByCategory = products?.filter(
      product => product.category?.toLowerCase() === category.toLowerCase()
    );

    console.log(productsByCategory);

    return {
      ...state,
      products_by_category: productsByCategory,
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    // const { sort, filtered_products } = state;
    // let tempProducts = [...filtered_products];

    // if (sort === 'price-lowest') {
    //   tempProducts = tempProducts.sort((curr, next) => curr.price - next.price);
    // } else if (sort === 'price-highest') {
    //   tempProducts = tempProducts.sort((curr, next) => next.price - curr.price);
    // } else if (sort === 'name-a') {
    //   tempProducts = tempProducts.sort((curr, next) =>
    //     curr.name.localeCompare(next.name)
    //   );
    // } else if (sort === 'name-z') {
    //   tempProducts = tempProducts.sort((curr, next) =>
    //     next.name.localeCompare(curr.name)
    //   );
    // }

    // return { ...state, filtered_products: tempProducts };

    return { ...state };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    // const { all_products } = state;
    // const { price, percentage } = state.filters;

    // let tempProducts = [...all_products];

    // if (price) {
    //   tempProducts = tempProducts.filter(product => product.price <= price);
    // }

    // if (percentage) {
    //   tempProducts = tempProducts.filter(
    //     product => product.discountPer <= +percentage
    //   );
    // }

    // return { ...state, filtered_products: tempProducts };

    return { ...state };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        price: state.filters.max_price,
        percentage: state.filters.max_percentage,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default FiltersReducer;
