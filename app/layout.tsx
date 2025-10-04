import type { Metadata } from 'next';
import 'highlight.js/styles/monokai.css';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'MyDocs',
  description: 'A simple SSG blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ backgroundColor: 'ghostwhite', margin: 0, minHeight: '100vh' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
