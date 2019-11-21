import React, { useState } from "react";
import PropTypes from "prop-types";

const IncomeInput = ({ handleFormSubmit }) => {
  const [grossIncome, setGrossIncome] = useState(0);

  const handleChange = e => {
    const { value } = e.target;
    setGrossIncome(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    handleFormSubmit(grossIncome);
  };

  return (
    <form action="/" method="POST" onSubmit={onFormSubmit}>
      <label htmlFor="gross">Gross Income</label>
      <input
        type="number"
        id="gross"
        name="gross"
        value={grossIncome}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

IncomeInput.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default IncomeInput;
