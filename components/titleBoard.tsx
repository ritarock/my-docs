import Link from 'next/link'

export default function TitleBoard({
  articleData
}: {
  articleData: {
    id: number
    title: string
  }[]
}): JSX.Element {
  return (
    <div>
      {articleData.map(({id, title}) => (
        <div key={id}>
          {`${formatDate(id)}: `}
          <Link href={`articles/${id}`}>
            <a>{title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

function formatDate(date: number) {
  return (
    String(date).substr(0, 4) +
    "/" +
    String(date).substr(4, 2) +
    "/" +
    String(date).substr(6, 2)
  )
}
