"use client";
import React, { useState, ChangeEvent } from "react";

/**
 * Props for the NumberInput component.
 *
 * @interface NumericInput
 * @property {string} totalNumberOfPages - The current value of the number input.
 * @property {(totalNumberOfPages: string) => void} setTotalNumberOfPages - Callback function to set the value of the number input.
 * @property {string} error - The current value of error message.
 * @property {(error: string) => void} setError - Callback function to set the error.
 */
interface NumericInput {
  totalNumberOfPages: string;
  setTotalNumberOfPages: (totalNumberOfPages: string) => void;
  error?: string;
  setError?: (error: string) => void;
}

/**
 * NumberInput component allows users to input a number between 1 and 100.
 * It validates the input and displays an error message if the input is invalid.
 *
 * @component
 * @example
 * return (
 *   <NumberInput
 *     totalNumberOfPages="10"
 *     setTotalNumberOfPages={(value) => console.log(value)}
 *   />
 * )
 */
const NumberInput = ({
  totalNumberOfPages,
  setTotalNumberOfPages,
  error,
  setError,
}: NumericInput) => {
  /**
   * Handles the change event of the number input.
   * Validates the input value and updates the state or displays an error message.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event of the number input.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const numberValue = newValue === "" ? "" : Number(newValue);

    if (newValue === "" || (+numberValue >= 1 && +numberValue <= 100)) {
      setTotalNumberOfPages(newValue);
      if (setError) setError("");
    } else {
      if (setError) setError("Please provide a number between 1 and 100.");
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="pages-input"
        className="mb-2 font-bold text-lg text-gray-700"
      >
        📚 Choose How Many Pages to Keep
      </label>
      <input
        type="number"
        id="pages-input"
        value={totalNumberOfPages}
        onChange={handleChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
        }`}
        min="1"
        max="100"
        required
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default NumberInput;
