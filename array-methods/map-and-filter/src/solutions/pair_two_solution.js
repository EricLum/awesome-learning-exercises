// Pair Challenge #2 - Implement a function, getOutOfStockProducts, that takes in a product array. This function should filter products with an outOfStock value of true, and return an array of objects of product id, and instock date. For Example { productId: 9203, inStockDate: '1/1/2021' }
const getOutOfStockProducts = productsArray => {
  return productsArray
    .filter(product => product.outOfStock)
    .map(product => ({
      productId: product.id,
      inStockDate: product.inStockDate
    }));
};

export { getOutOfStockProducts };
