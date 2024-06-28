import { useMemo } from 'react';

export type EXPLORER_TYPE = 'address' | 'transaction';
export type ExplorerConfigType = { address: string; transaction: string; label: string };

export const exploreConfig: { [chainId: number]: ExplorerConfigType } = {
  56: {
    address: 'https://bscscan.com/address',
    transaction: 'https://bscscan.com/tx',
    label: 'bscscan',
  },
  1: {
    address: 'https://etherscan.io/address',
    transaction: 'https://etherscan.io/tx',
    label: 'ethscan',
  },
};

export type ExploreConfigProps = {
  chainId: number;
  type?: EXPLORER_TYPE;
  baseLink?: boolean;
  exploreConfig?: { [chainId: number]: ExplorerConfigType };
};

/**
 * Return explorer url
 * @param {string} hash Can be a address or a transaction hash
 * @param {ExploreConfigProps} config Define metadata and base link
 */
export function getExplorerUrl(hash: string, config: ExploreConfigProps) {
  const { chainId, type: configType, baseLink } = config;
  const type = configType ?? 'address';
  const realExplorerConfig = config.exploreConfig
    ? { ...exploreConfig, ...config.exploreConfig }
    : exploreConfig;
  if (realExplorerConfig[chainId]) {
    const _config = realExplorerConfig[chainId];
    if (baseLink) return { link: `${_config[type]}`, text: _config['label'] };
    return { link: `${_config[type]}/${hash}`, text: _config['label'] };
  } else return { link: undefined, text: '' };
}

/**
 * The utility hook return explorer url
 * @param {string} hash Can be a address or a transaction hash
 * @param {ExploreConfigProps} config Define metadata and base link
 */
export function useExplorerUrl(hash: string | undefined, config: ExploreConfigProps) {
  return useMemo<{ link: string | undefined; text: string }>(() => {
    if (hash) return getExplorerUrl(hash, config);
    else return { link: undefined, text: '' };
  }, [hash, config]);
}
