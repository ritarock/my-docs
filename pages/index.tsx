import Header from '../components/header'
import { getSortedDocs } from '../lib/util'
import Footer from '../components/footer'
import { GetStaticProps } from 'next'
import TagView from '../components/tagView'
import { TDoc } from '../interfaces'
import TitleView from '../components/titleVIew'

export default function Home({ docs }: { docs: TDoc[] }) {
  return (
    <>
      <Header />
      <TagView tags={Array.from(new Set(docs.flatMap((data) => data.tags)))} />
      <hr />
      <TitleView docs={docs} />
      <Footer topPage={true} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const docs = getSortedDocs()
  return {
    props: {
      docs,
    },
  }
}
