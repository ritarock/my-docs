import Header from '../../components/header'
import { GetStaticPaths } from 'next'
import { getArticlesIds, getArticlesData } from '../../lib/utils'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function Articles({data}) {
  const bodyContent = JSON.parse(data.fileContents).bodyContent

  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={monokai} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    }
  }

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
