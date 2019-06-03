import { data } from "/src/helpers/data.js";

import { groupByKeys } from "/src/exercises/pair_one_exercise";
// import { groupByKeys } from "/src/solutions/pair_one_solution";

describe("Pair exercise 1", () => {
  it("returns the properly formed data", () => {
    expect(groupByKeys(data.malformedProductData)).toEqual({
      category: [
        "bedroom_bed",
        "livingroom_furniture",
        "bedroom_furniture",
        "lighting_small"
      ],
      name: ["super plush mattress", "red stool"]
    });
  });
});
