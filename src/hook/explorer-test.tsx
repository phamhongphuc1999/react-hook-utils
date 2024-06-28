import { useExplorerUrl } from 'lib/use-explorer-url';
import { useState } from 'react';
import { BaseTest } from './base-test';

export function ExplorerTest() {
  const [address, setAddress] = useState('');
  const { link: addressLink } = useExplorerUrl(address, {
    chainId: 97,
    exploreConfig: {
      97: {
        address: 'https://testnet.bscscan.com/address',
        transaction: 'https://testnet.bscscan.com/tx',
        label: 'bsctestscan',
      },
    },
  });

  const [transaction, setTransaction] = useState('');
  const { link: transactionLink } = useExplorerUrl(address, { chainId: 56 });

  return (
    <BaseTest title="Explorer test">
      <div>
        <input
          placeholder="address"
          value={addressLink}
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
