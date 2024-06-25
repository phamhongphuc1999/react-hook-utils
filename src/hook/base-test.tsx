import { ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
}

export function BaseTest({ title, children }: Props) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <text style={{ fontWeight: 600, fontSize: 20 }}>{title}</text>
      <div style={{ marginTop: '0.5rem' }}>{children}</div>
    </div>
  );
}
