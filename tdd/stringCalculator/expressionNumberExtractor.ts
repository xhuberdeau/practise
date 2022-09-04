import Expression from "./expression";

class ExpressionNumberExtractor {
  private static INTERNAL_SEPARATOR = ",";
  private static DEFAULT_NUMBER_SEPARATORS = [this.INTERNAL_SEPARATOR, "\n"];

  static extractNumbers(expression: Expression): number[] {
    const expressionWithOneSeparator =
      this.replaceAllSeparatorsByInternalSeparator(
        expression.getExpression(),
        expression.getCustomSeparator()
      );

    return expressionWithOneSeparator
      .split(this.INTERNAL_SEPARATOR)
      .map((number: string) => parseFloat(number));
  }

  private static replaceAllSeparatorsByInternalSeparator(
    expression: string,
    customSeparator: string | undefined
  ): string {
    let separators = [...this.DEFAULT_NUMBER_SEPARATORS];
    if (customSeparator !== undefined) {
      separators = separators.concat(customSeparator);
    }

    let finalExpression = expression;

    separators.forEach((separator: string) => {
      finalExpression = finalExpression.replaceAll(
        separator,
        this.INTERNAL_SEPARATOR
      );
    });

    return finalExpression;
  }
}

export default ExpressionNumberExtractor;
