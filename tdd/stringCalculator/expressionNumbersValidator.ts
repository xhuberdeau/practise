import NumberObject from "./NumberValidator";

class ExpressionNumbersValidator {
  private numbers: NumberObject[];
  constructor(numbers: NumberObject[]) {
    this.numbers = numbers;
  }

  validateNumbers(): null | string {
    const invalidNumbers = [];
    this.numbers.forEach((number) => {
      if (!number.isPositive()) {
        invalidNumbers.push(number);
      }
    });

    if (invalidNumbers.length > 0) {
      const invalidNumberStringList = invalidNumbers
        .map((number) => number.getValue())
        .join(", ");
      return `Negative not allowed : ${invalidNumberStringList}`;
    }

    return null;
  }
}

export default ExpressionNumbersValidator;
