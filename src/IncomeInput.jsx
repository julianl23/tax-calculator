import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  StyledSection,
  StyledForm,
  StyledLabel,
  StyledInput,
} from "./IncomeInput.layout";
import Button from "./Button";

const IncomeInput = ({ handleFormSubmit }) => {
  const [grossIncome, setGrossIncome] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setGrossIncome(value ? parseFloat(value) : "");
  };

  const onFormSubmit = e => {
    e.preventDefault();
    handleFormSubmit(grossIncome);
  };

  return (
    <StyledSection>
      <StyledForm action="/" method="POST" onSubmit={onFormSubmit}>
        <StyledLabel htmlFor="gross">Gross Income</StyledLabel>
        <StyledInput
          type="number"
          id="gross"
          name="gross"
          value={grossIncome}
          onChange={handleChange}
          maxlength="15"
        />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </StyledSection>
  );
};

IncomeInput.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default IncomeInput;
