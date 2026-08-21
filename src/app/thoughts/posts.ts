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
    // {
    //     slug: "notes-on-reading-systems-papers",
    //     title: "notes on reading systems papers",
    //     date: "2025-07-02",
    //     summary:
    //         "A rough method for getting through dense papers without stalling on the first page of related work.",
    //     tags: ["systems", "reading"],
    //     body: [
    //         "The first few systems papers I read, I read like textbooks: front to back, every sentence, refusing to move on until I understood the current one. This is a good way to spend four hours on two pages.",
    //         "What works better for me now is three passes. The first is structural: title, abstract, section headers, every figure and its caption. No prose. At the end of this pass I want one sentence on what the system does and one on what it claims to do better.",
    //         "The second pass is the argument. I read the intro and the evaluation, skipping the middle entirely. The intro tells me what problem the authors think they are solving; the evaluation tells me what they were willing to be measured on. The gap between those two is usually where the interesting part lives.",
    //         "Only on the third pass do I read the design section, and by then I am reading it as an answer to a question I already hold in my head. That is the difference. The mechanism makes sense because I know what it is for.",
    //     ],
    // },
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
