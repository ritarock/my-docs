import Link from 'next/link'
import { TDocMeta } from '../interfaces'

export default function TitleView({ docs }: { docs: TDocMeta[] }) {
  return (
    <>
      <p className="mx-6">Docs:</p>
      <div className="mx-8">
        {docs.map(({ title, date, tags }) => (
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
    date.toString().substring(0, 4) +
    '-' +
    date.toString().substring(4, 6) +
    '-' +
    date.toString().substring(6, 8)
  )
}
