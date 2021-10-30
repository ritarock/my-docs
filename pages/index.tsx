import Header from '../components/header'
import { getSortedDocData } from '../lib/util'
import Footer from '../components/footer'
import { GetStaticProps } from 'next'
import TagView from '../components/tagView'
import TitleView from '../components/titleView'
import { DocData } from '../interfaces'

export default function Home({ docData }: { docData: DocData }) {
  return (
    <>
      <Header />
      <TagView
        tags={Array.from(new Set(docData.flatMap((data) => data.tags)))}
      />
      <hr />
      <TitleView docData={docData} />
      <Footer topPage={true} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const docData = getSortedDocData()
  return {
    props: {
      docData,
    },
  }
}
