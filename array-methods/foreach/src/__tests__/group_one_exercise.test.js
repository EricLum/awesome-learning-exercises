import { forEach, data } from "../exercises/group_one_exercise.js";

describe("Group One Exercise", () => {
  it("Returns out all the words in exerciseOneArray", () => {
    const spy = jest.spyOn(data, "logger");
    forEach(data.exerciseOneArray, data.logger);
    const callData = spy.mock.calls.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
    expect(callData).toEqual(["this", "is", "working", "so", "well!"]);
    spy.mockClear();
  });
});
