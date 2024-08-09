import { ButtonHTMLAttributes } from 'react';
import { Spin } from '../..';
import { BUTTON_CLASS_NAME } from '../../../../styles';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  onClickBtn?: () => void;
  disabled?: boolean;
  buttonContainerClassName?: string;
  iconForBtnContainerByProps?: React.CSSProperties;
  iconForBtn?: string;
  loading?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
      onClick={props?.loading ? undefined : props?.onClickBtn}
      disabled={props?.disabled ?? false}
      className={`${BUTTON_CLASS_NAME.commonButtonStyles} ${props?.buttonContainerClassName}`}
      style={{ cursor: props?.disabled ? 'no-drop' : 'pointer' }}
      {...props}
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
      {props?.loading ? <Spin width={20} /> : props?.buttonText ?? ''}
    </button>
  );
};
