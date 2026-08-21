export type Post = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    body: string[];
};

export const posts: Post[] = [
    // {
    //     slug: "on-growing-a-website",
    //     title: "on growing a website",
    //     date: "2025-08-20",
    //     summary:
    //         "Why I rebuilt this place around a vine instead of a grid, and what that changed about how I write here.",
    //     tags: ["design", "notes"],
    //     body: [
    //         "I used to think of a personal site as a container: a box you pour things into, sorted by type. Projects here, art there, words somewhere near the bottom. It worked, in the way a filing cabinet works.",
    //         "The trouble with a filing cabinet is that it does not suggest anything. You open it because you already know what you want. Nothing about it invites you to wander, and nothing about it grows.",
    //         "So this version is built around a vine instead. It runs down the left margin of every page and draws itself as you scroll, which means the shape of the page is legible before you read a word of it. A short page is a sprig. A long one is a whole climbing stem.",
    //         "It is a small thing, and it is mostly decorative. But it changed how I write here. Knowing the vine is measuring me makes me want to earn the length.",
    //     ],
    // },
    {
        slug: "placeholder",
        title: "placeholder",
        date: "2025-07-02",
        summary:
            "placeholding",
        tags: ["temp1", "temp2"],
        body: [
            "placeholding.",
        ],
    },
];

export function getPost(slug: string) {
    return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
    return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
