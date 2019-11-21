import React, { useState } from "react";
import { hot } from "react-hot-loader/root";

import IncomeInput from "./IncomeInput";
import Results from "./Results";
import calculateFederalTax from "./calculateFederalTax";

const App = () => {
  const [calculatedTaxes, setCalculatedTaxes] = useState(0);
  const [grossIncome, setGrossIncome] = useState(0);
  const [displayResults, setDisplayResults] = useState(false);

  const handleFormSubmit = submittedGrossIncome => {
    setGrossIncome(submittedGrossIncome);
    setCalculatedTaxes(calculateFederalTax(submittedGrossIncome));
    setDisplayResults(true);
  };

  const handleBack = () => {
    setDisplayResults(false);
  };

  return (
    <section>
      <h1>Canadian Federal Tax Calculator</h1>
      {!displayResults && <IncomeInput handleFormSubmit={handleFormSubmit} />}
      {displayResults && (
        <Results
          calculatedTaxes={calculatedTaxes}
          grossIncome={grossIncome}
          handleBack={handleBack}
        />
      )}
    </section>
  );
};

export default hot(App);
