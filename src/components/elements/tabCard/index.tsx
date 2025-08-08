import { memo, useState } from 'react';

type propsType = {
  image: string;
  name: string;
  active: boolean;
  expanded: boolean;
  onClickTab: () => void;
  isMobileScreen: boolean;
};
export const TabCard = memo(
  ({ active, expanded, image, name, onClickTab, isMobileScreen }: propsType) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <button
        onClick={onClickTab}
        className={`relative mb-2 min-h-8 w-full rounded-md px-3 text-slate-200 duration-150 ${
          active
            ? 'hover:text-cyan bg-slate-800 text-slate-300 hover:bg-slate-500'
            : 'hover:bg-slate-500'
        }`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className={`flex min-h-5 items-center gap-x-3 py-2.5 duration-150`}>
          <img src={image} alt="" className={`aspect-square w-4 object-contain`} />

          <span
            className={`${expanded ? 'h-full' : 'h-0'} line-clamp-1 text-sm font-normal duration-200`}
          >
            {name}
          </span>

          {!isMobileScreen && !expanded && showTooltip && (
            <div className="absolute left-16 w-max rounded-md bg-black p-2">
              <span className={`line-clamp-1 text-sm font-normal`}>{name}</span>
            </div>
          )}
        </div>
      </button>
    );
  }
);
