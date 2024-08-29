"use client";
import React, { useState, ChangeEvent } from "react";

interface NumericInput {
  totalNumberOfPages: string;
  setTotalNumberOfPages: (totalNumberOfPages: string) => void;
}

const NumberInput = ({
  totalNumberOfPages,
  setTotalNumberOfPages,
}: NumericInput) => {
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const numberValue = newValue === "" ? "" : Number(newValue);

    if (newValue === "" || (+numberValue >= 1 && +numberValue <= 100)) {
      setTotalNumberOfPages(newValue);
      setError("");
    } else {
      setError("Please enter a number between 1 and 100.");
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="pages-input"
        className="mb-2 font-bold text-lg text-gray-700"
      >
        Enter number of pages you want to keep
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
