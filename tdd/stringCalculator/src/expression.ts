class Expression {
  CUSTOM_SEPARATORS_DECLARATION_START = "//";

  constructor(private expression: string) {}

  getCustomSeparator(): string | undefined {
    if (this.expression.startsWith(this.CUSTOM_SEPARATORS_DECLARATION_START)) {
      const separatorStartIndex =
        this.expression.indexOf(this.CUSTOM_SEPARATORS_DECLARATION_START) +
        this.CUSTOM_SEPARATORS_DECLARATION_START.length;
      const separatorEndIndex = this.expression.indexOf("\n");

      return this.expression.substring(separatorStartIndex, separatorEndIndex);
    }

    return undefined;
  }

  getExpression(): string {
    let expression = undefined;
    if (this.expression.startsWith(this.CUSTOM_SEPARATORS_DECLARATION_START)) {
      expression = this.expression.substring(this.expression.indexOf("\n") + 1);
    } else {
      expression = this.expression;
    }

    return expression === "" ? "0" : expression;
  }
}

export default Expression;
