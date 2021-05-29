import Header from '../components/header'
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
}) {

  return (
    <div>
      <Header />
      articles
      <TitleBoard articleData={articleData} />
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
