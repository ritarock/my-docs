import Head from 'next/head'
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <>
      <div>
        <Head>
          <title>MyDocs</title>
        </Head>
        <div className="bg-gray-600 h-10 leading-10 text-2xl">
          <Link href="/">
            <a className="no-underline">MyDocs</a>
          </Link>
        </div>
      </div>
    </>
  )
}
