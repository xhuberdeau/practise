import leapYears from "./leapYears";

describe("Leap years", () => {
  describe("All years divisible by 400 ARE leap years", () => {
    test("2000 is a leap year", () => {
      expect(leapYears(2000)).toBeTruthy();
    });
  });

  describe("All years divisible by 100 but not by 400 are NOT leap years", () => {
    test("1700 is not a leap year", () => {
      expect(leapYears(1700)).toBeFalsy();
    });

    test("1800 is not a leap year", () => {
      expect(leapYears(1800)).toBeFalsy();
    });
  });
});
