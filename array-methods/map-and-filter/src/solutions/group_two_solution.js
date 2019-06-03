// Group Exercise #2 - Write a vanilla JS implementation of filter
/* 
In order to better understand filter, we want you to write a bare bones vanilla JS version of it. This will by no means be an exhaustive version of filter, it's meant as a instructional tool to understand how the real prototype method works. 

Remember the following on filter:
filter calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. 

Create a function called vanillaFilter that takes two inputs:
1. an array of numbers (a list of numbers)
2. a 'callback' function - a function that is applied to each element of the array (inside of the function 'vanillaFilter')
Have vanillaFilter return a new array filled with numbers that, when called with the callback function, return a value that coerces to true.
*/
const vanillaFilter = (numArray, callBack) => {
  // Your code goes here!
  let results = [];
  numArray.forEach(itemInArray => {
    if (callBack(itemInArray)) {
      results.push(itemInArray);
    }
  });
  return results;
};

export { vanillaFilter };
