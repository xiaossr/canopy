import Navbar from "@/app/navbar"
import AnchorGutter from "@/app/anchors"
import PageVine from "@/app/pagevine";
import Footer from "@/app/footer";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function ProjectsPage() {
    const entries = getAllPosts("projects");

    return (
        <div className="font-sans min-h-screen mx-auto max-w-4xl px-6 py-10 sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
                    <header className="font-title text-4xl sm:text-5xl font-semibold tracking-tight text-left mb-8 text-[color:var(--deep-teal)]">projects</header>
                    <p className="text-base leading-7 text-[color:var(--ink)] mb-10">
                        Things I have built, in various states of finish.
                    </p>
                    <ul className="flex flex-col gap-10">
                        {entries.map((post) => (
                            <li key={post.slug} className="flex flex-col gap-2">
                                <h2 className="text-lg font-semibold">
                                    <Link
                                        href={`/projects/${post.slug}`}
                                        className="text-[color:var(--deep-teal)] underline decoration-[color:var(--thistle)] hover:decoration-[color:var(--rosy-taupe)]"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>
                                <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--rosy-taupe)]">
                                    <time dateTime={post.date}>{post.date}</time>
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
                                <p className="text-base leading-7 text-[color:var(--ink)]">{post.summary}</p>
                            </li>
                        ))}
                    </ul>
            </main>
            </div>
            <Footer />
        </div>
    )
}