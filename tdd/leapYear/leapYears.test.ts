describe("Leap years", () => {
  describe("All years divisible by 400 ARE leap years", () => {
    test("2000 is a leap year", () => {
      expect(leapYears(2000)).toBeTruthy();
    });
  });
});
