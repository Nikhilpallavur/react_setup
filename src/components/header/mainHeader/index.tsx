import { FONT, PADDING } from '../../../styles';

type HeaderTypeProps = {
  title?: string;
  className?: string;
};
export const MainHeader = ({ title = '', className = '' }: HeaderTypeProps) => {
  return (
    <div
      className={`mb-5 flex min-h-[6vh] w-full items-center justify-between rounded-b-xl ${PADDING.horizontalPadding} shadow-header ${className}`}
    >
      <span className={`${FONT.headerTextNormal}`}>{title}</span>
      <div></div>
    </div>
  );
};
