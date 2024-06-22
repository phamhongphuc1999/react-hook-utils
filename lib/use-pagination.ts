import { useState } from 'react';

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
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));
  }

  const _data = data.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage);
  return { next, prev, jump, data: _data, currentPage, maxPage };
}
