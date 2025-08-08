import { LOCAL_STORAGE_KEYS, PAGE_HEADER_TEXT } from '../../constants';
import { MainHeader } from '../../components';
import { PADDING } from '../../styles';
import { useEffect, useMemo, useState } from 'react';
import { fetchLocalData } from '../../utils';

const DashBoard = () => {
  const [layoutData, setLayoutData] = useState<[]>([]);

  const payload = {
    country: 'United',
    search: '',
  };

  // const tableData = useMemo(() => {
  //   const existingData: graphChartDataListType[] | null = fetchLocalData(
  //     LOCAL_STORAGE_KEYS.graphChartDataList
  //   );
  //   return existingData ?? [];
  // }, []);

  // useEffect(() => {
  //   setLayoutData(tableData?.[0]?.data ?? []);
  // }, [tableData]);

  return (
    <div
      className={`relative h-full w-full overflow-scroll md:overflow-auto ${PADDING.horizontalPadding}`}
    >
      <MainHeader title={PAGE_HEADER_TEXT.dashboard} />
      <div className="overflow-auto pb-2 md:overflow-scroll"></div>
    </div>
  );
};

export default DashBoard;
