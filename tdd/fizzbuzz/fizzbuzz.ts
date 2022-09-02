const FIZZ = "Fizz";
const BUZZ = "Buzz";

const fizzbuzz = (value: number) => {
  if (value % 15 === 0) {
    return `${FIZZ}${BUZZ}`;
  }

  if (value % 3 === 0) {
    return FIZZ;
  }

  if (value % 5 === 0) {
    return BUZZ;
  }

  return value;
};

export default fizzbuzz;
