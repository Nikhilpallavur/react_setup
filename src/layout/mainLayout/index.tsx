import { memo, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FONT, PADDING } from '../../styles';
import { LOCAL_STORAGE_KEYS, SIDEBAR_ITEMS } from '../../constants';
import { SideBarHeader, TabCard } from '../../components';
import { fetchLocalData, storeLocalData } from '../../utils';
import { ProfileCard } from '../../components/card/ProfileCard';

import { useCurrentTheme } from '../../lib/redux/hooks';

const paddingHorizontal = 'px-3';
function ExampleDashBoard() {
  const navigate = useNavigate();
  const appTheme = useCurrentTheme();
  const isExpanded = fetchLocalData(LOCAL_STORAGE_KEYS.isExpanded);
  const selectedPath = fetchLocalData(LOCAL_STORAGE_KEYS.selectedPath);
  const [expanded, setExpanded] = useState(isExpanded === 'true');
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.matchMedia('(max-width: 640px)').matches
  );
  const [activePath, setActivePath] = useState(selectedPath || SIDEBAR_ITEMS[0].path);

  const onclickTab = (value: string) => {
    if (isMobileScreen) {
      onClickExpand();
    }
    setActivePath(value);
    storeLocalData({ storageKey: LOCAL_STORAGE_KEYS.selectedPath, value });
    navigate(value);
  };

  function handleResize() {
    if (window.matchMedia('(max-width: 640px)').matches) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }
  }
  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const onClickExpand = () => {
    setExpanded(!expanded);
    storeLocalData({ storageKey: LOCAL_STORAGE_KEYS.isExpanded, value: String(!expanded) });
  };
  return (
    <div
      className={`grid w-screen grid-rows-[3rem,auto] overflow-hidden sm:grid-rows-none ${
        expanded ? 'sm:grid-cols-[15rem,auto]' : 'sm:grid-cols-[5rem,auto]'
      } bg-main h-screen duration-300 ${FONT.contentText} bg-app-bg-color`}
      style={{
        backgroundColor: appTheme.backgroundColor,
      }}
    >
      <div className="z-50">
        <div
          className={`absolute ${isMobileScreen && expanded ? 'h-full !opacity-100' : 'h-0'} w-full sm:h-screen ${isMobileScreen ? 'overflow-hidden' : 'p-2 pr-3'} duration-300 sm:relative sm:h-auto sm:w-auto`}
        >
          <div
            className={`h-full w-full ${isMobileScreen ? '' : 'rounded-lg'} relative bg-black`}
            style={{
              backgroundColor: appTheme.sideBarBgColor,
            }}
          >
            <div className={`${paddingHorizontal}`}>
              <SideBarHeader
                expanded={expanded}
                isMobileScreen={isMobileScreen}
                onClickExpand={onClickExpand}
                onclickTab={onclickTab}
              />
            </div>
            <div className={`${paddingHorizontal} mt-6`}>
              {SIDEBAR_ITEMS.map(item => {
                return (
                  <TabCard
                    key={item?.path}
                    expanded={expanded}
                    name={item?.name}
                    image={item?.image}
                    active={activePath === item?.path}
                    onClickTab={() => onclickTab(item?.path)}
                    isMobileScreen={isMobileScreen}
                  />
                );
              })}
            </div>
            <div className={`absolute bottom-0 left-0 w-full pb-4 ${paddingHorizontal}`}>
              <ProfileCard
                isMobileScreen={isMobileScreen}
                expanded={expanded}
                onclickTab={onclickTab}
              />
            </div>
          </div>
        </div>
        <div
          className={`${isMobileScreen ? 'flex' : 'hidden'} ${expanded ? 'h-0 opacity-0' : 'h-full'} w-screen items-center justify-between overflow-hidden bg-black duration-300 ${PADDING.horizontalPadding}`}
        >
          <SideBarHeader
            expanded={expanded}
            isMobileScreen={isMobileScreen}
            onClickExpand={onClickExpand}
            onclickTab={onclickTab}
          />
        </div>
      </div>
      <div className="flex min-h-screen w-full items-center justify-center overflow-auto">
        <Outlet />
        <div id="modal-root" className="z-[100]"></div>
      </div>
    </div>
  );
}

export default memo(ExampleDashBoard);
