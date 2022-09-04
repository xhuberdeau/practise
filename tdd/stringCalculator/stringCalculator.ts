class StringCalculator {
  NUMBER_SEPARATORS = [",", "\n"];

  add(...values: [string]): string {
    let total = 0;

    values.forEach((value: string) => {
      if (value !== "") {
        total += this.sumNumbers(this.extractNumbersFromString(value));
      }
    });

    return total.toString();
  }

  private sumNumbers(numbers: string[]): number {
    return Number(
      numbers
        .reduce((acc: number, value: string) => acc + parseFloat(value), 0)
        .toFixed(2)
    );
  }

  private extractNumbersFromString(numbers: string): string[] {
    let extractedNumbers: string[] = [numbers];

    this.NUMBER_SEPARATORS.forEach((separator: string) => {
      extractedNumbers = extractedNumbers.reduce(
        (acc: string[], element: string) => {
          return [...acc, ...element.split(separator)];
        },
        []
      );
    }, []);

    return extractedNumbers;
  }
}

export default StringCalculator;
