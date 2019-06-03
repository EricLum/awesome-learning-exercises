import { data } from "/src/helpers/data";

import { getPopularProducts } from "/src/exercises/pair_one_exercise";
// import { getPopularProducts } from "/src/solutions/pair_one_solution";

describe("Pair exercise 1", () => {
  it("calls getPopularProducts with data.products, filters out all products with a rating below 4, and returns an array of the remaining product ids", () => {
    expect(getPopularProducts(data.products)).toEqual([1325, 9203]);
  });
});
