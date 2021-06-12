import Header from '../components/header'
import TitleView from '../components/titleVIew'
import TagView from '../components/tagView'
import { getIndex } from '../lib/utils'
import { GetStaticProps } from 'next'

export default function Home({
  articleData,
}: {
  articleData: {
    id: number
    title: string
    tags: string[]
  }[],
}): JSX.Element {

  return (
    <>
      <Header />
      <TagView articleData={articleData} />
      Articles
      <TitleView articleData={articleData} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articleData = getIndex()

  return {
    props: {
      articleData,
    }
  }
}
