import Navbar from "@/app/navbar";
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Footer from "@/app/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/app/thoughts/posts";

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);
    return {
        title: post ? `${post.title} — canopy` : "canopy",
        description: post?.summary,
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) notFound();

    return (
        <div className="font-sans min-h-screen mx-auto max-w-5xl px-6 py-10 sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
                    <Link
                        href="/thoughts"
                        className="text-sm text-[color:var(--muted)] underline decoration-[color:var(--thistle)] hover:text-[color:var(--deep-teal)] hover:decoration-[color:var(--rosy-taupe)]"
                    >
                        back to writings
                    </Link>
                    <article className="mt-6">
                        <h1 className="font-title text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--deep-teal)]">
                            {post.title}
                        </h1>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[color:var(--rosy-taupe)]">
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                            {post.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border px-2 py-0.5 text-[color:var(--muted)]"
                                    style={{ borderColor: "var(--rule)" }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 font-serif text-lg leading-8 text-[color:var(--ink)]">
                            {post.body.map((paragraph, i) => (
                                <p key={i} className="mb-6">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </article>
                </main>
            </div>
            <Footer />
        </div>
    );
}
