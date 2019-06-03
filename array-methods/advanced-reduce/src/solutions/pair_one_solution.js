/* 
Pair Challenge #1
Oh no! We've received malformed product data. 
Implement a function called groupByKeys that takes an object of malformed product data and 
returns a new object where each key is the unique value of the malformed data and 
their values are the former keys.

For example, 
  malformedProductData: {
    bedroom_bed: "category",
    livingroom_furniture: "category",
  }
  
should return 

{
 category: [bedroom_bed, livingroom_furniture],
 name: [red_stool]
}
*/
const groupByKeys = malformedData => {
  return Object.keys(malformedData).reduce((grouped, newKey) => {
    const newType = malformedData[newKey];
    return {
      ...grouped,
      [newType]: grouped[newType] ? [...grouped[newType], newKey] : [newKey]
    };
  }, {});
};

export { groupByKeys };
