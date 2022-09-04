class StringCalculator {
  add(value: string): string {
    if (value === "") return "0";

    return this.sumCommaSeparatedNumbers(value).toString();
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
