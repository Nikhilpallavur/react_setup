import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  allowClear?: boolean;
  containerClassName?: string;
}

export const CustomInput: React.FC<CustomInputProps> = (props) => {
  const {
    suffix,
    value,
    onChange,
    allowClear = false,
    containerClassName,
    disabled = false,
  } = props;
  const handleClear = () => {
    onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={`flex w-full flex-row items-center justify-center ${containerClassName}`}>
      <input
        disabled={disabled}
        {...props}
        onChange={onChange}
        className={`w-full rounded-button-radius border border-gray-300 p-2 text-black outline-none ${props?.className}`}
      />
      {suffix && (
        <div className={`absolute right-5 top-5 flex items-center ${disabled ? '' : 'hidden'}`}>
          {suffix}
        </div>
      )}
      {allowClear && value && !disabled && (
        <div className="absolute right-6 flex items-center justify-center">
          <div className="justify-center rounded-full bg-slate-300/30 px-1">
            <button onClick={handleClear}>🅧</button>
          </div>
        </div>
      )}
    </div>
  );
};
