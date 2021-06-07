import Header from '../../components/header'
import { GetStaticPaths } from 'next'
import { getArticlesIds, getArticlesData } from '../../lib/utils'
import ReactMarkdown from 'react-markdown'
import { components } from '../../components/codeBlock'

export default function Articles({
  data
}: {
  data: {
    id: string
    fileContents: string
  }
}): JSX.Element {
  const bodyContent = JSON.parse(data.fileContents).bodyContent

  return (
    <div>
      <Header />
      <ReactMarkdown components={components} >
        {bodyContent}
      </ReactMarkdown>
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
}): Promise<{
  props: {
      data: {
          id: string;
          fileContents: string;
      }
  }
}> => {
  const data = getArticlesData(params.id)

  return {
    props: {
      data
    }
  }
}
