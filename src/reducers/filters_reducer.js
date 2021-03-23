import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

import { finalItemPrice } from '../utils/helpers';

const FiltersReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const products = action.payload;

    const prices = products.map(({ price, discountPer }) => {
      let finalPrice;
      if (!discountPer) return price;

      finalPrice = finalItemPrice(price, discountPer);

      return finalPrice;
    });

    const percentages = products.map(({ discountPer }) => discountPer);

    let maxPrice = Math.max(...prices);
    let minPrice = Math.min(...prices);

    let maxPercentage = Math.max(...percentages);
    let minPercentage = Math.min(...percentages);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        min_price: minPrice,
        price: maxPrice,
        max_percentage: maxPercentage,
        min_percentage: minPercentage,
        percentage: maxPercentage,
      },
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
