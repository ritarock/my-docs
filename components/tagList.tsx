import Link from 'next/link'
import styled from 'styled-components'

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <span>Tags: </span>
      <div>
        {tags.map((tag) => (
          <span key={tag}>
            <Link href={`tags/${tag}`}>
              <LinkWrapper>{tag}</LinkWrapper>
            </Link>
            <span> </span>
          </span>
        ))}
      </div>
    </>
  )
}

export default TagList

const LinkWrapper = styled.a`
  color: black;
  text-decoration: underline;
  cursor: pointer;
`
