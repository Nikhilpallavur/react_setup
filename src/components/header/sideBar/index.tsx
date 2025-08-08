import { memo } from 'react';
import { ICONS } from '../../../assets';
import { ROUTE_NAME } from '../../../constants';
import { FONT } from '../../../styles';
import { useCurrentTheme } from '../../../lib/redux/hooks';
type propsType = {
  expanded: boolean;
  onClickExpand: () => void;
  isMobileScreen?: boolean;
  onclickTab: (path: string) => void;
};
export const SideBarHeader = memo((props: propsType) => {
  const appTheme = useCurrentTheme();
  const { expanded, onClickExpand, onclickTab, isMobileScreen } = props;
  return (
    <div className={`relative flex w-full justify-between rounded-md px-1 py-2.5 text-slate-200`}>
      <button
        onClick={() => onclickTab(ROUTE_NAME.dashboard)}
        className={`flex items-center gap-x-2`}
      >
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
          <img src={appTheme.image} alt="" className={`h-5 w-5 object-contain`} />
        </div>
        <span
          className={`line-clamp-1 ${FONT.headerTextNormal} font-semibold text-white ${!isMobileScreen && !expanded ? 'w-0' : 'w-auto'} duration-200`}
          style={{
            color: appTheme.sideBarFontColor,
          }}
        >
          {appTheme?.name ?? ''}
        </span>
      </button>
      {isMobileScreen ? (
        expanded ? (
          <button onClick={onClickExpand}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <button onClick={onClickExpand}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )
      ) : (
        <div
          onClick={onClickExpand}
          className="absolute right-[-1.35rem] top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600"
          style={{ backgroundColor: appTheme.activeButtonBgColor }}
        >
          <img
            src={ICONS.back}
            alt=""
            className={`aspect-square w-2 object-contain ${expanded ? '' : 'rotate-180'} duration-1000`}
          />
        </div>
      )}
    </div>
  );
});
