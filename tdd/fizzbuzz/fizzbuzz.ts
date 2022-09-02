const FIZZ = "Fizz";
const BUZZ = "Buzz";

const fizzbuzz = (value: number) => {
  const stringValue: string = value.toString();
  let output = "";

  if (stringValue.includes("3")) {
    output += FIZZ;
  }

  if (stringValue.includes("5")) {
    output += BUZZ;
  }

  if (value % 15 === 0) {
    return output + `${FIZZ}${BUZZ}`;
  }

  if (value % 3 === 0) {
    return FIZZ;
  }

  if (value % 5 === 0) {
    return output + BUZZ;
  }

  return output || value;
};

export default fizzbuzz;
