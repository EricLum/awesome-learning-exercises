import { data } from "/src/helpers/data";

import { vanillaFilter } from "/src/exercises/group_two_exercise";
// import { vanillaFilter } from "/src/solutions/group_two_solution";

describe("Group Exercise 2", () => {
  it("calls vanillaFilter with exerciseOneArray and a callback lessThanFive and returns a new array with numbers less than five", () => {
    const lessThanFive = item => (item < 5 ? true : false);
    expect(vanillaFilter(data.numbersArray, lessThanFive)).toEqual([
      1,
      2,
      3,
      4
    ]);
  });
});
