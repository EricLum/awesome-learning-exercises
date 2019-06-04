import { ERROR_MESSAGE } from "/src/helpers/error_message";

import { simpleRequest } from "/src/exercises/group_three_exercise";
// import { simpleRequest } from "/src/solutions/group_three_solution";

describe("Group exercise 3", () => {
  it("Makes a call to getFile and returns the result", () => {
    return simpleRequest("file1").then(response => {
      expect(response).toEqual("The first response");
    });
  });

  it("Makes a call to getFile with a bogus filename and throws an error 'Error loading file' ", () => {
    const err = new Error(ERROR_MESSAGE);
    return simpleRequest("file5").then(error => {
      expect(error).toEqual(err);
    });
  });
});
