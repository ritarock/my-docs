import fs from 'fs'
import path from 'path'

const BUILD_ARTICLES_DIR = path.join(process.cwd(), 'build-articles')

export function getArticlesData() {
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
