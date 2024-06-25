import { usePagination } from 'lib/use-pagination';
import { useState } from 'react';
import { BaseTest } from './base-test';

export function PaginationTest() {
  const [jumpPage, setJumpPage] = useState(0);
  const [tempItemsPerPage, setTempItemsPerPage] = useState(10);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { next, prev, jump, data, currentPage, maxPage } = usePagination(
    Array.from({ length: 100 }, (_, i) => i + 1),
    { itemsPerPage },
  );

  return (
    <BaseTest title="Pagination test">
      <p>{`Current page: ${currentPage}`}</p>
      <p>{`Max page: ${maxPage}`}</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {data.map((item) => {
          return <text>{`Item: ${item}`}</text>;
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <div>
        <input
          max={maxPage}
          type="number"
          placeholder="jump"
          onChange={(event) => setJumpPage(parseInt(event.target.value))}
        />
        <button onClick={() => jump(jumpPage)}>{`jump to ${jumpPage}`}</button>
      </div>
      <div>
        <input
          max={100}
          type="number"
          placeholder="items per page"
          onChange={(event) => setTempItemsPerPage(parseInt(event.target.value))}
        />
        <button
          onClick={() => {
            setItemsPerPage(tempItemsPerPage);
            jump(1);
          }}
        >
          change items per page
        </button>
      </div>
    </BaseTest>
  );
}
