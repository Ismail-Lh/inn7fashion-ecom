export const formatPrice = price => {
  const newPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);

  return newPrice;
};

export const getLocalStorage = key => {
  let storage = localStorage.getItem(key);

  if (key === 'singleProduct') {
    return storage ? JSON.parse(localStorage.getItem(key)) : {};
  } else if (key === 'categories') {
    return storage ? JSON.parse(localStorage.getItem(key)) : 'men';
  } else if (key === 'designerProducts') {
    return storage ? JSON.parse(localStorage.getItem(key)) : [];
  } else if (key === 'designerData') {
    return storage ? JSON.parse(localStorage.getItem(key)) : {};
  } else if (key === 'cart') {
    return storage ? JSON.parse(localStorage.getItem(key)) : [];
  }
};

export const finalItemPrice = (price, discountPer) => {
  let finalPrice;

  if (!discountPer) finalPrice = price;

  finalPrice = (price * discountPer) / 100;

  // if (!discountPer) {
  //   finalPrice = (price * discountPer) / 100;
  // } else {
  //   finalPrice = price;
  // }

  return finalPrice;
};
