/* 
Group Challenge #3 - Implement a function, getProductMetaData, that takes in an array of product objects and returns a new array of new ojects with the product title and product id as properties. 

For example, the new objects should look somehting like {productName: product.name, productId: product.id}
*/
const getProductMetaData = productsArray => {
  // Your code goes here!
  return productsArray.map(product => ({
    productName: product.name,
    productId: product.id
  }));
};

export { getProductMetaData };
