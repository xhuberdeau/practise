import Expression from "./expression";
import ExpressionNumberExtractor from "./expressionNumberExtractor";
import NumberObject from "./NumberValidator";

class StringCalculator {
  add(...expressions: [string]): string {
    const extractedNumbers = this.extractNumbers(...expressions);
    const invalidNumber = extractedNumbers.find(
      (number) => number.isValid() !== null
    );
    if (invalidNumber) {
      return invalidNumber.isValid();
    }
    const total = this.sumNumbers(extractedNumbers);

    return total.toString();
  }

  private extractNumbers(...expressions: [string]): NumberObject[] {
    return expressions
      .map((expression: string) => new Expression(expression))
      .reduce(
        (acc: NumberObject[], expression: Expression) => [
          ...acc,
          ...ExpressionNumberExtractor.extractNumbers(expression),
        ],
        []
      );
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
