import Expression from "./expression";
import ExpressionNumberExtractor from "./expressionNumberExtractor";

class StringCalculator {
  add(...expressions: [string]): string {
    const extractedNumbers = this.extractNumbers(...expressions);
    const total = this.sumNumbers(extractedNumbers);

    return total.toString();
  }

  private extractNumbers(...expressions: [string]): number[] {
    return expressions
      .map((expression: string) => new Expression(expression))
      .reduce(
        (acc: number[], expression: Expression) => [
          ...acc,
          ...ExpressionNumberExtractor.extractNumbers(expression),
        ],
        []
      );
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
