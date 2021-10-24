import { GetStaticPaths, GetStaticProps } from 'next'
import { getDocBody, getSortedDocData, getTagPaths } from '../../lib/util'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TagView from '../../components/tagView'
import TitleView from '../../components/titleView'
import { DocData } from '../../interfaces'

export default function Tag({ docData }: { docData: DocData }) {
  const router = useRouter()
  const filterdDocData = docData.filter((doc) => {
    return doc.tags.includes(String(router.query.tag))
  })

  return (
    <>
      <div>
        <Header />
        <p className="mx-3">Tags:</p>
        <div className="mx-5">
          <span>{[String(router.query.tag)]}</span>
        </div>
        <hr />
        <TitleView docData={filterdDocData} />
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTagPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const docData = getSortedDocData()

  return {
    props: {
      docData,
    },
  }
}
