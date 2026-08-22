import Link from "next/link";
import PageShell from "@/components/page-shell";
import PostMeta from "@/components/post-meta";
import { getAllPosts, type PostType } from "@/lib/posts";

export default function PostIndex({
    type,
    title,
    intro,
}: {
    type: PostType;
    title: string;
    intro: string;
}) {
    const entries = getAllPosts(type);

    return (
        <PageShell>
            <header className="font-title text-deep-teal mb-8 text-left text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
            </header>
            <p className="text-ink mb-10 text-base leading-7">{intro}</p>
            <ul className="flex flex-col gap-10">
                {entries.map((post) => (
                    <li key={post.slug} className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold">
                            <Link
                                href={`/${type}/${post.slug}`}
                                className="text-deep-teal underline decoration-(--thistle) hover:decoration-(--rosy-taupe)"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <PostMeta date={post.date} tags={post.tags} />
                        <p className="text-ink text-base leading-7">
                            {post.summary}
                        </p>
                    </li>
                ))}
            </ul>
        </PageShell>
    );
}
