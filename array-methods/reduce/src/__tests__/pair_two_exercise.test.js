import { data } from "/src/helpers/data";

import { getSavedItemFrequency } from "/src/exercises/pair_two_exercise";
// import { getSavedItemFrequency } from "/src/solutions/pair_two_solution";

describe("Pair exercise 2", () => {
  it("returns an object of saved items, where the keys are item ids and the values are their frequency", () => {
    const result = getSavedItemFrequency(data.customers);
    expect(result).toEqual({
      1098: 1,
      1120: 2,
      1213: 1,
      1325: 1,
      2233: 1,
      2335: 4,
      3322: 1,
      4231: 2,
      7732: 1,
      9090: 1,
      9203: 1
    });
  });
});
