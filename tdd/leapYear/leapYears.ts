const leapYears = (year: number) => {
  if (year % 100 === 0 && !(year % 400 === 0)) return false;

  return true;
};

export default leapYears;
