import Header from '../components/header'
import Footer from '../components/footer'
import TitleBoard from '../components/titleBoard'
import { getIndex } from '../lib/utils'
import { GetStaticProps } from 'next'

export default function Home({
  articleData
}: {
  articleData: {
    id: number
    title: string
  }[]
}): JSX.Element {

  return (
    <div>
      <Header />
      articles
      <TitleBoard articleData={articleData} />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articleData = getIndex()

  return {
    props: {
      articleData
    }
  }
}
