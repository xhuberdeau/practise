import Expression from "./expression";
import ExpressionNumbersExtractor from "./expressionNumbersExtractor";
import ExpressionNumbersValidator from "./expressionNumbersValidator";
import NumberObject from "./NumberValidator";

class StringCalculator {
  add(...expressions: [string]): string {
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

    return this.sumNumbers(extractedNumbers).toString();
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
}

export default StringCalculator;
