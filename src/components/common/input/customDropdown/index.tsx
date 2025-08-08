import React, { useState } from 'react';
import { AnyObjectType } from '../../../../types';

interface CustomDropdownProps<T> {
  options: T[];
  selectedOption: T | null;
  onSelectOption: (option: T) => void;
  displayProperty: keyof T;
}

const CustomDropdown = <T extends AnyObjectType>({
  options,
  selectedOption,
  onSelectOption,
  displayProperty,
}: CustomDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: T) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex w-full items-center justify-between rounded border bg-white px-4 py-2 font-semibold text-gray-800"
      >
        <span>
          {selectedOption
            ? (selectedOption[displayProperty] as React.ReactNode)
            : 'Select an option'}
        </span>
        <svg
          className="ml-2 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10 12l-6-6 1.5-1.5L10 9.999 16.5 3.5 18 5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="scroll absolute z-50 mt-2 max-h-80 w-full overflow-scroll rounded-lg bg-white shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {option[displayProperty] as React.ReactNode}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
