import NumberObject from "./NumberValidator";

class ExpressionNumbersValidator {
  private numbers: NumberObject[];
  constructor(numbers: NumberObject[]) {
    this.numbers = numbers;
  }

  validateNumbers(): null | string {
    const negativeNumbers = this.gatherNegativeNumbers();

    if (negativeNumbers.length > 0) {
      const negativeNumberStringList = negativeNumbers
        .map((number) => number.getValue())
        .join(", ");

      return `Negative not allowed : ${negativeNumberStringList}`;
    }

    return null;
  }

  private gatherNegativeNumbers(): NumberObject[] {
    return this.numbers.filter((number) => !number.isPositive());
  }
}

export default ExpressionNumbersValidator;
