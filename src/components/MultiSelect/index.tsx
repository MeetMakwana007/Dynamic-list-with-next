"use client";
import React from "react";
import styles from "./MultiSelectMenu.module.css";
import { ToastContainer, toast } from "react-toastify";

/**
 * Option type representing each option in the MultiSelectMenu.
 *
 * @interface Option
 * @property {string} value - The unique value for the option.
 * @property {string} label - The display label for the option.
 */
interface Option {
  value: string;
  label: string;
}

/**
 * Props for the MultiSelectMenu component.
 *
 * @interface MultiSelectMenuProps
 * @property {Option[]} options - Array of options to display in the menu.
 * @property {string[]} selectedValues - Array of currently selected option values.
 * @property {(pageNumber: string) => void} onPageNumberChange - Callback function to handle changes in number of pages input.
 * @property {(selectedValues: string[]) => void} onChange - Callback function to handle changes in selected options.
 */
interface MultiSelectMenuProps {
  options: Option[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  onClear?: () => void;
}

/**
 * MultiSelectMenu component allows users to select multiple options and provides a button to show a notification with the currently selected options.
 *
 * @component
 * @example
 * return (
 *   <MultiSelectMenu
 *     options={[{ value: 'page1', label: 'Page 1' }, { value: 'page2', label: 'Page 2' }]}
 *     selectedValues={['page1']}
 *     onPageNumberChange={(pageNumber) => console.log(pageNumber)}
 *     onChange={(values) => console.log(values)}
 *   />
 * )
 */
const MultiSelectMenu: React.FC<MultiSelectMenuProps> = ({
  options,
  onClear,
  selectedValues,
  onChange,
}) => {
  /**
   * Handles the selection of individual options.
   * Updates the selected values based on the current selection.
   *
   * @param {string} value - The value of the option that was selected or deselected.
   */
  const handleSelect = (value: string) => {
    let newSelectedValues: string[] = [];

    if (value === "All") {
      // If 'All pages' is selected, either select all or deselect all
      newSelectedValues =
        selectedValues.length === options.length
          ? []
          : options.map((option) => option.value);
    } else {
      // For individual selections, update the selected values
      newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((item) => item !== value)
        : [...selectedValues, value];

      // If all individual options are selected, add 'All pages'
      if (newSelectedValues.length === options.length) {
        newSelectedValues = options.map((option) => option.value);
      }
    }

    onChange(newSelectedValues);
  };

  /**
   * Handles the click event on the 'Done' button and shows a notification with the selected options.
   */
  const handleNotificationClick = () => {
    toast.success(
      `🎉 Great choice! You've selected the following pages: ${selectedValues.join(
        ", "
      )}`
    );
    onClear?.();
  };

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 font-bold text-lg text-gray-700">
        📋 Page Selection
      </h1>
      <div
        className={`${styles.container} w-[370px] max-h-[326px] p-2 border border-t-0 border-gray-300 rounded-lg shadow-md`}
      >
        <ToastContainer />
        <div className="flex flex-col h-full">
          {options.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500 text-center">
                🚀 Oops! We don’t have any pages available yet. Enter a number
                above to reveal them! 🎯
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center h-[42px] px-4 py-2">
                <div className="flex-1 text-left border-gray-300">
                  <span>All pages</span>
                </div>
                <input
                  type="checkbox"
                  checked={Boolean(selectedValues.length === options.length)}
                  onChange={() => handleSelect("All")}
                  className={`${styles.customCheckbox} bg-blue-500 cursor-pointer ml-2`}
                />
              </div>
              <hr className="border-gray-300 w-11/12 mx-auto my-2" />
              <div
                className={`${styles.optionsContainer} flex flex-col max-h-[168px] overflow-y-auto`}
              >
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center  cursor-pointer h-[42px] px-4 py-2"
                  >
                    <span className="mr-2 flex-1 text-left">
                      {option.label}
                    </span>
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
                  disabled={!options.length}
                  onClick={handleNotificationClick}
                  className={`${styles.doneButton} px-4 py-2 w-full rounded-md`}
                >
                  Done
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectMenu;
