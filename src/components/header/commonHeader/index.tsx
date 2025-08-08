import { FONT } from '../../../styles';

type CommonHederTextType = {
  value: string | undefined;
};
export const CommonHederText = ({ value = '' }: CommonHederTextType) => {
  return <span className={FONT.headerTextSmall}>{value}</span>;
};
