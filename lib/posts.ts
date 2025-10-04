import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'docs');

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // 簡易的なメタデータ抽出（--- で囲まれた部分）
      const metadataMatch = fileContents.match(/^---\n([\s\S]*?)\n---/);
      const metadata: Record<string, string> = {};
      if (metadataMatch) {
        metadataMatch[1].split('\n').forEach((line) => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim();
          }
        });
      }

      const content = fileContents.replace(/^---\n[\s\S]*?\n---\n/, '');

      // tagsを配列として抽出
      let tags: string[] = [];
      if (metadata.tags) {
        try {
          // ['golang'] のような形式をパース
          const tagsStr = metadata.tags.replace(/'/g, '"');
          tags = JSON.parse(tagsStr);
        } catch {
          tags = [];
        }
      }

      // 日付をYYYYMMDDHHmmss形式からYYYY-MM-DD形式に変換
      let formattedDate = metadata.date || '';
      if (formattedDate.length >= 8) {
        const year = formattedDate.substring(0, 4);
        const month = formattedDate.substring(4, 6);
        const day = formattedDate.substring(6, 8);
        formattedDate = `${year}-${month}-${day}`;
      }

      return {
        slug,
        title: metadata.title || slug,
        date: formattedDate,
        tags,
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getAllTags(): string[] {
  const posts = getPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet);
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = getPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  const htmlContent = await markdownToHtml(post.content);

  return {
    ...post,
    content: htmlContent,
  };
}
