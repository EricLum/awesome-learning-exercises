import { getFile } from "/src/helpers/get_file";
/*
Group Exercise Three - Simple error handling

Write a function called simpleRequest that takes in a file name, calls getFile with it, 
then either returns it's response, or returns it's error 
*/
function simpleRequest(fileName) {
  return getFile(fileName)
    .then(response => response)
    .catch(error => error);
}

export { simpleRequest };
