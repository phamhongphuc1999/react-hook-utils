import { useState } from 'react';
import { DeepEffectTest } from './hook/deep-effect-test';
import { ExplorerTest } from './hook/explorer-test';
import { PaginationTest } from './hook/pagination-test';
import { ScrollTest } from './hook/scroll-test';
import { TimeoutTest } from './hook/timeout-test';

const config: Array<{ name: string; index: number }> = [
  { name: 'deep effect', index: 0 },
  { name: 'explorer', index: 1 },
  { name: 'scroll', index: 2 },
  { name: 'pagination', index: 3 },
  { name: 'timeout', index: 4 },
];

export function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {config.map((item) => (
          <button key={item.index} onClick={() => setIndex(item.index)}>
            <text style={{ textDecoration: index == item.index ? 'underline' : 'none' }}>
              {item.name}
            </text>
          </button>
        ))}
      </div>
      {index == 0 && <DeepEffectTest />}
      {index == 1 && <PaginationTest />}
      {index == 2 && <ScrollTest />}
      {index == 3 && <ExplorerTest />}
      {index == 4 && <TimeoutTest />}
    </>
  );
}
