import { lazyRequestImages } from "/src/exercises/pair_three_exercise";
// import { lazyRequestImages } from "/src/solutions/pair_three_solution";

describe("Pair exercise 3", () => {
  const spy = jest.spyOn(console, "log");

  beforeEach(() => spy.mockClear());

  it("Subsequently requests getFile with each filename provided, and calls the callback with the response from each one", done => {
    lazyRequestImages(["IRE:1426", "IRE:1427", "IRE:1428"]);

    setTimeout(() => {
      try {
        expect(spy.mock.calls).toEqual([
          [["/src/image_1", "/src/image_2", "/src/image_3"]],
          [["/src/image_4", "/src/image_5", "/src/image_6"]],
          [["/src/image_7", "/src/image_8", "/src/image_9"]],
          ["Complete!"]
        ]);
        done();
      } catch (err) {
        done(err);
      }
    }, 1500);
  });
});
