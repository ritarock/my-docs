import Link from 'next/link'
import {TDocMetaData} from '../interfaces'

const TitleList =({docs}: {docs: TDocMetaData[]}) =>{
  return (
    <>
      <p>Docs: </p>
      <div>
        {docs.map(({title, date, tags}) => (
          <div key={date}>
            {formatDate(date)}: 
            <Link href="/docs/[id]" as={`/docs/${date}`}>
              <a>{title}</a>
            </Link>
            <span> : tags: [{tags.join(', ')}]</span>
          </div>
        ))}
      </div>
    </>
  )
}

const formatDate = (date: number) => {
  return (
    date.toString().substring(0,4) +
    "-" +
    date.toString().substring(4,6) +
    "-" +
    date.toString().substring(6,8)
  )
}

export default TitleList
