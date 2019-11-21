import React from "react";
import PropTypes from "prop-types";

const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

const percentageFormatter = new Intl.NumberFormat("en-CA", {
  style: "percent",
  maximumFractionDigits: 2,
});

const Results = ({ grossIncome, calculatedTaxes, handleBack }) => {
  const formattedTaxes = currencyFormatter.format(calculatedTaxes);
  const formattedGross = currencyFormatter.format(grossIncome);
  const effectiveTaxRate = percentageFormatter.format(
    calculatedTaxes / grossIncome
  );


  whats left?

  figure out why number is being coerced to string for calculating taxes
  style everything
  tests
  re-read intro to make sure you have everything

  return (
    <section>
      <h2>Your gross income:</h2>
      <p>{formattedGross}</p>
      <h2>Your federal tax payment for 2019:</h2>
      <p>{formattedTaxes}</p>
      <h2>Effective tax rate:</h2>
      <p>{effectiveTaxRate}</p>

      <aside>
        <h3>About Federal Tax Rates For 2019</h3>
        <p>Canadian federal tax rates for 2019 are calculated as follows:</p>
        <ul>
          <li>15% on the first $47,630 of taxable income, plus</li>
          <li>
            20.5% on the next $47,629 of taxable income (on the portion of
            taxable income over 47,630 up to $95,259), plus
          </li>
          <li>
            26% on the next $52,408 of taxable income (on the portion of taxable
            income over $95,259 up to $147,667), plus
          </li>
          <li>
            29% on the next $62,704 of taxable income (on the portion of taxable
            income over 147,667 up to $210,371), plus
          </li>
          <li>33% of taxable income over $210,371</li>
        </ul>
      </aside>
      <button type="button" onClick={handleBack}>
        Enter a new gross income
      </button>
    </section>
  );
};

Results.propTypes = {
  calculatedTaxes: PropTypes.number.isRequired,
  grossIncome: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default Results;
