import leapYears from "./leapYears";

describe("Leap years", () => {
  describe("All years divisible by 400 ARE leap years", () => {
    test("2000 is a leap year", () => {
      expect(leapYears(2000)).toBeTruthy();
    });

    test("1200 is a leap year", () => {
      expect(leapYears(1200)).toBeTruthy();
    });

    test("-400 is a leap year", () => {
      expect(leapYears(-400)).toBeTruthy();
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

  describe("All years not divisible by 4 are NOT leap years", () => {
    test("2017 is not a leap year", () => {
      expect(leapYears(2017)).toBeFalsy();
    });

    test("2018 is not a leap year", () => {
      expect(leapYears(2018)).toBeFalsy();
    });
  });

  describe("All years divisible by 4 but not by 100 ARE leap years", () => {
    test("2008 is a leap year", () => {
      expect(leapYears(2008)).toBeTruthy();
    });

    test("2012 is a leap year", () => {
      expect(leapYears(2012)).toBeTruthy();
    });

    test("2016 is a leap year", () => {
      expect(leapYears(2016)).toBeTruthy();
    });
  });
});
