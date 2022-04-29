import Link from 'next/link'

export default function TagView({ tags }: { tags: string[] }) {
  return (
    <>
      <p className="mx-6">Tags:</p>
      <div className="mx-8">
        {tags.map((tag) => (
          <span key={tag}>
            <Link href={`tags/${tag}`}>
              <a>{tag}</a>
            </Link>
            <span> </span>
          </span>
        ))}
      </div>
    </>
  )
}
