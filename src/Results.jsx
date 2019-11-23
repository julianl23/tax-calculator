import React from "react";
import PropTypes from "prop-types";

import {
  ResultsSection,
  ResultsHeading,
  ResultItem,
  TaxRateAside,
  AsideHeading,
  BackButton,
  TaxResults,
  AsideList,
} from "./Results.layout";

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

  return (
    <ResultsSection>
      <TaxResults>
        <ResultsHeading>Your gross income:</ResultsHeading>
        <ResultItem>{formattedGross}</ResultItem>

        <ResultsHeading>Your federal tax payment for 2019:</ResultsHeading>
        <ResultItem>{formattedTaxes}</ResultItem>

        <ResultsHeading>Effective tax rate:</ResultsHeading>
        <ResultItem>{effectiveTaxRate}</ResultItem>
      </TaxResults>

      <TaxRateAside>
        <AsideHeading>About Federal Tax Rates For 2019</AsideHeading>
        <p>Canadian federal tax rates for 2019 are calculated as follows:</p>
        <AsideList>
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
        </AsideList>
      </TaxRateAside>
      <BackButton type="button" onClick={handleBack}>
        Enter a new gross income
      </BackButton>
    </ResultsSection>
  );
};

Results.propTypes = {
  calculatedTaxes: PropTypes.number.isRequired,
  grossIncome: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default Results;
