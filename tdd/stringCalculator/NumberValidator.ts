class NumberObject {
  private number: number;
  constructor(number: number) {
    this.number = number;
  }

  isValid(): null | string {
    if (this.number < 0) {
      return `Negative not allowed : ${this.number}`;
    }

    return null;
  }

  getValue(): number {
    return this.number;
  }
}

export default NumberObject;
