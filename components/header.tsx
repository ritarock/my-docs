import Head from 'next/head';
export default function Header(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Ghostの囁き</title>
      </Head>
      <h1>Ghostの囁き</h1>
      <hr color="black" />
    </div>
  );
}
