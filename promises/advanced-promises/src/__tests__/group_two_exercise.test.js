import { returnFirstAvailableFile } from "/src/exercises/group_two_exercise";
// import { returnFirstAvailableFile } from "/src/solutions/group_two_solution";

describe("Group exercise 2", () => {
  it("Calls all promsises and returns the result of the first promise to finish", () => {
    // Need to make a version of promise that responds in a given time.
    function getTimedFile(response, time) {
      return new Promise(function(resolve) {
        setTimeout(() => {
          resolve(response);
        }, time);
      });
    }

    const promise1 = getTimedFile("first", 100);
    const promise2 = getTimedFile("second", 200);
    const promise3 = getTimedFile("third", 300);
    const promises = [promise1, promise2, promise3];

    return returnFirstAvailableFile(promises).then(response => {
      expect(response).toEqual("first");
    });
  });
});
