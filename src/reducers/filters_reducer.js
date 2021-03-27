import {
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

const FiltersReducer = (state, action) => {
  // Get products bu gender action
  if (action.type === GET_PRODUCTS_BY_GENDER) {
    const { gender, products: allProducts } = action.payload;

    const productsByGender = allProducts[gender]?.map(products => products);

    return {
      ...state,
      products_by_gender: productsByGender,
    };
  }

  // Get popularProducts action
  if (action.type === GET_POPULAR_PRODUCTS) {
    const { products_by_gender: products } = state;

    const popularProducts = products
      ?.map(products => products)
      ?.filter(product => product.popularity === true);

    return { ...state, popular_products: popularProducts };
  }

  // Get single products data action
  if (action.type === GET_SINGLE_PRODUCT) {
    const { products_by_gender: products } = state;
    const id = action.payload;

    const singleProduct = products
      ?.map(products => products)
      ?.filter(product => product.id === id);

    return { ...state, single_product: singleProduct };
  }

  // Get designer products action
  if (action.type === GET_DESIGNER_PRODUCTS) {
    const { products_by_gender: products } = state;
    const designer = action.payload;

    const designerProducts = products?.filter(
      product => product?.designer?.toLowerCase() === designer.toLowerCase()
    );

    return {
      ...state,
      products: designerProducts,
      // filtered_products: designerProducts,
    };
  }

  // Update products category action
  if (action.type === UPDATE_CATEGORY) {
    return { ...state, products_category: action.payload };
  }

  // Get products by their category action
  if (action.type === GET_PRODUCTS_BY_CATEGORY) {
    const { products_category: category, products_by_gender: products } = state;

    const productsByCategory = products?.filter(
      product => product.category?.toLowerCase() === category.toLowerCase()
    );

    return {
      ...state,
      products: productsByCategory,
      // filtered_products: productsByCategory,
    };
  }

  // Get filters value action
  if (action.type === GET_FILTERS_VALUE) {
    const { products } = state;

    const prices = products?.map(({ price, discountPer }) => {
      let finalPrice;
      if (!discountPer) return price;

      finalPrice = finalItemPrice(price, discountPer);

      return finalPrice;
    });

    const percentages = products?.map(({ discountPer }) => {
      if (discountPer === undefined) discountPer = 100;

      return discountPer;
    });

    let maxPrice = Math.max(...prices);
    let minPrice = Math.min(...prices);

    let maxPercentage = Math.max(...percentages);
    let minPercentage = Math.min(...percentages);

    return {
      ...state,
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

  // Update filters value action
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }

  // Filter products action
  if (action.type === FILTER_PRODUCTS) {
    const { products } = state;
    const { price } = state.filters;

    let tempProducts = [...products];

    if (price) {
      tempProducts = tempProducts
        ?.map(product => product)
        ?.filter(
          product => finalItemPrice(product.price, product.discountPer) <= price
        );
    }

    // if (percentage) {
    //   tempProducts = products
    //     ?.map(product => product)
    //     ?.filter(product => product.discountPer <= +percentage);
    // }

    return { ...state, filtered_products: tempProducts };
  }

  // Clear filters action
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

  // Update sort value action
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  // Sort products action
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          finalItemPrice(curr.price, curr.discountPer) -
          finalItemPrice(next.price, next.discountPer)
      );
    } else if (sort === 'price-highest') {
      tempProducts = tempProducts.sort(
        (curr, next) =>
          finalItemPrice(next.price, next.discountPer) -
          finalItemPrice(curr.price, curr.discountPer)
      );
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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default FiltersReducer;
