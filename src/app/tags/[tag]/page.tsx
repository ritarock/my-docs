import Header from "@/app/_components/header";
import TitleList from "@/app/_components/title-list";
import { getAllDocs } from "@/lib/api";

export async function generateStaticParams() {
  const docs = getAllDocs()
  const tags = Array.from(new Set(docs.flatMap(d => d.tags)))

  return tags.map(tag => ({
    tag: tag
  }))
}

export default async function Tag({ params }: { params: { tag: string }}) {
  const allDocs = getAllDocs()
  const filteredDocs = allDocs.filter(doc => doc.tags.includes(params.tag))

  return (
    <>
      <Header />
      <span>Tag: </span>
      <div>{params.tag}</div>
      <hr />
      <TitleList docs={filteredDocs} />
    </>
  )
}
