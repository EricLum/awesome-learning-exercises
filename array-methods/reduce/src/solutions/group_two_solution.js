/* 
Group exercise #2 - we need to to know how many saved items all of our customers have. 

Implement a function called totalSavedItems that takes an array of customers and returns the total number of saved item ids across all customers. 
*/
const totalSavedItems = customers => {
  return customers.reduce((total, currentCustomer) => {
    return total + currentCustomer.savedItemIds.length;
  }, 0);
};

export { totalSavedItems };
