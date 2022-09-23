import TitleList from '../components/titleList'
import TagList from '../components/tagList'
import Header from '../components/header'
import { GetStaticProps } from 'next'
import { getSortedDocs } from '../lib/util'
import { TDocMetaData } from '../interfaces'

function Home({ docs }: { docs: TDocMetaData[] }) {
  return (
    <>
      <Header />
      <TagList tags={Array.from(new Set(docs.flatMap((data) => data.tags)))} />
      <hr />
      <TitleList docs={docs} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const docs = getSortedDocs()
  return {
    props: { docs: docs },
  }
}

export default Home
