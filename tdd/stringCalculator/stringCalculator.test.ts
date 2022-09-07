import StringCalculator from "./stringCalculator";

describe("String calculator", () => {
  let stringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  describe("Basic sum with one string param", () => {
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

  describe("Sum with any number of string params", () => {
    test('returns "18" for "3", "4", "5", "6"', () => {
      expect(stringCalculator.add("3", "4", "5", "6")).toEqual("18");
    });
  });

  describe("Allow new line as number separator", () => {
    test('returns "7" for "3\n4"', () => {
      expect(stringCalculator.add("3\n4")).toEqual("7");
    });
  });

  describe("Allow custom separators", () => {
    test('returns "3" for "//;\n1;2"', () => {
      expect(stringCalculator.add("//;\n1;2")).toEqual("3");
    });

    test('returns "6" for "//|\n1|2|3"', () => {
      expect(stringCalculator.add("//|\n1|2|3")).toEqual("6");
    });

    test('returns "6" for "//sep\n2sep3"', () => {
      expect(stringCalculator.add("//sep\n2sep3")).toEqual("5");
    });
  });

  describe("negative numbers", () => {
    test('returns "Negative not allowed : -1" for "-1,2"', () => {
      expect(stringCalculator.add("-1,2")).toEqual("Negative not allowed : -1");
    });

    test('returns "Negative not allowed : -4, -5" for "2,-4,-5"', () => {
      expect(stringCalculator.add("2,-4,-5")).toEqual(
        "Negative not allowed : -4, -5"
      );
    });
  });
});
