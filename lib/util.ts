import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {TDocMetaData} from '../interfaces'

const BUILD_DOCS_DIR = path.join(process.cwd(), 'docs')

export function getSortedDocs(): TDocMetaData[] {
  const fileNames = fs.readdirSync(BUILD_DOCS_DIR)
  const data: TDocMetaData[] = fileNames.map(fileName => {
    const fullPath = path.join(BUILD_DOCS_DIR, fileName)
    const f = fs.readFileSync(fullPath, 'utf8')
    const m = matter(f)
    return {
      title: m.data.title.toString(),
      date: +m.data.date,
      tags: m.data.tags,
    }
  })

  return data.sort((a,b)=> {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getDocId() {
  const data = getSortedDocs()
  const ids = data.flatMap(d => d.date)

  return ids.map(id => {
    return {
      params: { id: id.toString() }
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
    body: m.content
  }
}

export function getTagPaths() {
  const data = getSortedDocs()
  const tags = data.flatMap(d=>d.tags)

  return tags.map(tag => {
    return {
      params: { tag: tag }
    }
  })
}
