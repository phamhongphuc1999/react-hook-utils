import { ExplorerConfigType, useExplorerUrl } from 'lib/use-explorer-url';
import { useState } from 'react';
import { BaseTest } from './base-test';

const aptosExplorerConfig: { [chainId: string]: ExplorerConfigType } = {
  '1_mainnet': {
    address: 'https://explorer.aptoslabs.com/account/%{hash}?network=mainnet',
    transaction: 'https://explorer.aptoslabs.com/txn/%{hash}?network=mainnet',
    baseUrl: 'https://explorer.aptoslabs.com/?network=mainnet',
    label: 'aptosmainnet',
  },
  '2_testnet': {
    address: 'https://explorer.aptoslabs.com/account/%{hash}?network=testnet',
    transaction: 'https://explorer.aptoslabs.com/txn/%{hash}?network=testnet',
    baseUrl: 'https://explorer.aptoslabs.com/?network=testnet',
    label: 'aptostestnet',
  },
  '148_devnet': {
    address: 'https://explorer.aptoslabs.com/account/%{hash}?network=devnet',
    transaction: 'https://explorer.aptoslabs.com/txn/%{hash}?network=devnet',
    baseUrl: 'https://explorer.aptoslabs.com/?network=devnet',
    label: 'aptosdevnet',
  },
};

export function ExplorerTest() {
  const [address, setAddress] = useState('');
  const { link: addressLink } = useExplorerUrl(address, {
    chainId: '2_testnet',
    exploreConfig: aptosExplorerConfig,
  });

  const [transaction, setTransaction] = useState('');
  const { link: transactionLink } = useExplorerUrl(transaction, {
    chainId: '2_testnet',
    type: 'transaction',
    exploreConfig: aptosExplorerConfig,
  });

  return (
    <BaseTest title="Explorer test">
      <div>
        <input
          placeholder="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <a href={addressLink} target="_blank" style={{ textDecoration: 'underline' }}>
          Link address here
        </a>
      </div>
      <div>
        <input
          placeholder="transaction"
          value={transaction}
          onChange={(event) => setTransaction(event.target.value)}
        />
        <a href={transactionLink} target="_blank" style={{ textDecoration: 'underline' }}>
          Link transaction here
        </a>
      </div>
    </BaseTest>
  );
}
