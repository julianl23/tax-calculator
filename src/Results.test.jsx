import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import Results from "./Results";

const defaultProps = {
  grossIncome: 130000,
  calculatedTaxes: 15000,
  handleBack: jest.fn(),
};

describe("Results", () => {
  it("renders correctly", async () => {
    const { findByText } = render(<Results {...defaultProps} />);
    // Using a regex to find the text here as the number formatters seem to put the
    // country code in front of the currency in the output here, but not in the browser.
    const grossIncomeLabel = await waitForElement(() =>
      findByText(/\$130,000/)
    );
    const taxesLabel = await waitForElement(() => findByText(/\$15,000/));
    expect(grossIncomeLabel).toBeDefined();
    expect(taxesLabel).toBeDefined();
  });

  it("calls the handleBack prop when the form is submitted", async () => {
    const handleBackMock = jest.fn();
    const { findByText } = render(
      <Results {...defaultProps} handleBack={handleBackMock} />
    );
    const button = await waitForElement(() =>
      findByText("Enter a new gross income")
    );
    fireEvent.click(button);
    expect(handleBackMock).toHaveBeenCalled();
  });
});
