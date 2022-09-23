import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
      <div>
        <Head>
          <title>MyDocs</title>
        </Head>
        <Link href="/">
          <TopLinkWrapper>MyDocs</TopLinkWrapper>
        </Link>
      </div>
      <p></p>
    </>
  )
}

export default Header

const TopLinkWrapper = styled.a`
  color: black;
  font-size: 22px;
  cursor: pointer;
`
