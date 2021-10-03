import Link from 'next/link'
import { DocData } from '../interfaces'

export default function TitleView({ docData }: { docData: DocData }) {
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
    date.toString().substr(0, 4) +
    '/' +
    date.toString().substr(4, 2) +
    '/' +
    date.toString().substr(6, 2)
  )
}
