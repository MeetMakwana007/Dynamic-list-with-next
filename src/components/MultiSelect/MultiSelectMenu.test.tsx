import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MultiSelectMenu from ".";
import { options } from "@mocks/options";

describe("MultiSelectMenu", () => {
  // Test rendering of component
  test("renders component with options", () => {
    const { container } = render(
      <MultiSelectMenu
        options={options}
        selectedValues={[]}
        onChange={() => {}}
      />
    );
    expect(container).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  // Test selecting individual options
  test("selects options correctly", () => {
    const handleChange = jest.fn();
    render(
      <MultiSelectMenu
        options={options}
        selectedValues={[]}
        onChange={handleChange}
      />
    );

    // Click on the first option
    fireEvent.click(screen.getByLabelText("Page 1"));
    expect(handleChange).toHaveBeenCalledWith(["page1"]);
  });

  // Test the "Done" button functionality
  test('shows notification on "Done" button click', () => {
    render(
      <MultiSelectMenu
        options={options}
        selectedValues={["page1"]}
        onChange={() => {}}
      />
    );

    const doneButton = screen.getByText("Done");
    fireEvent.click(doneButton);

    // Assuming you are using toast notifications
    expect(
      screen.getByText(/Great choice! You've selected the following pages/)
    ).toBeInTheDocument();
  });
});
