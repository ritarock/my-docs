import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { getDocBody, getDocId } from '../../lib/util'
import ReactMarkdown from 'react-markdown'
import { components } from '../../components/CodeBlock'

type DocBody = {
  id: string
  title: string
  content: string
}

export default function Doc({ docBody }: { docBody: DocBody }) {
  return (
    <>
      <div>
        <Header />
        <div className="mx-7">
          <h1>
            <b># {docBody.title}</b>
          </h1>
          <ReactMarkdown
            components={components}
            // eslint-disable-next-line react/no-children-prop
            children={docBody.content}
          ></ReactMarkdown>
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
