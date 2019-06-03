import { data } from "/src/helpers/data";

import { getProductMetaData } from "/src/exercises/group_three_exercise";
// import { getProductMetaData } from "/src/solutions/group_three_solution";

describe("Group Exercise 3", () => {
  it("calls getProductMetaData with data.products and returns an array of objects that each have the id and name properties", () => {
    expect(getProductMetaData(data.products)).toEqual([
      { productName: "Darby Sectional", productId: 2335 },
      { productName: "Red Bar Stool", productId: 1325 },
      { productName: "Lamp", productId: 9203 },
      { productName: "Quilted Head Board", productId: 1120 },
      { productName: "Rusty Barn Door", productId: 4435 }
    ]);
  });
});
