import { useTranslate } from 'lib/use-translate';
import { useState } from 'react';
import { BaseTest } from './base-test';
import en from './locale/en.json';
import vi from './locale/vi.json';

export function TranslateTest() {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const [person, setPerson] = useState('person1');
  const { t } = useTranslate({ en, vi }, language);

  return (
    <BaseTest title="Translate test">
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <button
          onClick={() => setLanguage('en')}
          style={{ textDecoration: language == 'en' ? 'underline' : 'none' }}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('vi')}
          style={{ textDecoration: language == 'vi' ? 'underline' : 'none' }}
        >
          VI
        </button>
      </div>
      <p>{`hello: ${t('hello')}`}</p>
      <p>{`tree.apple: ${t('tree.apple')}`}</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input value={person} onChange={(event) => setPerson(event.target.value)} />
        <p>{`connectTo: ${t('connectTo', { person })}`}</p>
      </div>
    </BaseTest>
  );
}
