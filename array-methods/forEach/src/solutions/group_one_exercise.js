/* Group Challenge #1: Implement a function called forEach that takes in an array and a callback, and will apply the callback to every element in an array. A couple of notes - this is by no means an exhaustive forEach. The actual forEach spec handles objects, arrays, and sparse arrays but this will help understand the inter-workings of forEach. We are not asking you to create the prototype method, just a function that mimics the functionality of forEach. 
HINTS: 
You will need to use a for loop
If you're stuck, check out underscore :)
*/
export const forEach = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i]);
  }
};

export const data = {
  exerciseOneArray: ["this", "is", "working", "so", "well!"],
  logger: item => {
    // This function is used as a placeholder callback
    return item;
  }
};
