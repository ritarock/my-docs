import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <div>
      <p>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>TOPへ戻る</a>
        </Link>
      </p>
    </div>
  );
}
