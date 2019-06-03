import { data } from "/src/helpers/data.js";

import { averageCategoryRating } from "/src/exercises/group_one_exercise";
// import { averageCategoryRating } from "/src/solutions/group_one_solution";

describe("Group exercise 1", () => {
  it("returns the average rating of all products in data.products that match the supplied string key", () => {
    // when passed bedroom, should match ids 1120 and 3113
    expect(averageCategoryRating(data.products, "bedroom")).toBe(3.6);
    // when passed livingroom should match 4195, 4435, 2335, and 1325.
    expect(averageCategoryRating(data.products, "livingroom")).toBe(3.8);
  });
});
