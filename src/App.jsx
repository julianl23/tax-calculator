import React, { useState } from "react";
import { hot } from "react-hot-loader/root";

import GlobalStyle from "./GlobalStyle";
import Navbar from "./Navbar";
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
    <>
      <GlobalStyle />
      <Navbar />
      <section>
        {!displayResults && <IncomeInput handleFormSubmit={handleFormSubmit} />}
        {displayResults && (
          <Results
            calculatedTaxes={calculatedTaxes}
            grossIncome={grossIncome}
            handleBack={handleBack}
          />
        )}
      </section>
    </>
  );
};

export default hot(App);
