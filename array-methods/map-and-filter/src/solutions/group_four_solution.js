// Group Challenge #4  implement a function, filterByTotalOver150, that takes in an array of customers and returns customers whose total (cart * quantity) exceeded $150
const filterByTotalOver150 = customersArray => {
  // Trainer Note: The popular name for the callback argument is a "predicate"
  return customersArray.filter(customer => {
    const total = customer.cart * customer.quantity;
    return total > 150;
  });
};

export { filterByTotalOver150 };
