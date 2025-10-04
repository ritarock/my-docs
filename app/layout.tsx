import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A simple SSG blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ backgroundColor: 'ghostwhite', margin: 0, minHeight: '100vh' }}>{children}</body>
    </html>
  );
}
