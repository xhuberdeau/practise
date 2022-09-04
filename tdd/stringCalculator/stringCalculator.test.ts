import StringCalculator from "./stringCalculator";

describe("String calculator", () => {
  let stringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  test('returns "0" for ""', () => {
    expect(stringCalculator.add("")).toEqual("0");
  });
});
