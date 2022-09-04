import Expression from "./expression";
import ExpressionNumberExtractor from "./expressionNumberExtractor";

class StringCalculator {
  CUSTOM_SEPARATORS_DECLARATION_START = "//";
  INTERNAL_SEPARATOR = ",";
  DEFAULT_NUMBER_SEPARATORS = [this.INTERNAL_SEPARATOR, "\n"];

  add(...expressions: [string]): string {
    let total = 0;

    expressions
      .map((expression: string) => new Expression(expression))
      .map((expression: Expression) =>
        ExpressionNumberExtractor.extractNumbers(expression)
      )
      .forEach((numbers: number[]) => {
        total += this.sumNumbers(numbers);
      });

    return total.toString();
  }

  private sumNumbers(numbers: number[]): number {
    return Number(
      numbers
        .reduce((acc: number, number: number) => acc + number, 0)
        .toFixed(2)
    );
  }
}

export default StringCalculator;
