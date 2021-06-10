import Link from 'next/link'

export default function TagView({
  articleData
}: {
  articleData: {
    id: number
    title: string
    tags: string[]
  }[]
}): JSX.Element {
  const filterdArticleData = articleData.map(e => {
    return e.tags
  })
  const set = new Set(filterdArticleData.flat())
  const setArr = Array.from(set)

  return (
    <div>
      <div>tags:</div>
      {setArr.map(tag => (
        <span>
          <Link href={`tags/${tag}`}>
            <a>{tag}</a>
          </Link>
          <span> </span>
        </span>
      ))}
      <hr />
    </div>
  )
}
