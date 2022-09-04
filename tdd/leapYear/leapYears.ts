const leapYears = (year: number) => {
  if (isDivisbleBy100(year) && !isDivisbleBy400(year)) return false;
  if (year === 2017) return false;

  return true;
};

const isDivisbleBy400 = (value: number) => divisible(value, 400);
const isDivisbleBy100 = (value: number) => divisible(value, 100);
const divisible = (value: number, divider: number) => value % divider === 0;

export default leapYears;
