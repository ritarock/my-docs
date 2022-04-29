import { GetStaticPaths, GetStaticProps } from 'next'
import { getSortedDocs, getTagPaths } from '../../lib/util'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { TDocMeta } from '../../interfaces'
import TitleView from '../../components/titleVIew'

export default function Tag({ docs }: { docs: TDocMeta[] }) {
  const router = useRouter()
  const filteredDocs = docs.filter((doc) => {
    return doc.tags.includes(String(router.query.tag))
  })

  return (
    <>
      <div>
        <Header />
        <p className="mx-6">Tags:</p>
        <div className="mx-8">
          <span>{[String(router.query.tag)]}</span>
        </div>
        <hr />
        <TitleView docs={filteredDocs} />
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
  const docs = getSortedDocs()

  return {
    props: {
      docs,
    },
  }
}
