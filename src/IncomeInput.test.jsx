import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import IncomeInput from "./IncomeInput";

describe("IncomeInput", () => {
  it("renders correctly", async () => {
    const { findByText } = render(<IncomeInput handleFormSubmit={() => {}} />);
    const label = await waitForElement(() => findByText("Gross Income"));
    expect(label).toBeDefined();
  });

  it("calls the handleFormSubmit prop when the form is submitted", async () => {
    const handleFormSubmitMock = jest.fn();
    const { findByText, findByLabelText } = render(
      <IncomeInput handleFormSubmit={handleFormSubmitMock} />
    );
    const input = await waitForElement(() => findByLabelText("Gross Income"));
    fireEvent.change(input, { target: { value: "130000" } });

    const button = await waitForElement(() => findByText("Submit"));
    fireEvent.click(button);
    expect(handleFormSubmitMock).toHaveBeenCalledWith(130000);
  });
});
