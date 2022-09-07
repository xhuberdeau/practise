import Expression from "./expression";
import ExpressionNumbersExtractor from "./expressionNumbersExtractor";
import ExpressionNumbersValidator from "./expressionNumbersValidator";
import NumberObject from "./NumberValidator";

class StringCalculator {
  add(...expressions: [string]): string {
    return this.execute(this.sumNumbers, ...expressions);
  }

  multiply(...expressions: [string]): string {
    return this.execute(this.multiplyNumbers, ...expressions);
  }

  private execute(
    transformNumbers: (numbers: NumberObject[]) => number,
    ...expressions: [string]
  ): string {
    const extractedNumbers =
      ExpressionNumbersExtractor.extractNumbersFromExpressions(
        ...expressions.map((expression) => new Expression(expression))
      );

    const validation = new ExpressionNumbersValidator(
      extractedNumbers
    ).validateNumbers();

    if (validation !== null) {
      return validation;
    }

    return transformNumbers(extractedNumbers).toString();
  }

  private sumNumbers(numbers: NumberObject[]): number {
    return Number(
      numbers
        .reduce(
          (acc: number, number: NumberObject) => acc + number.getValue(),
          0
        )
        .toFixed(2)
    );
  }

  private multiplyNumbers(numbers: NumberObject[]): number {
    return Number(
      numbers
        .reduce(
          (acc: number, number: NumberObject) => acc * number.getValue(),
          1
        )
        .toFixed(2)
    );
  }
}

export default StringCalculator;
