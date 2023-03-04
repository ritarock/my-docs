import TitleList from '../components/TitleList'
import TagList from '../components/TagList'
import Header from '../components/Header'
import { GetStaticProps } from 'next'
import { getSortedDocs } from '../lib/util'
import { DocMetaData } from '../interfaces'

function Home({ docs }: { docs: DocMetaData[] }) {
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
