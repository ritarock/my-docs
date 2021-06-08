import Link from 'next/link'

export default function TagView({
  articleData
}: {
  articleData: {
    id: number
    title: string
    tags: string[][]
  }[]
}): JSX.Element {
  console.log(articleData)
  return (
    <div>
      {articleData.map(({tags}) => (
        tags.map(tag => (
        <span>
          <span>
              <Link href={`tags/${tag}`}>
                <a>{tag}</a>
              </Link>
          </span>
          <span> </span>
        </span>
        ))
      ))}
    </div>
  )
}
