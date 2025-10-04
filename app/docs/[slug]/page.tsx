import { getPostBySlug, getPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 2rem' }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
