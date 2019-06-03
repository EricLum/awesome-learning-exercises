/* 
Pair exercise #1 - we need an array of all saved items from our current customers. 

Implement a function called getSavedItems that takes an array of customers and returns an array of all unique savedItemIds across all customers. 
No duplicates allowed!

HINTS:
There are a number of ways you can ensure no duplicate values. 
You could sort and use filter to remove similar values, 
you could check if the value already exists int the accumulator and only add new values, 
or you could use a new data structure in ES6 called a Set. It's up to you!
*/
const getSavedItems = customers => {
  // Your solution here
};

export { getSavedItems };

// - What does this highlight about reduce?
// .   * Transforming a complex collection into a specific subset of data you care about
// .   * Accumulator and value arguments
// - What is missing?
// .   * Edge cases, data being misaligned
// .   * No initializer, first two elements become the first two arguments?
// - Why can't we do this with a map?
// .   * Maybe propose that this might be possible with a map (spoiler you can't),
// .   * .map returns an array also but we need to combine different hobbies together
// .   * we would need to perform an additonal operation like .concat or something
// - Follow up why is reduce better?
//     * Single iteration
// - Things to keep in mind
// .   * Reduce not only for a scalar/single value could return arrays
// Q&A
// . - Would you use reduce for large data sets?
//     * We don't know until you measure it. This question is specific to the data. No way to know before hand.
// .   * Generally we want to write readable code first, optimize second.
