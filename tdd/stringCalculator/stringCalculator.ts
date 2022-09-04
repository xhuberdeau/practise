class StringCalculator {
  add(value: string): string {
    if (value === "") return "0";

    const sum = Number(
      value
        .split(",")
        .reduce((acc: number, value: string) => acc + parseFloat(value), 0)
        .toFixed(2)
    );

    return sum.toString();
  }
}

export default StringCalculator;
