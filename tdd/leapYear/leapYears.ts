const leapYears = (year: number) => {
  if (isDivisibleBy100(year) && !isDivisibleBy400(year)) return false;
  if (!isDivisibleBy4(year)) return false;

  return true;
};

const isDivisibleBy4 = (value: number) => isDivisible(value, 4);
const isDivisibleBy400 = (value: number) => isDivisible(value, 400);
const isDivisibleBy100 = (value: number) => isDivisible(value, 100);
const isDivisible = (value: number, divider: number) => value % divider === 0;

export default leapYears;
