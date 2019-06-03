/* Pair Challenge #2
We need to know what our most popular saved items are. 
Implement a function called savedItemsIntersection that takes in an array of customers and
returns an array of only the product ids that are found in each of the customers savedItems arrays.
For example, if some of the customers have id 1235 but not all cusatomers do, do not return that.
If all customers have 1902, return 1902. 

HINTS:
Using both reduce and one of our earlier array methods can make this exercise much simpler...
*/
const savedItemsIntersection = customers => {
  return customers
    .reduce((acc, curr) => {
      return [...acc, curr.savedItems];
    }, [])
    .reduce((accumulator, currentArray) => {
      // build an array using the matching values from arrays[n] and arrays[n+1] and do the same for all arrays.
      return accumulator.filter(value => currentArray.includes(value));
    });
};

export { savedItemsIntersection };