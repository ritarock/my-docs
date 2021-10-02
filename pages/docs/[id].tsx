import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { getDocBody, getDocId } from '../../lib/util'
import ReactMarkdown from 'react-markdown'
import { components } from '../../components/codeBlock'

export default function Doc({
  docData,
}: {
  docData: {
    id: string
    title: string
    content: string
  }
}) {
  return (
    <>
      <div>
        <Header />
        <div className="mx-7">
          <h1>
            <b># {docData.title}</b>
          </h1>
          <ReactMarkdown
            components={components}
            // eslint-disable-next-line react/no-children-prop
            children={docData.content}
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
  const docData = await getDocBody(params.id)

  return {
    props: {
      docData,
    },
  }
}
