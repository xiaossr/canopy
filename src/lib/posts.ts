import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostType = "projects" | "thoughts";
function get_post_dir(post_type: PostType): string {
    return path.join(process.cwd(), "src", "content", post_type as string);
}

export type Post = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
};

export function getAllPosts(post_type: PostType): Post[] {
    const POSTS_DIR = get_post_dir(post_type);
    if (!fs.existsSync(POSTS_DIR)) return [];

    const files = fs.readdirSync(POSTS_DIR);

    const posts = files
        .filter((file) => path.extname(file).toLowerCase() === ".md")
        .map((file) => {
            const slug = file.replace(/\.md$/, "");
            const filePath = path.join(POSTS_DIR, file);
            const fileContents = fs.readFileSync(filePath, "utf8");

            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? "",
                summary: data.summary ?? "",
                tags: data.tags ?? [],
                content,
            };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    return posts;
}

export function getPostBySlug(post_type: PostType, slug: string): Post | null {
    const POSTS_DIR = get_post_dir(post_type);
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        summary: data.summary ?? "",
        tags: data.tags ?? [],
        content,
    };
}
