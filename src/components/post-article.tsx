import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageShell from "@/components/page-shell";
import PostMeta from "@/components/post-meta";
import { linkClassName, mdxComponents } from "@/components/mdx-components";
import { getPostBySlug, type PostType } from "@/lib/posts";

export default function PostArticle({
    type,
    slug,
    backLabel,
}: {
    type: PostType;
    slug: string;
    backLabel: string;
}) {
    const post = getPostBySlug(type, slug);

    if (!post) notFound();

    return (
        <PageShell>
            <article className="mt-6">
                <h1 className="font-title text-3xl font-semibold tracking-tight text-(--deep-teal) sm:text-4xl">
                    {post.title}
                </h1>
                <PostMeta date={post.date} tags={post.tags} className="mt-3" />
                <div className="mt-8 font-serif text-lg leading-8 text-(--ink)">
                    <MDXRemote
                        source={post.content}
                        components={mdxComponents}
                    />
                </div>
            </article>
            <Link href={`/${type}`} className={linkClassName}>
                {backLabel}
            </Link>
        </PageShell>
    );
}
