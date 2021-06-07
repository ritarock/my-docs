import Header from '../components/header'
import Footer from '../components/footer'
import TitleBoard from '../components/titleBoard'
import { getIndex, getTags } from '../lib/utils'
import { GetStaticProps } from 'next'

export default function Home({
  articleData,
  tags
}: {
  articleData: {
    id: number
    title: string
  }[],
  tags: string[][]
}): JSX.Element {

  return (
    <div>
      <Header />
      Tags:
      {tags}
      Articles
      <TitleBoard articleData={articleData} />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articleData = getIndex()
  const tags = getTags()

  return {
    props: {
      articleData,
      tags
    }
  }
}
