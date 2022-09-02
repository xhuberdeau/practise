import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("Should return 1 for 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("Should return 2 for 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
});
