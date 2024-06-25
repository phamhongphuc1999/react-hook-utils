import { useDeepEffect } from 'lib/use-deep-effect';
import { useState } from 'react';
import { BaseTest } from './base-test';

export function DeepEffectTest() {
  const [element1, setElement1] = useState('');
  const [element2, setElement2] = useState('');
  const [change1, setChange1] = useState(0);
  const [change2, setChange2] = useState(0);

  useDeepEffect(
    (changedDeps) => {
      const _change1 = changedDeps['element1'].mode;
      const _change2 = changedDeps['element2'].mode;
      if (_change1 == 'change') setChange1((preValue) => preValue + 1);
      if (_change2 == 'change') setChange2((preValue) => preValue + 1);
    },
    [element1, element2],
    { depsName: ['element1', 'element2'] },
  );

  return (
    <BaseTest title="Deep effect test">
      <input onChange={(event) => setElement1(event.target.value)} placeholder="element1" />
      <input onChange={(event) => setElement2(event.target.value)} placeholder="element2" />
      <div />
      <text>{`change1: ${change1}`}</text>
      <div />
      <text>{`change2: ${change2}`}</text>
    </BaseTest>
  );
}
