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

  if (value.toString().includes("3")) {
    return FIZZ;
  }

  return value;
};

export default fizzbuzz;
