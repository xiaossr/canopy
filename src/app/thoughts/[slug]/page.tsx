import Navbar from "@/app/navbar";
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
    const thoughts = getAllPosts("thoughts");
    return thoughts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug("thoughts", slug);
    return {
        title: post ? `${post.title} — canopy` : "canopy",
        description: post?.summary,
    };
}

const mdxComponents = {
    p: (props: React.ComponentProps<"p">) => <p className="mb-6" {...props} />,
    h2: (props: React.ComponentProps<"h2">) => (
        <h2 className="mt-8 mb-4 text-2xl font-bold" {...props} />
    ),
    a: ({ href, children, ...props }: React.ComponentProps<"a">) => (
        <Link
            href={href as string}
            className="text-sm text-(--muted) underline decoration-(--thistle) hover:text-(--deep-teal) hover:decoration-(--rosy-taupe)"
            {...props}
        >
            {children}
        </Link>
    ),
    img: ({ src, alt }: React.ComponentProps<"img">) => (
        <div className="relative my-8 h-100 w-full">
            <Image
                src={(src as string) || ""}
                alt={(alt as string) || ""}
                width={450} // required by next/image but ignored when class sets size
                height={0}
                className="max-h-62.5 w-auto rounded-lg object-contain"
                loading="eager"
            />
        </div>
    ),
};

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug("thoughts", slug);

    if (!post) notFound();

    return (
        <div className="mx-auto min-h-screen max-w-4xl px-6 py-10 font-sans sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
                    <article className="mt-6">
                        <h1 className="font-title text-3xl font-semibold tracking-tight text-(--deep-teal) sm:text-4xl">
                            {post.title}
                        </h1>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-(--rosy-taupe)">
                            <time dateTime={post.date}>{post.date}</time>
                            {post.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border px-2 py-0.5 text-(--muted)"
                                    style={{ borderColor: "var(--rule)" }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 font-serif text-lg leading-8 text-(--ink)">
                            <MDXRemote
                                source={post.content}
                                components={mdxComponents}
                            />
                        </div>
                    </article>
                    <Link
                        href="/thoughts"
                        className="text-sm text-(--muted) underline decoration-(--thistle) hover:text-(--deep-teal) hover:decoration-(--rosy-taupe)"
                    >
                        back to writings
                    </Link>
                </main>
            </div>
            <Footer />
        </div>
    );
}
