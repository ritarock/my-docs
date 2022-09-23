import { GetStaticPaths, GetStaticProps } from 'next'
import { getTagPaths, getSortedDocs } from '../../lib/util'
import TitleList from '../../components/titleList'
import Header from '../../components/header'
import { TDocMetaData } from '../../interfaces'

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

export default function Tag({ contents }: { contents: TDocMetaData[] }) {
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
