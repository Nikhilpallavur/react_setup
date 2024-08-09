// components/CustomButton.tsx

import React, { ButtonHTMLAttributes } from 'react';
import { FONT } from '../../../../styles';
interface LinkButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  color?: string;
  showIcon?: boolean;
  textClassName?: string;
}
const LinkButton: React.FC<LinkButtonType> = (props) => {
  const { title, onClick, color = '#2563eb', showIcon = false, textClassName = '' } = props;
  return (
    <button {...props} onClick={onClick}>
      <div className="text-primary-100 flex items-center space-x-2 text-lg font-semibold">
        <span className={`text-blue-700 ${FONT.contentText} ${textClassName}`}>{title}</span>
        {showIcon && (
          <svg
            className="h-6 w-6 rotate-45 transform"
            fill="none"
            stroke={color}
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default LinkButton;
