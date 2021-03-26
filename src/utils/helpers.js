export const formatPrice = price => {
  const newPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);

  return newPrice;
};

export const getLocalStorage = key => {
  let storage = localStorage.getItem(key);

  if (key === 'allProducts') {
    return storage ? JSON.parse(storage) : {};
  }

  if (key === 'gender') {
    return storage ? JSON.parse(storage) : 'men';
  }

  if (key === 'filteredProducts') {
    return storage ? JSON.parse(storage) : [];
  }

  if (key === 'singleProduct') {
    return storage ? JSON.parse(storage) : {};
  }

  if (key === 'designerProducts') {
    return storage ? JSON.parse(storage) : [];
  }

  if (key === 'designerData') {
    return storage ? JSON.parse(storage) : {};
  }

  if (key === 'cart') {
    return storage ? JSON.parse(storage) : [];
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const finalItemPrice = (price, discountPer) => {
  let finalPrice;

  if (!discountPer) finalPrice = price;

  finalPrice = price - (price * discountPer) / 100;

  return finalPrice;
};
