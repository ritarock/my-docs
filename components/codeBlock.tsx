import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import styled from 'styled-components'

export const CodeBlock: CodeComponent = ({
  inline,
  className,
  children,
  ...props
}) => {
  if (inline) {
    return (
      <>
        <code className={className}>{children}</code>
      </>
    )
  }

  const match = className.toString().replace('language-', '')
  const name = match
  let lang: string
  let setLang: string
  if (name.match(/\./)) {
    lang = name.split('.')[1]
  } else {
    lang = name
  }
  switch (lang) {
    case 'go':
      setLang = 'go'
      break
    case 'js':
    case 'javascript':
      setLang = 'javascript'
      break
    case 'ts':
    case 'typescript':
      setLang = 'typescript'
      break
    case 'py':
    case 'python':
      setLang = 'python'
      break
    case 'bash':
      setLang = 'shell'
      break
    case 'yml':
    case 'yaml':
      setLang = 'yaml'
      break
    case 'rb':
    case 'ruby':
      setLang = 'ruby'
      break
    default:
      setLang = 'markdown'
      break
  }

  return (
    <>
      <CodeBlockWrapper>
        <CodeBlockTitle>{name}</CodeBlockTitle>
        <SyntaxHighlighter style={monokai} language={setLang} {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </CodeBlockWrapper>
    </>
  )
}

const CodeBlockWrapper = styled.div`
  position: relative;
`

const CodeBlockTitle = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ccc;
  padding: 0.10em;
  color: #000;
`
