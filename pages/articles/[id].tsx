import Header from '../../components/header'
import { GetStaticPaths } from 'next'
import { getArticlesIds, getArticlesData } from '../../lib/utils'
import ReactMarkdown from 'react-markdown'
import { components } from '../../components/codeBlock'

export default function Articles({data}) {
  const bodyContent = JSON.parse(data.fileContents).bodyContent

  return (
    <div>
      <Header />
      <ReactMarkdown
        children={bodyContent}
        components={components}
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: {
  params: {
    id: string
  }
}) => {
  const data = getArticlesData(params.id)

  return {
    props: {
      data
    }
  }
}
