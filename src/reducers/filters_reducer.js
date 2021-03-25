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
  if (action.type === LOAD_PRODUCTS) {
    const products = action.payload;

    return {
      ...state,
      all_products: [...products],
      filtered_products: [...products],
    };
  }

  if (action.type === GET_DESIGNER_PRODUCTS) {
    const { designer, products } = action.payload;

    const designerProducts = products?.filter(
      product => product?.designer?.toLowerCase() === designer.toLowerCase()
    );

    // const {
    //   maxPrice,
    //   minPrice,
    //   maxPercentage,
    //   minPercentage,
    // } = getFiltersValue(designerProducts);

    return {
      ...state,
      filtered_products: designerProducts,
    };
  }

  if (action.type === GET_PRODUCTS_BY_CATEGORY) {
    const { category, products } = action.payload;

    const productsByCategory = products?.filter(
      product => product.category?.toLowerCase() === category.toLowerCase()
    );

    return {
      ...state,
      filtered_products: productsByCategory,
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((curr, next) => curr.price - next.price);
    } else if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((curr, next) => next.price - curr.price);
    } else if (sort === 'name-a') {
      tempProducts = tempProducts.sort((curr, next) =>
        curr.name.localeCompare(next.name)
      );
    } else if (sort === 'name-z') {
      tempProducts = tempProducts.sort((curr, next) =>
        next.name.localeCompare(curr.name)
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { price, percentage } = state.filters;

    let tempProducts = [...all_products];

    if (price) {
      tempProducts = tempProducts.filter(product => product.price <= price);
    }

    if (percentage) {
      tempProducts = tempProducts.filter(
        product => product.discountPer <= +percentage
      );
    }

    return { ...state, filtered_products: tempProducts };
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
