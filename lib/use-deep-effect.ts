/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList, useEffect, useRef } from 'react';

type DeepItemType = {
  [key: string]: { before: any; after: any; mode: 'change' | 'retain' };
};

interface MetadataType {
  depsName: Array<string>;
  equalFn: { [key: string]: (item1: unknown, item2: unknown) => unknown };
}

export function useDeepEffect(
  effectHook: (changedDeps: DeepItemType) => void,
  deps: DependencyList,
  metadata?: Partial<MetadataType>,
) {
  const ref = useRef<DependencyList | undefined>(undefined);

  useEffect(() => {
    const depsName = metadata?.depsName ?? [];
    const equalFn = metadata?.equalFn ?? {};
    const temp: DeepItemType = {};
    let counter = 0;
    for (const item of deps) {
      const keyName = depsName[counter] || counter;
      const isEqualFn = equalFn[keyName];
      temp[keyName] = {
        before: ref.current?.[counter],
        after: item,
        mode: isEqualFn(item, ref.current?.[counter]) ? 'retain' : 'change',
      };
      counter++;
    }
    effectHook(temp);
    ref.current = deps;
  }, [deps, metadata?.depsName, metadata?.equalFn, effectHook]);
}
