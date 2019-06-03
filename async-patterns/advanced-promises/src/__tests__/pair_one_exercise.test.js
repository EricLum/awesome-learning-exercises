import { ERROR_MESSAGE } from "/src/helpers/error_message";
import { filesAndResponses } from "/src/helpers/files_and_responses";

import { fetchProductData } from "/src/exercises/pair_one_exercise";
// import { fetchProductData } from "/src/solutions/pair_one_solution";

describe("Pair exercise 1", () => {
  it("Calls fetchProductData and returns products", () => {
    return fetchProductData("file4").then(response => {
      expect(response).toEqual(filesAndResponses.file4.products);
    });
  });

  it("Calls fetchProductData with an endpoint that responds with no products and throws the error 'Your request didn't return a product'", () => {
    const err = new Error("Your request didn't return a product");
    return fetchProductData("file3").then(error => {
      expect(error).toEqual(err);
    });
  });

  it("Calls fetchProductData with an endpoint that fails to return at all and catches the error", () => {
    const err = new Error(ERROR_MESSAGE);
    return fetchProductData("file5").then(error => {
      expect(error).toEqual(err);
    });
  });
});
