"use client";
import React from "react";
import styles from "./MultiSelectMenu.module.css";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectMenuProps {
  options: Option[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

const MultiSelectMenu: React.FC<MultiSelectMenuProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  const handleSelect = (value: string) => {
    let newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    // If all individual options are selected, include 'All pages'
    if (newSelectedValues.length === options.length) {
      newSelectedValues = options.map((option) => option.value);
    }

    onChange(newSelectedValues);
  };

  const handleDone = () => {
    alert(`Selected values: ${selectedValues.join(", ")}`);
  };

  return (
    <div
      className={`${styles.container} w-[370px] h-[326px] p-2 border border-t-0 border-gray-300 rounded-t-lg shadow-md`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center h-[42px] px-4 py-2">
          <div className="flex-1 text-left border-gray-300">All pages</div>
          <input
            type="checkbox"
            checked={selectedValues.length === options.length}
            onChange={() =>
              handleSelect(
                selectedValues.length === options.length ? "" : "All"
              )
            }
            className={`${styles.customCheckbox} bg-blue-500 cursor-pointer ml-2`}
          />
        </div>
        <hr className="border-gray-300 w-11/12 mx-auto my-2" />
        <div
          className="flex flex-col min-h-[164px] overflow-y-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "gray lightgray" }}
        >
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center px-4 py-2 cursor-pointer"
            >
              <span className="mr-2 flex-1 text-left">{option.label}</span>
              <input
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => handleSelect(option.value)}
                className={`${styles.customCheckbox} bg-blue-500 ml-2`}
              />
            </label>
          ))}
        </div>
        <hr className="border-gray-300 w-11/12 mx-auto my-2" />
        <div className="w-full py-[10px] px-[15px]">
          <button
            onClick={handleDone}
            className={`${styles.doneButton} px-4 py-2 w-full rounded-md`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectMenu;
