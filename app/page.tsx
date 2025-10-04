import { getPosts, getAllTags } from '@/lib/posts';
import { TitleList } from '@/app/components/TitleList';
import { TagList } from '@/app/components/TagList';

export default function Home() {
  const posts = getPosts();
  const tags = getAllTags();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <TagList tags={tags} />
      <TitleList posts={posts} />
    </main>
  );
}
