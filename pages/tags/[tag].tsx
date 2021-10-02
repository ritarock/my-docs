import { GetStaticPaths, GetStaticProps } from 'next'
import { getDocBody, getSortedDocData, getTagPaths } from '../../lib/util'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TagView from '../../components/tagView'
import TitleView from '../../components/titleView'

export default function Tag({
  docData,
}: {
  docData: { title: string; date: number; tags: string[] }[]
}) {
  const router = useRouter()
  const filterdDocData = docData.filter((doc) => {
    return doc.tags.includes(String(router.query.tag))
  })

  return (
    <>
      <div>
        <Header />
        <TagView tags={[String(router.query.tag)]} />
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
