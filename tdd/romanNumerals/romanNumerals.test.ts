import { convertToArabic, convertToRoman } from "./romanNumerals";

describe("Roman Numerals", () => {
  describe("Convert from Arabic numbers to Roman numerals", () => {
    it("converts 1 to I", () => {
      expect(convertToRoman(1)).toBe("I");
    });

    it("converts 2 to II", () => {
      expect(convertToRoman(2)).toBe("II");
    });

    it("converts 3 to III", () => {
      expect(convertToRoman(3)).toBe("III");
    });

    it("converts 5 to V", () => {
      expect(convertToRoman(5)).toBe("V");
    });

    it("converts 6 to VI", () => {
      expect(convertToRoman(6)).toBe("VI");
    });

    it("converts 7 to VII", () => {
      expect(convertToRoman(7)).toBe("VII");
    });

    it("converts 8 to VII", () => {
      expect(convertToRoman(8)).toBe("VIII");
    });

    it("converts 10 to X", () => {
      expect(convertToRoman(10)).toBe("X");
    });

    it("converts 11 to XI", () => {
      expect(convertToRoman(11)).toBe("XI");
    });

    it("converts 50 to L", () => {
      expect(convertToRoman(50)).toBe("L");
    });

    it("converts 20 to XX", () => {
      expect(convertToRoman(20)).toBe("XX");
    });

    it("converts 15 to XV", () => {
      expect(convertToRoman(15)).toBe("XV");
    });

    it("converts 100 to C", () => {
      expect(convertToRoman(100)).toBe("C");
    });

    it("converts 500 to D", () => {
      expect(convertToRoman(500)).toBe("D");
    });

    it("converts 1000 to M", () => {
      expect(convertToRoman(1000)).toBe("M");
    });

    it("converts 1376 to MCCCLXXVI", () => {
      expect(convertToRoman(1376)).toBe("MCCCLXXVI");
    });

    it("converts 499 to CDXCIX", () => {
      expect(convertToRoman(499)).toBe("CDXCIX");
    });

    it("converts 2494 to MMCDXCIV", () => {
      expect(convertToRoman(2494)).toBe("MMCDXCIV");
    });

    it("converts 4999 to MMMMCMXCIX", () => {
      expect(convertToRoman(4999)).toBe("MMMMCMXCIX");
    });
  });

  describe("Convert from Roman numbers to Arabic numerals", () => {
    it("converts I to 1", () => {
      expect(convertToArabic("I")).toBe(1);
    });

    it("converts MCCCLXXVI to 1376 ", () => {
      expect(convertToArabic("MCCCLXXVI")).toBe(1376);
    });

    it("converts CDXCIX to 499 ", () => {
      expect(convertToArabic("CDXCIX")).toBe(499);
    });

    it("converts MMCDXCIV to 2494", () => {
      expect(convertToArabic("MMCDXCIV")).toBe(2494);
    });

    it("converts MMMMCMXCIX to 4999  ", () => {
      expect(convertToArabic("MMMMCMXCIX")).toBe(4999);
    });
  });
});
