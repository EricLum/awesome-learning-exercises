import { ERROR_MESSAGE } from "/src/helpers/error_message";
import { getFile } from "/src/helpers/get_file";

import { requestAllFilesHandleErrors } from "/src/exercises/pair_two_exercise";
// import { requestAllFilesHandleErrors } from "/src/solutions/pair_two_solution";

describe("Pair exercise 2", () => {
  it("Handles individual errors in a Promise.all", () => {
    const error = new Error(ERROR_MESSAGE);
    const promises = [getFile("file1"), getFile("file5"), getFile("file3")];
    return requestAllFilesHandleErrors(promises).then(response => {
      expect(response).toEqual([
        "The first response",
        { error },
        "The last response"
      ]);
    });
  });
});
