import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  innerContainerClassName?: string;
  outerContainerClassName?: string;
}

export const FullScreenModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  innerContainerClassName = '',
  outerContainerClassName = '',
}) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${outerContainerClassName}`}
      onClick={handleBackgroundClick}
    >
      <div className={`relative rounded bg-white shadow-lg ${innerContainerClassName}`}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
