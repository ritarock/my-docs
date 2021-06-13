import Link from 'next/link'

export default function TagView({
  articleData,
}: {
  articleData: {
    id: number
    title: string
    tags: string[]
  }[]
}): JSX.Element {
  const tagData = articleData.map((e) => e.tags)
  const set = new Set(tagData.flat())
  const filterdTagData = Array.from(set)

  return (
    <>
      <p className="mx-3">Tags:</p>
      <div className="mx-5">
        {filterdTagData.map((tag) => (
          <span key={tag}>
            <Link href={`tags/${tag}`}>
              <a>{tag}</a>
            </Link>
            <span> </span>
          </span>
        ))}
        <hr />
      </div>
    </>
  )
}
