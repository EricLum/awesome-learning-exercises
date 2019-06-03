import { data } from "/src/helpers/data";

import { totalSavedItems } from "/src/exercises/group_two_exercise";
// import { totalSavedItems } from "/src/solutions/group_two_solution";

describe("Group exercise 2", () => {
  it("returns the total number of saved item ids from all customers", () => {
    const totalIds = totalSavedItems(data.customers);
    expect(totalIds).toBe(16);
  });
});
