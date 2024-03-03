import Header from "@/app/_components/header";
import {getDocContents, getDocIDs } from "@/lib/api";
import ReactMarkdown from "react-markdown"
import reactGfm from "remark-gfm"
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

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
          code({ className, children }) {
            if (!className) return (<></>)
            const name = className.replace('language-', '')
            const lang: { name: string; setLang: string } = { name: '', setLang: '' }
            lang.name = name.match(/\./) ? name.split('.')[1] : name

            switch (lang.name) {
              case 'go':
                lang.setLang = 'go'
                break
              case 'js':
              case 'javascript':
                lang.setLang = 'javascript'
                break
            }


            return (
              <>
                <code className={className}>
                  <SyntaxHighlighter
                    style={monokai}
                    language={lang.setLang}
                  >
                    {children!.toString().replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </code>
              </>
            )
          }
        }}
        remarkPlugins={[reactGfm]}
      >
        {doc.body}
      </ReactMarkdown>
    </>
  )
}
