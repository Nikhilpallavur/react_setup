import React from 'react';

interface CommonDropdownProps {
  label?: string;
  options: string[] | { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export const CommonDropdown: React.FC<CommonDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  required = false,
}) => {
  const renderOptions = () => {
    return options.map((option, index) => {
      if (typeof option === 'string') {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      }
      return (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      );
    });
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className='mb-1 text-sm font-medium text-gray-700'>
          {label}
          {required && <span className='text-red-500'> *</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='focus:ring-primary rounded-button-radius border border-gray-300 p-2 px-4 py-2 text-sm text-black focus:outline-none focus:ring-2'
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {renderOptions()}
      </select>
    </div>
  );
};
