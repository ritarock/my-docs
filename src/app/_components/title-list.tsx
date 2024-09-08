import { MetaData } from "../../@types/metaData";
import Link from "next/link";

const TitleList = ({ docs }: { docs: MetaData[] }) => {
  return (
    <>
      <span>Docs: </span>
      <div>
        {docs.map(({ title, date, tags }) => (
          <div key={date}>
            {formatDate(date)}:<span> </span>
            <Link href='/docs/[slug]' as={`/docs/${date}`}>
              {title}
            </Link>
            <span>
              - tags: [<i> {tags.join(', ')} </i>]
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

const formatDate = (date: number) => {
  return (
    date.toString().substring(0, 4) +
    '-' +
    date.toString().substring(4, 6) +
    '-' +
    date.toString().substring(6, 8)
  )
}

export default TitleList
