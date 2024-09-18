import { useMemo } from 'react';

export type EXPLORER_TYPE = 'address' | 'transaction';
export type ExplorerConfigType = {
  address: `${string}%{hash}${string}`;
  transaction: `${string}%{hash}${string}`;
  baseUrl: string;
  label: string;
};

export const exploreConfig: { [chainId: string]: ExplorerConfigType } = {
  56: {
    address: 'https://bscscan.com/address/%{hash}',
    transaction: 'https://bscscan.com/tx/%{hash}',
    baseUrl: 'https://bscscan.com',
    label: 'bscscan',
  },
  1: {
    address: 'https://etherscan.io/address/%{hash}',
    transaction: 'https://etherscan.io/tx/%{hash}',
    baseUrl: 'https://etherscan.io',
    label: 'ethscan',
  },
  250: {
    address: 'https://ftmscan.com/address/%{hash}',
    transaction: 'https://ftmscan.com/tx/%{hash}',
    baseUrl: 'https://ftmscan.com',
    label: 'ftmscan',
  },
  97: {
    address: 'https://testnet.bscscan.com/address/%{hash}',
    transaction: 'https://testnet.bscscan.com/tx/%{hash}',
    baseUrl: 'https://testnet.bscscan.com',
    label: 'bsctestscan',
  },
};

export type ExploreConfigProps = {
  chainId: number | string;
  type?: EXPLORER_TYPE;
  baseLink?: boolean;
  exploreConfig?: { [chainId: string]: ExplorerConfigType };
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
    if (baseLink) return { link: _config.baseUrl, text: _config['label'] };
    return { link: _config[type].replace('%{hash}', hash), text: _config['label'] };
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
