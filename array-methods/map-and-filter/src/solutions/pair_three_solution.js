/* 
Pair Challenge #3 - Use all of the knowledge! Implement a function called alertOutOfStock that takes in an array of customers, an array of products, and a callback. This function will check for all product ids contained with each customer's savedItems array and reference those product ids to see if they are in stock or not. If any products within the savedItems array are out of stock, call the callback function with the customer email and the product id. If there is more than one product out of stock, call the callback for each product that is out of stock. 
Notes: 
Not all customers will have saved items.
*/
const alertOutOfStock = (customersArray, productsArray, callback) => {
  // your code here
  const outOfStockItemIds = productsArray
    .filter(product => product.outOfStock)
    .map(item => item.id);

  customersArray.map(customer => {
    if (!customer.savedItems) {
      return;
    }
    customer.savedItems.filter(id => {
      if (outOfStockItemIds.includes(id)) {
        callback(customer.email, id);
      }
    });
  });
};

export { alertOutOfStock };
