const toPascalCase = (text: string): string => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join("");
};

export default toPascalCase;
