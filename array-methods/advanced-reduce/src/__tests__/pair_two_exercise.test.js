import { data } from "/src/helpers/data.js";

import { savedItemsIntersection } from "/src/exercises/pair_two_exercise";
// import { savedItemsIntersection } from "/src/solutions/pair_two_solution";

describe("Pair exercise 2", () => {
  it("returns the intersection of all customer's savedItems arrays", () => {
    expect(savedItemsIntersection(data.customers)).toEqual([2335]);
  });
});
