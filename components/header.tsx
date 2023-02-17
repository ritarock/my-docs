import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div>
        <Head>
          <title>MyDocs</title>
        </Head>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={headerStyle}>MyDocs</div>
        </Link>
      </div>
      <p></p>
    </>
  )
}

export default Header

const headerStyle = {
  color: 'black',
  fontSize: '22px',
  cursor: 'pointer',
}
