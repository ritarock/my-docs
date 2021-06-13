import Header from '../../components/header'
import Footer from '../../components/footer'
import { GetStaticPaths } from 'next'
import { getArticleId, getArticleData } from '../../lib/utils'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { components } from '../../components/codeBlock'

export default function Articles({
  data,
}: {
  data: {
    id: string
    fileContents: string
  }
}): JSX.Element {
  const bodyContent = JSON.parse(data.fileContents).bodyContent
  const title = JSON.parse(data.fileContents).title

  return (
    <>
      <div>
        <Header />
        <div className="mx-3">
          <h1># {title}</h1>
          <ReactMarkdown
            components={components}
            remarkPlugins={[gfm]}
          >{bodyContent}</ReactMarkdown>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticleId()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: {
    id: string
  }
}): Promise<{
  props: {
    data: {
      id: string
      fileContents: string
    }
  }
}> => {
  const data = getArticleData(params.id)

  return {
    props: {
      data,
    },
  }
}
