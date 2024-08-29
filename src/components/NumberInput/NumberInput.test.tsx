import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumberInput from "."; // Adjust the import path accordingly

describe("NumberInput Component", () => {
  const mockSetTotalNumberOfPages = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(
      <NumberInput
        totalNumberOfPages=""
        setTotalNumberOfPages={mockSetTotalNumberOfPages}
      />
    );
    expect(
      screen.getByLabelText(/📚 Choose How Many Pages to Keep/i)
    ).toBeInTheDocument();
  });

  test("calls setTotalNumberOfPages on valid input", () => {
    render(
      <NumberInput
        totalNumberOfPages=""
        setTotalNumberOfPages={mockSetTotalNumberOfPages}
      />
    );

    const input = screen.getByLabelText(
      /📚 Choose How Many Pages to Keep/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "50" } });

    expect(mockSetTotalNumberOfPages).toHaveBeenCalledWith("50");
    expect(
      screen.queryByText(/Please provide a number between 1 and 100/i)
    ).toBeNull();
  });

  test("handles empty input correctly", () => {
    render(
      <NumberInput
        totalNumberOfPages=""
        setTotalNumberOfPages={mockSetTotalNumberOfPages}
      />
    );

    const input = screen.getByLabelText(
      /📚 Choose How Many Pages to Keep/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
  });
});
