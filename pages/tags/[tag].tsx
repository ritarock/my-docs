import Header from '../../components/header'
import TitleView from '../../components/titleVIew'

import {getIndex, getTags} from '../../lib/utils'
import React from 'react';
import { useRouter } from 'next/router';

export default function Tags({
  articleData
}: {
  articleData: {
    id: number
    title: string
    tags: string[]
  }[],
}): JSX.Element {
  const router = useRouter()
  console.log([String(router.query.tag)])
  console.log(router.query.tag)

  const filterdArticleData = articleData.filter(
    e => e.tags.includes(router.query.tag)
  )

  return (
    <div>
      <Header />
      {router.query.tag}
      <TitleView articleData={filterdArticleData} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = getTags()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async () => {
  const articleData = getIndex()

  return {
    props: {
      articleData,
    }
  }
}
