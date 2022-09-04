class StringCalculator {
  CUSTOM_SEPARATORS_DECLARATION_START = "//";
  INTERNAL_SEPARATOR = ",";
  DEFAULT_NUMBER_SEPARATORS = [this.INTERNAL_SEPARATOR, "\n"];

  add(...expressions: [string]): string {
    let total = 0;

    expressions
      .filter((expression: string) => expression !== "")
      .map(
        (
          expression: string
        ): [customSeparator: string | undefined, expression: string] => [
          this.extractCustomSeparator(expression),
          this.extractExpression(expression),
        ]
      )
      .map(([customSeparator, expression]) =>
        this.replaceAllSeparatorsByInternalSeparator(
          expression,
          customSeparator
        )
      )
      .map((expression: string) => this.extractNumbers(expression))
      .forEach((numbers: number[]) => {
        total += this.sumNumbers(numbers);
      });

    return total.toString();
  }

  private extractExpression(expression: string): string {
    if (expression.startsWith(this.CUSTOM_SEPARATORS_DECLARATION_START)) {
      return expression.substring(expression.indexOf("\n") + 1);
    }

    return expression;
  }

  private extractCustomSeparator(expression: string): string | undefined {
    if (expression.startsWith(this.CUSTOM_SEPARATORS_DECLARATION_START)) {
      const separatorStartIndex =
        expression.indexOf(this.CUSTOM_SEPARATORS_DECLARATION_START) +
        this.CUSTOM_SEPARATORS_DECLARATION_START.length;
      const separatorEndIndex = expression.indexOf("\n");

      return expression.substring(separatorStartIndex, separatorEndIndex);
    }

    return undefined;
  }

  private extractNumbers(expression: string): number[] {
    return expression
      .split(this.INTERNAL_SEPARATOR)
      .map((number: string) => parseFloat(number));
  }

  private replaceAllSeparatorsByInternalSeparator(
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

  private sumNumbers(numbers: number[]): number {
    return Number(
      numbers
        .reduce((acc: number, number: number) => acc + number, 0)
        .toFixed(2)
    );
  }
}

export default StringCalculator;
