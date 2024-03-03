import Link from "next/link"

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <span>Tags: </span>
      <div>
        {tags.map(tag => (
          <span key={tag}>
            <Link href={`tags/${tag}`}>
              <span style={tagStyle}>{tag}</span>
            </Link>
            <span> </span>
          </span>
        ))}
      </div>
    </>
  )
}

const tagStyle = {
  color: 'black',
  textDecoration: 'underline',
  cusor: 'pointer',
}

export default TagList
