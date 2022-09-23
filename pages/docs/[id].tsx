import { GetStaticPaths, GetStaticProps } from 'next'
import { getDocId, getDocContents } from '../../lib/util'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '../../components/codeBlock'
import { TDocContent } from '../../interfaces'
import Header from '../../components/header'
import remarkGfm from 'remark-gfm'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getDocId(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const contents = await getDocContents(params.id)
  return {
    props: { contents: contents },
  }
}

export default function Doc({ contents }: { contents: TDocContent }) {
  return (
    <>
      <Header />
      <b># {contents.title}</b>
      <ReactMarkdown
        components={{
          code: CodeBlock,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {contents.body}
      </ReactMarkdown>
    </>
  )
}
