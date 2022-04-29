import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { getDocBody, getDocId } from '../../lib/util'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '../../components/codeBlock'
import remarkGfm from 'remark-gfm'
import { TDocBody } from '../../interfaces'

export default function Doc({ docBody }: { docBody: TDocBody }) {
  return (
    <>
      <div>
        <Header />
        <div className="mx-10">
          <h1>
            <b># {docBody.title}</b>
          </h1>
          <ReactMarkdown
            components={{
              code: CodeBlock,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {docBody.body}
          </ReactMarkdown>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getDocId()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const docBody = await getDocBody(params.id)

  return {
    props: {
      docBody,
    },
  }
}
