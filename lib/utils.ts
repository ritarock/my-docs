import fs from 'fs'
import path from 'path'

const BUILD_ARTICLES_DIR = path.join(process.cwd(), 'articles')

export function getIndex(): {
  id: string
  title: string
}[] {
  const summaryPath = path.join(BUILD_ARTICLES_DIR, 'summary.json')
  const readSummary = fs.readFileSync(summaryPath, 'utf-8')
  const jsonParse = JSON.parse(readSummary)
  const data = Object.keys(jsonParse.fileMap).map(e => {
    const [id, title] = [
      jsonParse.fileMap[e].date,
      jsonParse.fileMap[e].title
    ]
    return {
      id,
      title
    }
  })

  return data.sort((a, b) => {
    if (a.id < b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getArticlesIds(): {
  params: {
    id: string
  }
}[] {
  const summaryPath = path.join(BUILD_ARTICLES_DIR, 'summary.json')
  const readSummary = fs.readFileSync(summaryPath, 'utf-8')
  const jsonParse = JSON.parse(readSummary)

  const ids = Object.keys(jsonParse.fileMap).map(e => {
    return jsonParse.fileMap[e].date
  })

  return ids.map(e => {
    return {
      params: {
        id: String(e)
      }
    }
  })
}

export function getArticlesData(id: string): {
  id: string,
  fileContents: string
} {
  const fullPath = path.join(BUILD_ARTICLES_DIR, `${id}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  return {
    id,
    fileContents
  }
}

export function getTags(): string[][] {
  const summaryPath = path.join(BUILD_ARTICLES_DIR, 'summary.json')
  const readSummary = fs.readFileSync(summaryPath, 'utf-8')
  const jsonParse = JSON.parse(readSummary)
  const tags = Object.keys(jsonParse.fileMap).map(e => {
    return jsonParse.fileMap[e].tags
  })

  const set = new Set(tags.flat())

  return Array.from(set)
}
