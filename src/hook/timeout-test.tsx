import { useState } from 'react';
import { BaseTest } from './base-test';
import { useTimeout } from 'lib/use-timeout';

export function TimeoutTest() {
  const [counter, setCounter] = useState(0);
  const { reset, clear } = useTimeout(() => setCounter((preValue) => preValue + 1), 1);

  return (
    <BaseTest title="Timeout test">
      <text>{counter}</text>
      <button onClick={reset}>reset</button>
      <button onClick={clear}>clear</button>
    </BaseTest>
  );
}
