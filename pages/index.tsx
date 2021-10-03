import Header from '../components/Header'
import { getSortedDocData } from '../lib/util'
import Footer from '../components/Footer'
import { GetStaticProps } from 'next'
import TagView from '../components/TagView'
import TitleView from '../components/TitleView'
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
      <Footer />
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
