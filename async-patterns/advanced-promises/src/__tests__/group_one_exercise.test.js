import { getFile } from "/src/helpers/get_file";

import { requestAllFiles } from "/src/exercises/group_one_exercise";
// import { requestAllFiles } from "/src/solutions/group_one_solution";

describe("Group exercise 1", () => {
  it("Calls all promises and returns the responses of all completed promises", () => {
    const promises = [getFile("file1"), getFile("file2"), getFile("file3")];
    return requestAllFiles(promises).then(response => {
      expect(response).toEqual([
        "The first response",
        "The middle response",
        "The last response"
      ]);
    });
  });
});
