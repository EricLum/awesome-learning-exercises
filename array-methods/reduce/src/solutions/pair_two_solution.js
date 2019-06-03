/* 
Pair exercise #2 - We want to know what the most popular saved items are. 

Write a function, getSavedItemFrequency that takes in an array of customers 
and returns an object where the keys are savedItemIds and the values are how many times they occurred across all customers. 

For example, if two customers had savedItemIds of [134, 234, 131] and [134, 111],
getSavedItemFrequency should output {134: 2, 234: 1, 131: 1, 111: 1}
*/
const getSavedItemFrequency = customers => {
  return customers
    .reduce((acc, curr) => {
      return [...acc, ...curr.savedItemIds];
    }, [])
    .reduce((accumulator, itemId) => {
      return {
        ...accumulator,
        [itemId]: accumulator[itemId] ? accumulator[itemId] + 1 : 1
      };
    }, {});
};

export { getSavedItemFrequency };

// - What does this highlight about reduce?
//     * You can handle complex logic/undefined keys etc.,
//     * You may create dynamic keys
// - What is this missing?
// .   * See above
// .   * It's okay in a reduce to mutate accumulator, but why?
// .      > Self contained inside the reduce function
// - Q&A
//     * Computed properties
// .   * What is a computed properties
// .   * Remember to return the accumulator
//     * You don't _have to_ spread
