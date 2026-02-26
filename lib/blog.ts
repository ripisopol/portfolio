import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export type PostMeta = {
  slug:    string;
  title:   string;
  date:    string;
  excerpt: string;
  tags:    string[];
  draft:   boolean;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw  = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title:   data.title   || slug,
        date:    data.date    || "",
        excerpt: data.excerpt || "",
        tags:    data.tags    || [],
        draft:   data.draft   || false,
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title:   data.title   || slug,
    date:    data.date    || "",
    excerpt: data.excerpt || "",
    tags:    data.tags    || [],
    draft:   data.draft   || false,
    content,
  };
}
