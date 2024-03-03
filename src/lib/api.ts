import { DocMetaData } from "@/interface";
import { time } from "console";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BUILD_DOCS_DIR = path.join(process.cwd(), '_docs')

export function getAllDocs() {
  const fileNames = fs.readdirSync(BUILD_DOCS_DIR)
  const data: DocMetaData[] = fileNames.map(fileName => {
    const fullPath = path.join(BUILD_DOCS_DIR, fileName)
    const f = fs.readFileSync(fullPath, 'utf8')
    const m = matter(f)
    return {
      title: m.data.title.toString(),
      date: +m.data.date,
      tags: m.data.tags,
    }
  })

  return data.sort((a, b) => a.date < b.date ? 1 : -1)
}

export function getDocIDs() {
  const data = getAllDocs()
  const ids = data.flatMap(d => d.date)

  return ids.map(id => {
    return {
      id: id.toString()
    }
  })
}

export async function getDocContents(id: string) {
  const fullPath = path.join(BUILD_DOCS_DIR, `${id}.md`)
  const f = fs.readFileSync(fullPath, 'utf8')
  const m = matter(f)

  return {
    id: id,
    title: m.data.title,
    body: m.content,
  }
}
