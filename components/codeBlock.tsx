import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type Props = {
  className?: string
  inline?: boolean
  children?: unknown
}

export const components = {
  code({ inline, className, children, ...props }: Props) {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <SyntaxHighlighter
        style={monokai}
        language={match[1]}
        PreTag="div"
        // eslint-disable-next-line react/no-children-prop
        children={children.toString().replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children.toString()}
      </code>
    )
  },
}
