// 15% on the first $47,630 of taxable income, plus
// 20.5% on the next $47,629 of taxable income (on the portion of taxable income over 47,630 up to $95,259), plus
// 26% on the next $52,408 of taxable income (on the portion of taxable income over $95,259 up to $147,667), plus
// 29% on the next $62,704 of taxable income (on the portion of taxable income over 147,667 up to $210,371), plus
// 33% of taxable income over $210,371

// Base amounts
// 0
// 47,630
// 95,259
// 147,667
// 210,371

// Previous Tax Amounts
// 0
// 7145
// 1690
// 30535
// 48719

const taxBrackets = [
  {
    baseAmount: 0,
    previousTaxAmount: 0,
    taxBracket: 0.15,
  },
  {
    baseAmount: 47630,
    previousTaxAmount: 7145,
    taxBracket: 0.205,
  },
  {
    baseAmount: 95259,
    previousTaxAmount: 16908,
    taxBracket: 0.26,
  },
  {
    baseAmount: 147667,
    previousTaxAmount: 30535,
    taxBracket: 0.29,
  },
  {
    baseAmount: 210371,
    previousTaxAmount: 48719,
    taxBracket: 0.33,
  },
];

const calculateTaxAmount = ({
  grossIncome,
  baseAmount,
  previousTaxAmount,
  taxBracket,
}) => {
  const totalTaxAmount =
    (grossIncome - baseAmount) * taxBracket + previousTaxAmount;
  return totalTaxAmount.toFixed(2);
};

const calculateFederalTax = income => {
  const grossIncome = parseInt(income, 10);
  let userTaxBracketIndex = null;

  if (grossIncome <= 47360) {
    userTaxBracketIndex = 0;
  } else if (grossIncome > 47360 && grossIncome < 95259) {
    userTaxBracketIndex = 1;
  } else if (grossIncome > 95259 && grossIncome < 147667) {
    userTaxBracketIndex = 2;
  } else if (grossIncome > 147667 && grossIncome <= 210371) {
    userTaxBracketIndex = 3;
  } else if (grossIncome > 210371) {
    userTaxBracketIndex = 4;
  }

  const taxAmount = calculateTaxAmount({
    grossIncome,
    ...taxBrackets[userTaxBracketIndex],
  });

  // TODO: Why does this come back as a string?
  return taxAmount;
};

export default calculateFederalTax;
