import { data } from "/src/helpers/data";

import { getOutOfStockProducts } from "/src/exercises/pair_two_exercise";
// import { getOutOfStockProducts } from "/src/solutions/pair_two_solution";

describe("Pair exercise 2", () => {
  it("calls getOutOfStockProducts with data.products, and returns an array of objects that look like this { productId: 9203, inStockDate: '1/1/2021' } for any product with an outOfStock value of true", () => {
    expect(getOutOfStockProducts(data.products)).toEqual([
      { productId: 2335, inStockDate: "12/25/2020" },
      { productId: 9203, inStockDate: "1/1/2021" }
    ]);
  });
});
