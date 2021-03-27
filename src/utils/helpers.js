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

  if (key === 'productsByGender') {
    return storage ? JSON.parse(storage) : [];
  }

  if (key === 'products') {
    return storage ? JSON.parse(storage) : [];
  }

  if (key === 'singleProduct') {
    return storage ? JSON.parse(storage) : {};
  }

  if (key === 'productsCategory') {
    return storage ? JSON.parse(storage) : 'clothing';
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
  if (!discountPer) return price;

  return price - (price * discountPer) / 100;
};
