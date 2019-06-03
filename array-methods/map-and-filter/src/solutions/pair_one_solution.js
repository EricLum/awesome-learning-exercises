// Pair Challenge #1 - Lets chain! Implement a function, getPopularProducts, that takes in array of products and returns the product ids of every item with a rating over 4.
const getPopularProducts = productsArray => {
  return productsArray
    .filter(product => product.rating > 4)
    .map(product => product.id);
};

export { getPopularProducts };
