import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      padding: '1rem 0',
      marginBottom: '0.25rem'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#333'
        }}>
          MyDocs
        </Link>
      </div>
    </header>
  );
}
