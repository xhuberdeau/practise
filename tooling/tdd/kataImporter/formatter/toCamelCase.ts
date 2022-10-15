import toPascalCase from "./toPascalCase.js";

const toCamelCase = (text: string): string => {
  const [first, ...rest] = text.toLowerCase().split(" ");

  if (rest.length === 0) {
    return first;
  }
  console.log(first, rest);
  return `${first}${toPascalCase(rest.join(" "))}`;
};

export default toCamelCase;
