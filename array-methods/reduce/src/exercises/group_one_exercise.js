/* 
Group Exercise #1 - Write a vanilla JS implementation of reduce.

In order to better understand reduce, we want you to write a bare bones vanilla JS version of it. 
This will by no means be an exhaustive version of reduce, it's meant as a instructional tool to understand how the real prototype method works. 

Create a function called vanillaReduce that takes three parameters.
1. An array
2. A callback function 
 - (should take the accumulator value, current element, index, and original array)
3. an initial value

Here's how it works:
The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop.
The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value.
This occurs until there are no more elements, at which point the accumulator is returned.*/
const vanillaReduce = (array, callback, initialValue) => {
  // Your solution here
};

export { vanillaReduce };
