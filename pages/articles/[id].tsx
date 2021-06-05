import Header from '../../components/header'
import { GetStaticPaths } from 'next'
import { getArticlesIds, getArticlesData } from '../../lib/utils'
import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeBlock = ({ language, value} ) => {
  return (
    <SyntaxHighlighter language={language}>
      {value}
    </SyntaxHighlighter>
  )
}

export default function Articles({data}) {
  const bodyContent = JSON.parse(data.fileContents).bodyContent

  return (
    <div>
      <Header />
      <ReactMarkdown
        children={bodyContent}
        components={CodeBlock}
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
