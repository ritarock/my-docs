import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export default function Home() {
  const posts = getPosts();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '1rem' }}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
              <time>{post.date}</time>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
