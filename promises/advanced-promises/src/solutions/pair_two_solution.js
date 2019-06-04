/*
Pair Exercise Two - Handle individual errors in a parallel request

Sometimes you will want to make multiple requests in parallel but handle errors individually.

Promise.all will reject if any of the promises rejects, so we need a way to handle individual errors.

Write a function called requestAllFilesHandleErrors that takes an array of promises (like Group Exercise 1)
and returns the return values of all the completed promises in the provided array.

If any of the promises throw an error, handle the error so that the rest of the promises resolve.

Any promises that reject should return an object of this shape: { error: caughtError };
*/
function requestAllFilesHandleErrors(arrayOfPromises) {
  const promisesWithErrors = arrayOfPromises.map(promise =>
    promise.catch(error => ({ error }))
  );

  return Promise.all(promisesWithErrors).then(values => values);
}

export { requestAllFilesHandleErrors };
