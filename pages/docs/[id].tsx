import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { getDocBody, getDocId } from '../../lib/util'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '../../components/codeBlock'
import remarkGfm from 'remark-gfm'
import { TBody } from '../../interfaces'

export default function Doc({ body }: { body: TBody }) {
  return (
    <>
      <div>
        <Header />
        <div className="mx-10">
          <h1>
            <b># {body.title}</b>
          </h1>
          <ReactMarkdown
            components={{
              code: CodeBlock,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {body.body}
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
  const body = await getDocBody(params.id)

  return {
    props: {
      body,
    },
  }
}
