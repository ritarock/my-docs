import Header from '../components/header'
import Footer from '../components/footer'
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
    <div>
      <Header />
      <TagView articleData={articleData} />
      Articles
      <TitleView articleData={articleData} />
      <Footer />
    </div>
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
