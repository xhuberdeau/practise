import StringCalculator from "./stringCalculator";

describe("String calculator", () => {
  let stringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  test('returns "0" for ""', () => {
    expect(stringCalculator.add("")).toEqual("0");
  });

  test('returns "1" for "1"', () => {
    expect(stringCalculator.add("1")).toEqual("1");
  });

  test('returns "3" for "1,2"', () => {
    expect(stringCalculator.add("1,2")).toEqual("3");
  });

  test('returns "3.3" for "1.1,2.2"', () => {
    expect(stringCalculator.add("1.1,2.2")).toEqual("3.3");
  });
});
