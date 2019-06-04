/*
Group Exercise Two - Using Promise.race to load the first available file

Write a function called returnFirstAvailableFile that takes in an array of promises 
and returns the value of the first promise to complete.
*/

function returnFirstAvailableFile(arrayOfPromises) {
  return Promise.race(arrayOfPromises).then(values => values);
}

export { returnFirstAvailableFile };
