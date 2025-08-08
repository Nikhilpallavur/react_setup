import { memo, useState } from 'react';
import { ICONS } from '../../assets';

type GroupedData<T> = {
  groupName: string;
  items: T[];
};

type AccordionProps<T> = {
  data: GroupedData<T>[];
  renderItem: (record: T, index: number) => JSX.Element;
};

const Accordion = <T extends { id: number }>({ data, renderItem }: AccordionProps<T>) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex h-max flex-col">
      {data.map((group, index) => (
        <div key={group.groupName}>
          <div
            className="flex cursor-pointer items-center justify-between border-b border-gray-300 bg-slate-800 px-4 py-2 text-white"
            onClick={() => handleToggle(index)}
          >
            {group.groupName}
            <img
              src={ICONS.back}
              className={`aspect-square h-3 ${activeIndex === index ? 'rotate-90' : '-rotate-90'} duration-700`}
            />
          </div>
          <div
            className={`${activeIndex === index ? 'h-auto' : 'h-0 overflow-hidden'} duration-300`}
          >
            {group.items.map((item, subIndex) => renderItem(item, subIndex))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MemoizedAccordion = memo(Accordion) as typeof Accordion;

export { MemoizedAccordion as Accordion };
