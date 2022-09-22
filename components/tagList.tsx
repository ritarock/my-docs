import Link from 'next/link'

const TagList = ({tags}: {tags: string[]}) => {
  return (
    <>
      <p>Tags: </p>
      <div>
          {tags.map(tag => (
            <span key={tag}>
              <Link href={`tags/${tag}`}>
                <a>{tag}</a>
              </Link>
              <span> </span>
            </span>
          ))}
      </div>
    </>
  )
}

export default TagList
