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

  it("Returns 4 for 4", () => {
    expect(fizzbuzz(4)).toEqual(4);
  });

  it("Returns Fizz for 6", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("Returns Buzz for 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("Returns Buzz for 10", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("Returns FizzBuzz for 15", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  it("Returns FizzBuzz for 30", () => {
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });

  it("Returns Fizz for 13", () => {
    expect(fizzbuzz(13)).toEqual("Fizz");
  });
});
