import { vanillaReduce } from "/src/exercises/group_one_exercise";
// import { vanillaReduce } from "/src/solutions/group_one_solution";

describe("Group exercise 1", () => {
  it("vanillaReduce sums an array of values the same as native .reduce()", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const nativeReduceTotal = nums.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    const vanillaReduceTotal = vanillaReduce(
      nums,
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );

    expect(nativeReduceTotal).toEqual(vanillaReduceTotal);
  });
});
