import { useCallback, useMemo, useState } from 'react';

export type PaginationConfigType = {
  pageIndex?: number;
  itemsPerPage?: number;
};

/**
 * Simplify the pagination service in react
 * @param {Array<DataType>} data The array data that is needed to paginate
 * @param {PaginationConfigType | undefined} config Define page index and items per page
 */
export function usePagination<DataType>(data: Array<DataType>, config?: PaginationConfigType) {
  const pageIndex = config?.pageIndex ?? 1;
  const itemsPerPage = config?.itemsPerPage ?? 10;

  const [currentPage, setCurrentPage] = useState(pageIndex);

  const maxPage = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  const _data = useMemo(() => {
    return data.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage);
  }, [currentPage, data, itemsPerPage]);

  const next = useCallback(() => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }, [maxPage]);

  const prev = useCallback(() => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }, []);

  const jump = useCallback(
    (page: number) => {
      const pageNumber = Math.max(1, page);
      setCurrentPage(Math.min(pageNumber, maxPage));
    },
    [maxPage],
  );

  return { next, prev, jump, data: _data, currentPage, maxPage };
}
