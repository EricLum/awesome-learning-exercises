/* 
Group Challenge #1
We need the average rating of our living room furniture! 
Implement a function called averageCategoryRating that takes in an array of products and a string key, 
and returns the average rating of all items that have a category type that matches the supplied key. 
A category is considered to be matching if any words in the snake-cased category match the key.

HINTS: 
1. You can use array methods other than reduce to solve this!
2. Javascript has a weird way of doing math. 
You may need to do something like .toFixed(1) to get the nearest rounded float. 
For example, if you're running into a value like 3.599999999999 instead of 3.6, 
you may need to return Number(yourNum.toFixed(1)) or Math.round(yourNum * 10) / 10. 
If you are interested in performance, heres a bench test of the relative methods of rounding in JS
*/
const averageCategoryRating = (products, key) => {
  // Your solution here
};

export { averageCategoryRating };
