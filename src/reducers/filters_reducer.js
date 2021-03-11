import { LOAD_PRODUCTS, UPDATE_SORT, SORT_PRODUCTS } from '../actions';

const FiltersReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map(({ price }) => price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  // if (action.type === SORT_PRODUCTS) {
  //   const { sort, filtered_products } = state;
  //   let tempProducts = [...filtered_products];

  //   // if (state.sort === 'prise-lowest') {
  //   //   // tempProducts = tempProducts.sort((curr, next) => curr.price - next.price);
  //   //   console.log('price-lowest');
  //   // } else if (sort === 'price-highest') {
  //   //   // tempProducts = tempProducts.sort((curr, next) => next.price - curr.price);
  //   //   console.log('price-highest');
  //   // } else if (sort === 'name-a') {
  //   //   // tempProducts = tempProducts.sort((curr, next) =>
  //   //   //   curr.name.localeCompare(next.name)
  //   //   // );
  //   //   console.log('name-a');
  //   // } else if (sort === 'name-z') {
  //   //   // tempProducts = tempProducts.sort((curr, next) =>
  //   //   //   next.name.localeCompare(curr.name)
  //   //   // );
  //   //   console.log('name-z');
  //   // }

  //   return { ...state, filtered_products: tempProducts };
  // }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default FiltersReducer;
