import { getPosts } from '@/lib/posts';
import { TitleList } from '@/components/TitleList';

export default function Home() {
  const posts = getPosts();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <TitleList posts={posts} />
    </main>
  );
}
