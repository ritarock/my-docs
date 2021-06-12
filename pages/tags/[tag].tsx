import Header from '../../components/header'
import TitleView from '../../components/titleVIew'
import { getIndex, getTags } from '../../lib/utils'
import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Tags({
  articleData,
}: {
  articleData: {
    id: number
    title: string
    tags: string[]
  }[]
}): JSX.Element {
  const router = useRouter()

  const filterdArticleData = articleData.filter((e) =>
    e.tags.includes(String(router.query.tag))
  )

  return (
    <>
      <div>
        <Header />
        <p className="mx-3">Tags:</p>
        <p className="mx-5">{router.query.tag}</p>
        <hr />
        <p className="mx-3">Articles:</p>
        <TitleView articleData={filterdArticleData} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTags()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const articleData = getIndex()

  return {
    props: {
      articleData,
    },
  }
}
