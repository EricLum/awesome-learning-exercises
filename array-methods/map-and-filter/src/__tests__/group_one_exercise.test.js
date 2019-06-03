import { data } from "/src/helpers/data";

import { vanillaMap } from "/src/exercises/group_one_exercise";
// import { vanillaMap } from "/src/solutions/group_one_solution";

describe("Group Exercise 1", () => {
  it("calls vanillaMap with numbersArray and a callback 'addTwo' and returns a new array with the result of calling addTwo on each item in the array", () => {
    const addTwo = item => item + 2;
    expect(vanillaMap(data.numbersArray, addTwo)).toEqual([
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });
});
