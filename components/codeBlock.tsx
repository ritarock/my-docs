import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const components = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  code({ node, inline, className, children, ...props }: { // eslint-disable-line @typescript-eslint/no-unused-vars
    node: any
    inline: any
    className: any
    children: any
    props: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
  }): JSX.Element {
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
