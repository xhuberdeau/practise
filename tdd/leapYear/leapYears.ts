const leapYears = (year: number) => {
  if (isDivisbleBy100(year) && !isDivisbleBy400(year)) return false;
  if (!isDivisbleBy4(year)) return false;

  return true;
};

const isDivisbleBy4 = (value: number) => divisible(value, 4);
const isDivisbleBy400 = (value: number) => divisible(value, 400);
const isDivisbleBy100 = (value: number) => divisible(value, 100);
const divisible = (value: number, divider: number) => value % divider === 0;

export default leapYears;
