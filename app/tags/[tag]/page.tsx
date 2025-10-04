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
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <h1>Tag: {params.tag}</h1>
      <TitleList posts={posts} />
    </main>
  );
}
