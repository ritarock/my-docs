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

  const matched = className.toString().replace('language-', '')
  const name = matched

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
    case 'ts':
    case 'typescript':
      lang.setLang = 'typescript'
      break
    case 'py':
    case 'python':
      lang.setLang = 'python'
      break
    case 'bash':
      lang.setLang = 'shell'
      break
    case 'yml':
    case 'yaml':
      lang.setLang = 'yaml'
      break
    case 'rb':
    case 'ruby':
      lang.setLang = 'ruby'
      break
    case 'terraform':
    case 'tf':
      lang.setLang = 'terraform'
      break
    default:
      lang.setLang = 'markdown'
  }

  return (
    <>
      <CodeBlockWrapper>
        <CodeBlockTitle>{lang.name}</CodeBlockTitle>
        <SyntaxHighlighter {...props} style={monokai} language={lang.setLang}>
          {children.toString().replace(/\n$/, '')}
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
  padding: 0.05em;
  color: #000;
`
