import Link from 'next/link';
import { Post } from '@/lib/posts';

interface TitleListProps {
  posts: Post[];
}

export function TitleList({ posts }: TitleListProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
    <span>Docs</span>
      {posts.map((post) => (
        <li key={post.slug} style={{ marginBottom: '0.125rem' }}>
          {post.date}: <Link href={`/docs/${post.slug}`} style={{ color: 'cornflowerblue' }}>{post.title}</Link> - tags: [ {post.tags.join(', ')} ]
        </li>
      ))}
    </ul>
  );
}
