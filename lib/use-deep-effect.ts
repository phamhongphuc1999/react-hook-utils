/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList, useEffect, useRef } from 'react';

function defaultEqualFn(item1: unknown, item2: unknown) {
  return item1 == item2;
}

export type DeepItemType = {
  [key: string]: { before: any; after: any; mode: 'change' | 'retain' };
};

export type EffectCallbackFn = (changedDeps: DeepItemType) => void;

export interface MetadataType {
  depsName: Array<string>;
  equalFn?: { [key: string]: (item1: unknown, item2: unknown) => unknown };
}

/**
 * Can detect exactly what and how dependencies change
 * @param {EffectCallbackFn} effectCallback Imperative function
 * @param {DependencyList} deps If present, effect will only activate if the values in the list
 * @param {Partial<MetadataType> | undefined} metadata Define the way hook detect what and how dependencies change
 */
export function useDeepEffect(
  effectCallback: EffectCallbackFn,
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
      const isEqualFn = equalFn[keyName] ?? defaultEqualFn;
      temp[keyName] = {
        before: ref.current?.[counter],
        after: item,
        mode: isEqualFn(item, ref.current?.[counter]) ? 'retain' : 'change',
      };
      counter++;
    }
    effectCallback(temp);
    ref.current = deps;
  }, [deps, metadata?.depsName, metadata?.equalFn, effectCallback]);
}
