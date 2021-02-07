import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import reactRender from 'remark-react';

const articlesDirectory = path.join(process.cwd(), 'articles');

export function getSortedArticlesData(): {
  id: string;
}[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allArticlesData.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllArticleIds(): {
  params: {
    id: string;
  };
}[] {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getArticleData(
  id: string
): Promise<{
  id: string;
  contentHtml: any;
}> {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(reactRender)
    .process(matterResult.content);

  const contentHtml = processedContent.contents;

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
