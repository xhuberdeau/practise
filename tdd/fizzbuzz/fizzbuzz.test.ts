import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("Returns 1 for 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("Returns 2 for 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });

  it("Returns Fizz for 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
});
