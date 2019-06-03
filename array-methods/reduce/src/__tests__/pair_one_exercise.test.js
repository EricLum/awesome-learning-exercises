import { data } from "/src/helpers/data";

import { getSavedItems } from "/src/exercises/pair_one_exercise";
// import { getSavedItems } from "/src/solutions/pair_one_solution";

describe("Pair exercise 1", () => {
  it("returns an array of unique savedItemIds from all customers", () => {
    const uniqueIds = getSavedItems(data.customers);
    expect(uniqueIds).toEqual([
      2335,
      1120,
      4231,
      7732,
      1098,
      2233,
      3322,
      9203,
      1325,
      9090,
      1213
    ]);
  });
});
