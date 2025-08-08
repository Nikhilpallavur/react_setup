import { memo } from 'react';
import { ICONS } from '../../../assets';
import { ROUTE_NAME } from '../../../constants';
import { fetchUserDataFromLocalStore } from '../../../utils/localStorage/dataFetching';
type propsType = {
  expanded?: boolean;
  isMobileScreen?: boolean;
  onclickTab: (path: string) => void;
};
export const ProfileCard = memo(({ expanded, isMobileScreen, onclickTab }: propsType) => {
  const userData = fetchUserDataFromLocalStore();
  return (
    <button
      onClick={() => {
        onclickTab(ROUTE_NAME.profile);
      }}
      className={`relative flex w-full justify-between overflow-hidden rounded-md py-2.5 text-slate-200`}
    >
      <div className={`${expanded ? 'gap-x-2' : ''} flex items-center`}>
        <img
          src={ICONS.profile}
          alt=''
          className={`aspect-square w-9 object-contain ${isMobileScreen && !expanded ? 'hidden' : 'block'} delay-300`}
        />

        <div className={`${expanded ? 'w-auto' : 'w-0'} flex flex-col items-start delay-300`}>
          <div>
            <span className={`line-clamp-1 text-sm font-semibold`}>{userData?.userName ?? ''}</span>
          </div>
          <div>
            <span className={`line-clamp-1 text-xs font-normal text-slate-400`}>
              {userData?.roleId?.role ?? ''}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
});
