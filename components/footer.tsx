import Link from 'next/link'

export default function Footer({ topPage }) {
  return topPage ? (
    <>
      <br />
      <p className="text-center">
        <Link href="https://github.com/ritarock/my-docs">
          <a>[GitHub]</a>
        </Link>
      </p>
    </>
  ) : (
    <>
      <br />
    </>
  )
}

Footer.defaultProps = {
  topPage: false,
}
