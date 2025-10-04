import Link from 'next/link';

interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <section style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #ddd' }}>
      <span>Tags</span>
      <div>
        {tags.map((tag, index) => (
          <span key={tag}>
            <Link href={`/tags/${tag}`} style={{ color: 'black' }}>
              {tag}
            </Link>
            {index < tags.length - 1 && ' '}
          </span>
        ))}
      </div>
    </section>
  );
}
