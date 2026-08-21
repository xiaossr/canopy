import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostType = "projects" | "thoughts";

function getPostDir(postType: PostType): string {
    return path.join(process.cwd(), "src", "content", postType);
}

export type Post = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
};

function parsePost(slug: string, fileContents: string): Post {
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

export function getAllPosts(postType: PostType): Post[] {
    const postsDir = getPostDir(postType);
    if (!fs.existsSync(postsDir)) return [];

    return fs
        .readdirSync(postsDir)
        .filter((file) => path.extname(file).toLowerCase() === ".md")
        .map((file) =>
            parsePost(
                file.replace(/\.md$/, ""),
                fs.readFileSync(path.join(postsDir, file), "utf8")
            )
        )
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type PostRouteProps = { params: Promise<{ slug: string }> };

export function getPostParams(postType: PostType) {
    return getAllPosts(postType).map((p) => ({ slug: p.slug }));
}

export async function getPostMetadata(
    postType: PostType,
    params: PostRouteProps["params"]
) {
    const { slug } = await params;
    const post = getPostBySlug(postType, slug);
    return {
        title: post ? `${post.title} — canopy` : "canopy",
        description: post?.summary,
    };
}

export function getPostBySlug(postType: PostType, slug: string): Post | null {
    const filePath = path.join(getPostDir(postType), `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    return parsePost(slug, fs.readFileSync(filePath, "utf8"));
}
