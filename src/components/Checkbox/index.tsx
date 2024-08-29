"use client";
import React, { ChangeEvent } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="custom-checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor="custom-checkbox"
        className={`flex items-center justify-center w-6 h-6 border rounded-sm cursor-pointer ${
          checked
            ? "bg-light-blue-500 border-light-blue-500"
            : "border-gray-300"
        }`}
        style={{ position: "relative" }}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white absolute"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ left: "4px", top: "2px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
