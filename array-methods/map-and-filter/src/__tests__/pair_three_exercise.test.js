import { data } from "/src/helpers/data";

import { alertOutOfStock } from "/src/exercises/pair_three_exercise";
// import { alertOutOfStock } from "/src/solutions/pair_three_solution";

describe("Pair exercise 3", () => {
  it("calls alertOutOfStock with data.customers, data.products, and a callback defined in the test cases and calls the callback with the customer email and product name for any product in the customers savedItems array that has an outOfStock value of true", () => {
    const callBack = jest.fn();

    alertOutOfStock(data.customers, data.products, callBack);

    expect(callBack.mock.calls).toEqual([
      ["rodrut@gmail.com", 2335],
      ["dpat@gmail.com", 2335],
      ["dpat@gmail.com", 9203]
    ]);
  });
});
