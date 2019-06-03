import { data } from "/src/helpers/data";

import { filterByTotalOver150 } from "/src/exercises/group_four_exercise";
// import { filterByTotalOver150 } from "/src/solutions/group_four_solution";

describe("Group Exercise 4", () => {
  it("calls filterByTotalOver150 with data.customers and returns an array of customers whose cart * quantity exceeds 150", () => {
    expect(filterByTotalOver150(data.customers)).toEqual([
      {
        first: "David",
        last: "Patten",
        cart: 71,
        quantity: 3,
        email: "dpat@gmail.com",
        savedItems: [2335, 9203, 1325]
      }
    ]);
  });
});
