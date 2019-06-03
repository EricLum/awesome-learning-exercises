import { getFile } from "/src/helpers/get_file";
/*
Pair Exercise One - Advanced error handling in Promises

write a function called fetchProductData that takes in a file name, 
and calls getFile with that filename. 
For reference, getFile returns a promise (you can see it in the helper functions). 

Then handle the following cases: 

1. If getFile responds with products (i.e if response.products.length > 1) you should return  response.products.

2. If there are no products but the server successfully responds, you should throw an error `Your request didn't return a product`

3. You should return any errors you receive. 
*/
function fetchProductData(file) {
  // Your Code Here
  return getFile(file)
    .then(response => {
      if (response.products && response.products.length) {
        return response.products;
      } else {
        throw new Error(`Your request didn't return a product`);
      }
    })
    .catch(error => error);
}

export { fetchProductData };
