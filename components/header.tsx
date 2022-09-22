import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div>
        <Head>
          <title>MyDocs</title>
        </Head>
        <Link href="/">
          <a>MyDocs</a>
        </Link>
      </div>
    </>
  )
}

export default Header
