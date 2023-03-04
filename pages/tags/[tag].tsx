import { GetStaticPaths, GetStaticProps } from 'next'
import { getTagPaths, getSortedDocs } from '../../lib/util'
import TitleList from '../../components/TitleList'
import Header from '../../components/Header'
import { DocMetaData } from '../../interfaces'

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getTagPaths(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({
  params,
}: {
  params: { tag: string }
}) => {
  const contents = getSortedDocs()

  return {
    props: {
      contents: contents.filter((data) => data.tags.includes(params.tag)),
    },
  }
}

export default function Tag({ contents }: { contents: DocMetaData[] }) {
  const tag = Array.from(
    new Set(contents.flatMap((content) => content.tags))
  )[0]
  return (
    <>
      <Header />
      <span>Tag: </span>
      <div>{tag}</div>
      <hr />
      <TitleList docs={contents} />
    </>
  )
}
