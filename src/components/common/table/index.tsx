import { ReactNode } from 'react';
import { AnyObjectType, TableColumnType } from '../../../types';
export type tablePaginationDataType = {
  pageNo: number;
  pageSize: number;
  total: number;
};

type TableComponentProps<T> = {
  dataSource: T[];
  columns: TableColumnType<T>;
  onRowClick?: (record: T, index?: number) => void;
  noDataContainer?: ReactNode;
};

export const CustomTable = <T extends AnyObjectType>({
  dataSource,
  columns,
  onRowClick,
  noDataContainer,
}: TableComponentProps<T>) => {
  const handleRowClick = (row: T, index: number) => {
    onRowClick?.(row, index);
  };

  return (
    <div className="h-full w-full overflow-scroll">
      <table className="w-full border-separate border-spacing-y-2">
        <thead className="w-full">
          <tr className="bg-table-header-bg-color w-full bg-blue-600 text-white">
            {columns.map((column, columnIndex) => (
              <th
                key={column?.title}
                className="bg-app-color font-medium text-white"
                style={{
                  textAlign: column?.align ?? 'left',
                  padding: '.8em 1em',
                  width: column?.width ?? 'auto',
                  borderTopLeftRadius: columnIndex === 0 ? '.6em' : '',
                  borderBottomLeftRadius: columnIndex === 0 ? '.6em' : '',
                  borderTopRightRadius: columnIndex === columns?.length - 1 ? '.6em' : '',
                  borderBottomRightRadius: columnIndex === columns?.length - 1 ? '.6em' : '',
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {dataSource?.length > 0 &&
            dataSource.map((row, rowIndex) => (
              <tr
                key={`commonTable-${row?.id ?? rowIndex}`}
                className="shadow-medium cursor-pointer bg-white"
                onClick={() => handleRowClick(row, rowIndex)}
              >
                {columns.map((column, columnIndex) => (
                  <td
                    key={column?.title}
                    className="font-medium shadow"
                    style={{
                      color: 'black',
                      textAlign: column?.align ?? 'left',
                      verticalAlign: 'middle',
                      padding: '.7em 1em',
                      width: column?.width ?? 'auto',
                      borderTopLeftRadius: columnIndex === 0 ? '6px' : '',
                      borderBottomLeftRadius: columnIndex === 0 ? '6px' : '',
                      borderTopRightRadius: columnIndex === columns?.length - 1 ? '6px' : '',
                      borderBottomRightRadius: columnIndex === columns?.length - 1 ? '6px' : '',
                    }}
                  >
                    {column?.render
                      ? column.render(row?.[column?.dataIndex ?? ''] ?? '', row, rowIndex)
                      : (row?.[column?.dataIndex ?? ''] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {dataSource?.length === 0 ? (
        noDataContainer ? (
          noDataContainer
        ) : (
          <div className="flex h-full w-auto items-center justify-center bg-slate-50 text-xl text-slate-300">
            No Data
          </div>
        )
      ) : null}
    </div>
  );
};
