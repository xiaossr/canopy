import Navbar from "@/app/navbar";
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Footer from "@/app/footer";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function WritingPage() {
    const entries = getAllPosts("thoughts");

    return (
        <div className="mx-auto min-h-screen max-w-4xl px-6 py-10 font-sans sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
                    <header className="font-title mb-8 text-left text-4xl font-semibold tracking-tight text-[color:var(--deep-teal)] sm:text-5xl">
                        writings
                    </header>
                    <p className="mb-10 text-base leading-7 text-[color:var(--ink)]">
                        Notes, half-formed ideas, and things I wanted to write
                        down before I forgot them.
                    </p>
                    <ul className="flex flex-col gap-10">
                        {entries.map((post) => (
                            <li key={post.slug} className="flex flex-col gap-2">
                                <h2 className="text-lg font-semibold">
                                    <Link
                                        href={`/thoughts/${post.slug}`}
                                        className="text-[color:var(--deep-teal)] underline decoration-[color:var(--thistle)] hover:decoration-[color:var(--rosy-taupe)]"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>
                                <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--rosy-taupe)]">
                                    <time dateTime={post.date}>
                                        {post.date}
                                    </time>
                                    {post.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border px-2 py-0.5 text-[color:var(--muted)]"
                                            style={{
                                                borderColor: "var(--rule)",
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-base leading-7 text-[color:var(--ink)]">
                                    {post.summary}
                                </p>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
            <Footer />
        </div>
    );
}
