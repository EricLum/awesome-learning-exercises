import { output } from "/src/helpers/output";
import { getFile } from "/src/helpers/get_file";
/*
Pair Exercise Three - Handling multiple promises in serial

Remember the last session when you made a promise chain of all those getFile calls to serialize promises? 
Thats cool, but what if you need to load a set of images, wait until its loaded, then load the next set? 
We run into this problem a lot in bundle optimization and infinite scrolls.  

We need a way to call an endpoint, ensure it's complete, call an endpoint with it's result, then call for the next set of images.  

So...implement a function called lazyRequestImages that takes an array of set ids, calls getFile for each image set and calls a callback with it's result.

When all promises are complete, finish the function by logging out "Complete".

Make sure to handle errors with a catch and return the error!

NOTES: 
1. If you are thinking about Promise.all, consider the fact that Promise.all doesn't preserve the order of the promises. 
(so don't use it here unless you can make it work, in which case please send me that solution!)
2. You will need two iterating functions. first, you will need to map over imageSetIds, which is an array of strings and create a promise for each one. 
From there, you will need to reduce them to a single promise in some way.

If you didn't read the pre-read and are totally stuck, here is the relevant pre-read article again (https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/)

Here's an example of what we will be passing to the lazyRequestImages.
const imageSetIds = ['IRE:1426', 'IRE:1427', 'IRE:1428']
*/
function lazyRequestImages(imageSetIdArray) {
  imageSetIdArray
    .map(getFile)
    .reduce(
      (promiseChain, filePromise) => {
        return promiseChain
          .then(response => {
            return response || filePromise;
          })
          .then(output)
          .catch(error => error);
      },
      Promise.resolve() // fulfilled promise to start chain
    )
    .then(function() {
      output("Complete!");
    });
}

export { lazyRequestImages };
