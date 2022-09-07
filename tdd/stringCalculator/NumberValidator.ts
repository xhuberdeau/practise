class NumberObject {
  private number: number;
  constructor(number: number) {
    this.number = number;
  }

  isPositive(): boolean {
    return this.number >= 0;
  }

  getValue(): number {
    return this.number;
  }
}

export default NumberObject;
