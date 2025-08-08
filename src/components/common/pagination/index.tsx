'use client';
import React, { useEffect, useMemo, useState } from 'react';

export interface PaginationLocale {
  items_per_page?: string;
  jump_to?: string;
  jump_to_confirm?: string;
  page?: string;
  prev_page?: string;
  next_page?: string;
  prev_5?: string;
  next_5?: string;
  prev_3?: string;
  next_3?: string;
  page_size?: string;
}

export interface PaginationData {
  className: string;
  selectPrefixCls: string;
  prefixCls: string;
  pageSizeOptions: string[] | number[];
  current: number;
  defaultCurrent: number;
  total: number;
  totalBoundaryShowSizeChanger?: number;
  pageSize: number;
  defaultPageSize: number;
  hideOnSinglePage: boolean;
  showSizeChanger: boolean;
  showLessItems: boolean;
  showPrevNextJumpers: boolean;
  showQuickJumper: boolean | object;
  showTitle: boolean;
  simple: boolean;
  disabled: boolean;
  locale: PaginationLocale;
  style: React.CSSProperties;
  selectComponentClass: React.ComponentType;
  prevIcon: React.ReactNode;
  nextIcon: React.ReactNode;
  jumpPrevIcon: React.ReactNode;
  jumpNextIcon: React.ReactNode;
}

export interface PaginationProps extends Partial<PaginationData>, React.AriaAttributes {
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  itemRender?: (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    element: React.ReactNode
  ) => React.ReactNode;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  role?: React.AriaRole | undefined;
}
export interface PaginationState {
  current: number;
  currentInputValue: number;
  pageSize: number;
}
export const CustomPagination: React.FC<PaginationProps> = ({
  className = '',
  current = 1,
  total = 30,
  totalBoundaryShowSizeChanger = 5,
  pageSize = 10,
  hideOnSinglePage = false,
  showSizeChanger = false,
  disabled = false,
  prevIcon = '<',
  nextIcon = '>',
  onChange,
  onShowSizeChange,
  itemRender,
  role,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [loading]);

  const pageSizeOptions = [10, 20, 50, 100];

  const handlePageChange = (page: number) => {
    onChange && onChange(page, pageSize);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(event.target.value);
    onShowSizeChange && onShowSizeChange(1, newSize);
    onChange && onChange(1, newSize);
  };

  const totalPages = Math.ceil(total / pageSize);

  const renderPageNumbers = useMemo(() => {
    setLoading(true);
    const refNumber = 5;
    if (totalPages <= refNumber) {
      const data = [];
      for (let i = 1; i <= totalPages; i++) {
        data.push(i);
      }
      return data;
    }
    if (current === totalPages) {
      return [1, '...', totalPages - 1, totalPages];
    }
    if (current < refNumber) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    if (current > totalPages - 3) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    if (totalPages - 1 === refNumber) {
      return [1, '...', totalPages - 1, totalPages];
    }
    return [1, '...', current - 1, current, current + 1, '....', totalPages];
  }, [current, totalPages]);

  if (hideOnSinglePage && total <= pageSize) {
    return null;
  }

  return (
    <div className={`flex items-center justify-between ${className}`} role={role}>
      <div className="flex items-center space-x-2">
        <button
          className={`rounded px-3 py-1 ${current === 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-400'}`}
          disabled={current === 1 || disabled}
          onClick={() => handlePageChange(current - 1)}
        >
          {prevIcon}
        </button>
        {!loading &&
          renderPageNumbers?.length > 0 &&
          [...renderPageNumbers].map((page, index) => {
            return typeof page === 'number' ? (
              <button
                key={page}
                className={`rounded px-3 py-1 ${current === page ? 'bg-[#646edc] text-white' : 'bg-gray-200 hover:bg-gray-400'}`}
                onClick={() => handlePageChange(page)}
              >
                {itemRender ? itemRender(page, 'page', <span>{page}</span>) : page}
              </button>
            ) : (
              <span key={index} className="px-3 py-1">
                ...
              </span>
            );
          })}
        <button
          className={`rounded px-3 py-1 ${current === totalPages ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-400'}`}
          disabled={current === totalPages || disabled}
          onClick={() => handlePageChange(current + 1)}
        >
          {nextIcon}
        </button>
        {showSizeChanger && total > totalBoundaryShowSizeChanger && (
          <select
            className="rounded bg-gray-200 py-1 pl-10"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            {pageSizeOptions.map(size => (
              <option key={size} value={size}>
                {size} / page
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};
