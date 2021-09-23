import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  className?: string
  inline?: boolean
  children?: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const components = {
  code({ inline, className, children, ...props }: Props): JSX.Element {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <SyntaxHighlighter
        style={monokai}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')} // eslint-disable-line react/no-children-prop
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}
