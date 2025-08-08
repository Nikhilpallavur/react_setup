import { ButtonHTMLAttributes, memo } from 'react';
import { Spin } from '../..';
import { BUTTON_CLASS_NAME } from '../../../../styles';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  iconForBtnContainerByProps?: React.CSSProperties;
  iconForBtn?: string;
  loading?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = memo(props => {
  return (
    <button
      {...props}
      onClick={props?.loading ? undefined : props?.onClick}
      disabled={props?.disabled ?? false}
      className={`w-full ${BUTTON_CLASS_NAME.commonButtonStyles} ${props?.className}`}
      style={{ cursor: props?.disabled ? 'no-drop' : 'pointer' }}
    >
      {!!props?.iconForBtn && (
        <img
          src={props?.iconForBtn}
          width={50}
          height={50}
          alt="image"
          className={`mr-2 h-4 w-4 ${props?.iconForBtnContainerByProps}`}
        />
      )}
      {props?.loading ? <Spin width={20} /> : (props?.buttonText ?? '')}
    </button>
  );
});
