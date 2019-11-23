import calculateFederalTax from "./calculateFederalTax";

describe("calculateFederalTax", () => {
  it("applies a 15% tax rate on a grossIncome less than 47360", () => {
    const result = calculateFederalTax(40000);
    expect(result).toEqual(40000 * 0.15);
  });

  it("applies a 20.5% marginal tax rate on income > 47360 && < 95259", () => {
    const result = calculateFederalTax(80000);
    // (grossIncome - baseAmount) * taxBracket + previousTaxAmount;
    // (80000 - 47630) * .205 + 7145 = 13780.85
    expect(result).toEqual(13780.85);
  });

  it("applies a 26% marginal tax rate on income > 95259 && < 147667", () => {
    const result = calculateFederalTax(130000);
    // (grossIncome - baseAmount) * taxBracket + previousTaxAmount;
    // (130000 - 95259) * .26 + 16908 = 25940.66
    expect(result).toEqual(25940.66);
  });

  it("applies a 29% marginal tax rate on income > 147667 && <= 210371", () => {
    const result = calculateFederalTax(195000);
    // (grossIncome - baseAmount) * taxBracket + previousTaxAmount;
    // (195000 - 147667) * .29 + 30535 = 44261.57
    expect(result).toEqual(44261.57);
  });

  it("applies a 33% marginal tax rate on income > 210371", () => {
    const result = calculateFederalTax(999999);
    // (grossIncome - baseAmount) * taxBracket + previousTaxAmount;
    // (999999 - 210371) * .33 + 48719 = 309296.24
    expect(result).toEqual(309296.24);
  });

  it("returns 0 if an error occurs", () => {
    expect(() => {
      calculateFederalTax("BAD DATA");
    }).toThrow();
  });
});
