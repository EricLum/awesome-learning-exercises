import { saveNewUsers, data } from "../exercises/group_two_exercise";

describe("Group Two Exercise ", () => {
  it("Calls the saveUser callback on every user with a newCustomer property of true", () => {
    const spy = jest.spyOn(data, "saveUser");
    saveNewUsers(data.users, data.saveUser);
    const callData = spy.mock.calls.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
    expect(callData).toEqual([
      "Hal Smith",
      "hal@gmail.com",
      "Elizabeth Chandler",
      "elizabeth@gmail.com",
      "James Yertz",
      "james@gmail.com"
    ]);
    spy.mockClear();
  });
});
