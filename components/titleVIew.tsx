import Link from 'next/link'

export default function TitleView({
  docData,
}: {
  docData: { title: string; date: number; tags: string[] }[]
}) {
  return (
    <>
      <p className="mx-3">Docs:</p>
      <div className="mx-5">
        {docData.map(({ title, date, tags }) => (
          <div key={date}>
            {`${formatDate(date)}: `}
            <Link href="/docs/[id]" as={`/docs/${date}`}>
              <a className="text-blue-500">{title}</a>
            </Link>
            <span> : Tags [{tags.join(', ')}]</span>
          </div>
        ))}
      </div>
    </>
  )
}

function formatDate(date: number) {
  return (
    String(date).substr(0, 4) +
    '/' +
    String(date).substr(4, 2) +
    '/' +
    String(date).substr(6, 2)
  )
}
