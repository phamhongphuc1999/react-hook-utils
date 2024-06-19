import { useState } from 'react';

export type PaginationConfigType = {
  pageIndex?: number;
  itemPerPage?: number;
};

export function usePagination<DataType>(data: Array<DataType>, config?: PaginationConfigType) {
  const pageIndex = config?.pageIndex ?? 1;
  const itemPerPage = config?.itemPerPage ?? 10;

  const [currentPage, setCurrentPage] = useState(pageIndex);
  const maxPage = Math.ceil(data.length / itemPerPage);

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

  const _data = data.slice(currentPage * itemPerPage - itemPerPage, currentPage * itemPerPage);
  return { next, prev, jump, data: _data, currentPage, maxPage };
}
