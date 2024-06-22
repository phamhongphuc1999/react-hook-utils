import { useMemo } from 'react';

export type EXPLORER_TYPE = 'address' | 'transaction';

export const exploreConfig: {
  [chainId: number]: { address: string; transaction: string; label: string };
} = {
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
  97: {
    address: 'https://testnet.bscscan.com/address',
    transaction: 'https://testnet.bscscan.com/tx',
    label: 'bsctestscan',
  },
};

export type ExploreConfigProps = {
  chainId: number;
  type?: EXPLORER_TYPE;
  baseLink?: boolean;
};

export function getExplorerUrl(hash: string, config: ExploreConfigProps) {
  const { chainId, type: configType, baseLink } = config;
  const type = configType ?? 'address';
  if (exploreConfig[chainId]) {
    const _config = exploreConfig[chainId];
    if (baseLink) return { link: `${_config[type]}`, text: _config['label'] };
    return { link: `${_config[type]}/${hash}`, text: _config['label'] };
  } else return { link: undefined, text: '' };
}

export function useExplorerUrl(hash: string | undefined, config: ExploreConfigProps) {
  return useMemo<{ link: string | undefined; text: string }>(() => {
    if (hash) return getExplorerUrl(hash, config);
    else return { link: undefined, text: '' };
  }, [hash, config]);
}
