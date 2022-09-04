class StringCalculator {
  add(...values: [string]): string {
    let total = 0;

    values.forEach((value: string) => {
      if (value !== "") {
        total += this.sumCommaSeparatedNumbers(value);
      }
    });

    return total.toString();
  }

  private sumCommaSeparatedNumbers(numbers: string): number {
    return Number(
      numbers
        .split(",")
        .reduce((acc: number, value: string) => acc + parseFloat(value), 0)
        .toFixed(2)
    );
  }
}

export default StringCalculator;
