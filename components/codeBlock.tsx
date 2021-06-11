import { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  className?: string
  inline?: boolean
  children?: ReactNode
}

export const components = {
  code({ className, inline, children, ...props }: Props ): JSX.Element {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <SyntaxHighlighter
        style={monokai}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')} {...props} // eslint-disable-line react/no-children-prop
      ></SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    )
  }
}
