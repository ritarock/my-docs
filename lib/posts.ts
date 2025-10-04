import fs from 'fs';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

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

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || '',
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getPosts();
  return posts.find((post) => post.slug === slug) || null;
}
