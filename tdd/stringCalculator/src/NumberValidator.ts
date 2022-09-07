class NumberObject {
  constructor(private number: number) {}

  isPositive(): boolean {
    return this.number >= 0;
  }

  getValue(): number {
    return this.number;
  }
}

export default NumberObject;
