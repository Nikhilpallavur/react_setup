import React, { InputHTMLAttributes, memo } from 'react';
import { FONT } from '../../../../styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  suffix?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  allowClear?: boolean;
  containerClassName?: string;
}

export const CustomInput: React.FC<CustomInputProps> = memo((props) => {
  const {
    label,
    suffix,
    value,
    onChange,
    allowClear = false,
    containerClassName,
    disabled = false,
    id,
    ...restProps
  } = props;

  const handleClear = () => {
    onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className={`${FONT.contentText} mb-1 block text-gray-700`}>
          {label}
        </label>
      )}

      <div className='relative flex items-center'>
        <input
          id={id}
          disabled={disabled}
          {...restProps}
          value={value}
          onChange={onChange}
          className={`w-full rounded-button-radius border border-gray-300 p-2 text-black outline-none ${props?.className}`}
        />

        {suffix && (
          <div className={`absolute right-3 flex items-center ${disabled ? '' : 'hidden'}`}>
            {suffix}
          </div>
        )}

        {allowClear && value && !disabled && (
          <div className='absolute right-10 flex items-center justify-center'>
            <div className='rounded-full bg-slate-300/30 px-1'>
              <button onClick={handleClear}>🅧</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
