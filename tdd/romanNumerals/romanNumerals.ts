const SYMBOLS_MAP: {
  [key: number]: string;
} = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

export const convertToRoman = (number: number) => {
  let remaining = number;
  const nearestSmallerArabic = findGreatestArabicLesserThanOrEqual(number);
  const greatestRoman = SYMBOLS_MAP[nearestSmallerArabic];
  remaining -= nearestSmallerArabic;
  if (remaining > 0) {
    return greatestRoman + convertToRoman(remaining);
  }

  return greatestRoman;
};

const findGreatestArabicLesserThanOrEqual = (arabic: number): number => {
  return Object.keys(SYMBOLS_MAP)
    .map(Number)
    .sort((a, b) => b - a)
    .find((val: number) => val <= arabic);
};
