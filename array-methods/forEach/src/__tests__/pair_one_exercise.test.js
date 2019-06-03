import {
  data,
  createLibraVariations
} from "../exercises/pair_one_exercise";

describe("Pair One Exercises", () => {
  it("calls the callback with {userEmail, libraGroup: 'A'} for the first half of users and {userEmail, libraGroup: 'B'} for the second half of users", () => {
    const spy = jest.spyOn(data, "saveUser");

    createLibraVariations(data.users, data.saveUser);

    const callData = spy.mock.calls.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
    expect(callData).toEqual([
      { email: "hal@gmail.com", libraGroup: "A" },
      { email: "roger@gmail.com", libraGroup: "A" },
      { email: "elizabeth@gmail.com", libraGroup: "A" },
      { email: "james@gmail.com", libraGroup: "B" },
      { email: "roger@gmail.com", libraGroup: "B" }
    ]);
    spy.mockClear();
  });
});
