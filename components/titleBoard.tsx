export default function TitleBoard({
  articleData
}: {
  articleData: {
    id: number
    title: string
  }[]
}) {
  return (
    <div>
      {articleData.map(({id, title}) => (
        <div>
          {`${formatDate(id)}: ${title}`}
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
