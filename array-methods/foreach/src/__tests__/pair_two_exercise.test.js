import { data, logUserInformation } from "../exercises/pair_two_exercise";

describe("Pair Two Exercises", () => {
  it("Logs out every key value pair on the user object EXCEPT orderHistory", () => {
    const spy = jest.spyOn(data, "logger");
    logUserInformation(data.users, data.logger);
    const callData = spy.mock.calls.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
    expect(callData).toEqual([
      "name: Hal Smith",
      "email: hal@gmail.com",
      "emailOptout: true",
      "newCustomer: true",
      "name: Roger Branch",
      "email: roger@gmail.com",
      "newCustomer: false",
      "name: Elizabeth Chandler",
      "email: elizabeth@gmail.com",
      "newCustomer: true",
      "name: Roger Trot",
      "email: roger@gmail.com",
      "newCustomer: false",
      "name: James Yertz",
      "email: james@gmail.com",
      "newCustomer: true"
    ]);
    spy.mockClear();
  });
});
