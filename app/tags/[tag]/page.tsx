import { getPostsByTag, getAllTags } from '@/lib/posts';
import { TitleList } from '@/app/components/TitleList';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    tag: string;
  };
}

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

export default function TagPage({ params }: PageProps) {
  const posts = getPostsByTag(params.tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <span>Tags</span>
      <div>{ params.tag }</div>
      <TitleList posts={posts} />
    </main>
  );
}
