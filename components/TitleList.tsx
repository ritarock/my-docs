import Link from 'next/link';
import { Post } from '@/lib/posts';

interface TitleListProps {
  posts: Post[];
}

export function TitleList({ posts }: TitleListProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map((post) => (
        <li key={post.slug} style={{ marginBottom: '0.25rem' }}>
          {post.date}: <Link href={`/posts/${post.slug}`} style={{ color: 'cornflowerblue' }}>{post.title}</Link> - tags: [ {post.tags.join(', ')} ]
        </li>
      ))}
    </ul>
  );
}
