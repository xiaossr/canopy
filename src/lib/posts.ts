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

// export const thoughts: Post[] = [
//     // {
//     //     slug: "on-growing-a-website",
//     //     title: "on growing a website",
//     //     date: "2025-08-20",
//     //     summary:
//     //         "Why I rebuilt this place around a vine instead of a grid, and what that changed about how I write here.",
//     //     tags: ["design", "notes"],
//     //     body: [
//     //         "I used to think of a personal site as a container: a box you pour things into, sorted by type. Projects here, art there, words somewhere near the bottom. It worked, in the way a filing cabinet works.",
//     //         "The trouble with a filing cabinet is that it does not suggest anything. You open it because you already know what you want. Nothing about it invites you to wander, and nothing about it grows.",
//     //         "So this version is built around a vine instead. It runs down the left margin of every page and draws itself as you scroll, which means the shape of the page is legible before you read a word of it. A short page is a sprig. A long one is a whole climbing stem.",
//     //         "It is a small thing, and it is mostly decorative. But it changed how I write here. Knowing the vine is measuring me makes me want to earn the length.",
//     //     ],
//     // },
//     {
//         slug: "placeholder",
//         title: "placeholder",
//         date: "2025-07-02",
//         summary:
//             "placeholding",
//         tags: ["temp1", "temp2"],
//         body: [
//             "placeholding.",
//         ],
//     },
// ];

// export const projects: Post[] = [
//     {
//         slug: "placeholder",
//         title: "placeholder",
//         date: "2025-07-02",
//         summary:
//             "placeholding",
//         tags: ["temp1", "temp2"],
//         body: [
//             "placeholding.",
//         ],
//     },
//     // {
//     //     title: "canopy",
//     //     blurb:
//     //         "This site. A quiet, editorial space built around a nature palette and a vine that grows as you scroll.",
//     //     stack: ["next.js", "tailwind", "svg"],
//     //     href: "https://github.com/xiaossr",
//     //     year: "2025",
//     // },
//     // {
//     //     title: "another placeholder",
//     //     blurb:
//     //         "Swap these out as you go. Keep each blurb to a sentence or two so the page stays scannable.",
//     //     stack: ["c", "systems"],
//     //     year: "2024",
//     // },
// ];

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
