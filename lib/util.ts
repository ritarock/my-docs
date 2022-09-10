import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { TDoc } from '../interfaces'

const BUILD_DOCS_DIR = path.join(process.cwd(), 'docs')

export function getSortedDocs() {
  const fileNames = fs.readdirSync(BUILD_DOCS_DIR)
  const allData: TDoc[] = fileNames.map((fileName) => {
    const fullPath = path.join(BUILD_DOCS_DIR, fileName)
    const f = fs.readFileSync(fullPath, 'utf8')
    const m = matter(f)
    return {
      title: m.data.title.toString(),
      date: +m.data.date,
      tags: m.data.tags,
    }
  })

  return allData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getTagPaths() {
  const allData = getSortedDocs()
  const tags = Array.from(new Set(allData.flatMap((data) => data.tags)))

  return tags.map((tag) => {
    return {
      params: {
        tag: tag,
      },
    }
  })
}

export function getDocId() {
  const allData = getSortedDocs()
  const ids = Array.from(new Set(allData.flatMap((data) => data.date)))

  return ids.map((id) => {
    return {
      params: {
        id: String(id),
      },
    }
  })
}

export async function getDocBody(id: string) {
  const fullPath = path.join(BUILD_DOCS_DIR, `${id}.md`)
  const contents = fs.readFileSync(fullPath, 'utf8')
  const contentObject = matter(contents)

  return {
    id: id,
    title: contentObject.data.title,
    body: contentObject.content,
  }
}
