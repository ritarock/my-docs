import Header from "@/app/_components/header";
import {getDocContents, getDocIDs } from "@/lib/api";
import ReactMarkdown from "react-markdown"
import reactGfm from "remark-gfm"

export async function generateStaticParams() {
  const docs = getDocIDs()

  return docs.map((doc) => ({
    id: doc.id
  }))
}

export default async function Doc({ params }: { params: { id: string } }) {
  const doc = await getDocContents(params.id)

  return (
    <>
      <Header />
      <h1>
        <b># {doc.title}</b>
      </h1>
      <ReactMarkdown
        components={{
        }}
        remarkPlugins={[reactGfm]}
      >
        {doc.body}
      </ReactMarkdown>
    </>
  )
}
