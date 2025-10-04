import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export default function Home() {
  const posts = getPosts();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '0.25rem' }}>
            {post.date}: <Link href={`/posts/${post.slug}`} style={{ color: 'cornflowerblue' }}>{post.title}</Link> - tags: [ {post.tags.join(', ')} ]
          </li>
        ))}
      </ul>
    </main>
  );
}
