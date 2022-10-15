const ARABIC_TO_ROMAN: {
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

const ROMAN_TO_ARABIC: {
  [key: string]: string;
} = Object.fromEntries(
  Object.entries(ARABIC_TO_ROMAN).map((entry) => entry.reverse())
);

export const convertToRoman = (number: number) => {
  let remaining = number;
  const nearestSmallerArabic = findGreatestArabicLesserThanOrEqual(number);
  const roman = ARABIC_TO_ROMAN[nearestSmallerArabic];
  remaining -= nearestSmallerArabic;
  if (remaining > 0) {
    return roman + convertToRoman(remaining);
  }

  return roman;
};

const findGreatestArabicLesserThanOrEqual = (arabic: number): number => {
  return Object.keys(ARABIC_TO_ROMAN)
    .map(Number)
    .sort((a, b) => b - a)
    .find((val: number) => val <= arabic);
};

export const convertToArabic = (roman: string): number => {
  let remaining = roman;
  const nearestSmallerRoman = findGreatestRomaonLesserThanOrEqual(roman);
  const arabic = Number.parseInt(ROMAN_TO_ARABIC[nearestSmallerRoman]);
  remaining = remaining.slice(nearestSmallerRoman.length);
  if (remaining) {
    return arabic + convertToArabic(remaining);
  }

  return arabic;
};

const findGreatestRomaonLesserThanOrEqual = (roman: string): string => {
  return Object.keys(ROMAN_TO_ARABIC)
    .sort((a, b) => b.localeCompare(a))
    .find((val: string) => roman.startsWith(val));
};
