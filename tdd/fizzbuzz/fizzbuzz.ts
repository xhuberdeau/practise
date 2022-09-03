const FIZZ = "Fizz";
const BUZZ = "Buzz";

const fizzbuzz = (value: number) => {
  let output = "";

  if (contains3(value)) {
    output += FIZZ;
  }

  if (contains5(value)) {
    output += BUZZ;
  }

  if (divisibleBy3(value)) {
    output += FIZZ;
  }

  if (divisibleBy5(value)) {
    output += BUZZ;
  }

  return output || value;
};

const divisibleBy3 = (value: number) => divisible(value, 3);
const divisibleBy5 = (value: number) => divisible(value, 5);
const divisible = (value: number, diviser: number) => value % diviser === 0;
const contains3 = (value: number) => numberContainsDigit(value, "3");
const contains5 = (value: number) => numberContainsDigit(value, "5");
const numberContainsDigit = (value: number, digit: string) =>
  value.toString().includes(digit);

export default fizzbuzz;
