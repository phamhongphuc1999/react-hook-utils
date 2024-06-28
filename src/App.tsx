import { DeepEffectTest } from './hook/deep-effect-test';
import { ExplorerTest } from './hook/explorer-test';
import { PaginationTest } from './hook/pagination-test';
import { TimeoutTest } from './hook/timeout-test';

export function App() {
  return (
    <>
      <DeepEffectTest />
      <PaginationTest />
      <ExplorerTest />
      <TimeoutTest />
    </>
  );
}
