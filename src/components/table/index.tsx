import { Dispatch, SetStateAction, useMemo } from 'react';

import { AnyObjectType, TableColumnType } from '../../types';
import { tableSkeltonData } from '../../utils';
import { CommonHederText, CustomPagination, CustomTable, tablePaginationDataType } from '..';
import { PAGINATION_INITIAL_DATA } from '../../constants';

type TableComponentProps<T extends AnyObjectType> = {
  dataSource: T[];
  columns: TableColumnType<T>;
  onRowClick?: (record: T) => void;
  loading?: boolean;
  paginationData: tablePaginationDataType;
  setPaginationData: Dispatch<SetStateAction<tablePaginationDataType>>;
  headerText?: string;
};

export const TableComponent = <T extends AnyObjectType>({
  dataSource,
  columns,
  onRowClick,
  loading = false,
  paginationData,
  setPaginationData,
  headerText,
}: TableComponentProps<T>) => {
  const handleClick = (record: T) => {
    if (onRowClick) {
      onRowClick(record);
    }
  };

  const skeltonData = useMemo(() => {
    let columnsResult = [...columns];
    if (loading && columnsResult.length > 0) {
      // columnsResult.pop();
      const result = columnsResult.map(obj => ({
        ...obj,
        render: undefined,
      }));
      columnsResult = result;
    }
    return {
      data: tableSkeltonData<T & { name: string }>(10),
      columns: columnsResult,
    };
  }, [loading, columns]);

  const handlePageChange = (page: number, pageSize: number) => {
    try {
      setPaginationData(prev => ({
        ...prev,
        pageNo: page,
        pageSize: pageSize,
      }));
    } catch (error) {
      console.error('Error during page change:', error);
    }
  };

  return (
    <div className="h-full w-full">
      {headerText && <CommonHederText value={headerText} />}
      <CustomTable<T>
        dataSource={loading ? skeltonData.data : dataSource}
        columns={loading ? skeltonData.columns : columns}
        onRowClick={record => handleClick(record as T)}
      />
      {paginationData.total > PAGINATION_INITIAL_DATA.pageSize && (
        <div className="flex w-full items-center justify-center">
          <CustomPagination
            pageSize={paginationData.pageSize}
            current={paginationData.pageNo}
            total={paginationData.total}
            showSizeChanger
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
