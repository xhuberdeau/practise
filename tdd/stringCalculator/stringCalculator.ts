class StringCalculator {
  INTERNAL_SEPARATOR = ",";
  NUMBER_SEPARATORS = [this.INTERNAL_SEPARATOR, "\n"];

  add(...expressions: [string]): string {
    let total = 0;

    expressions
      .filter((expression: string) => expression !== "")
      .map((expression: string) =>
        this.replaceAllSeparatorsByInternalSeparator(expression)
      )
      .map((expression: string) => this.extractNumbers(expression))
      .forEach((numbers: number[]) => {
        total += this.sumNumbers(numbers);
      });

    return total.toString();
  }

  private extractNumbers(expression: string): number[] {
    return expression
      .split(this.INTERNAL_SEPARATOR)
      .map((number: string) => parseFloat(number));
  }

  private replaceAllSeparatorsByInternalSeparator(expression: string): string {
    return expression.replace(
      new RegExp(this.NUMBER_SEPARATORS.join("|"), "gi"),
      this.INTERNAL_SEPARATOR
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
