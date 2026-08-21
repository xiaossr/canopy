import Navbar from "@/app/navbar";
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Footer from "@/app/footer";
import Link from "next/link";

type Project = {
    title: string;
    blurb: string;
    stack: string[];
    href?: string;
    year: string;
};

const projects: Project[] = [
    // {
    //     title: "canopy",
    //     blurb:
    //         "This site. A quiet, editorial space built around a nature palette and a vine that grows as you scroll.",
    //     stack: ["next.js", "tailwind", "svg"],
    //     href: "https://github.com/xiaossr",
    //     year: "2025",
    // },
    {
        title: "placeholder project",
        blurb:
            "placeholder summary.",
        stack: ["temp1", "temp2"],
        year: "2025",
    },
    // {
    //     title: "another placeholder",
    //     blurb:
    //         "Swap these out as you go. Keep each blurb to a sentence or two so the page stays scannable.",
    //     stack: ["c", "systems"],
    //     year: "2024",
    // },
];

export default function ProjectsPage() {
    return (
        <div className="font-sans min-h-screen mx-auto max-w-5xl px-6 py-10 sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
                    <header className="font-title text-4xl sm:text-5xl font-semibold tracking-tight text-left mb-8 text-[color:var(--deep-teal)]">
                        projects
                    </header>
                    <p className="text-base leading-7 text-[color:var(--ink)] mb-10">
                        Things I have built, in various states of finish.
                    </p>
                    <ul className="flex flex-col gap-10">
                        {projects.map((p) => (
                            <li key={p.title} className="flex flex-col gap-2">
                                <div className="flex items-baseline gap-3">
                                    <h2 className="text-lg font-semibold text-[color:var(--deep-teal)]">
                                        {p.href ? (
                                            <Link
                                                href={p.href}
                                                className="underline decoration-[color:var(--thistle)] hover:decoration-[color:var(--rosy-taupe)]"
                                            >
                                                {p.title}
                                            </Link>
                                        ) : (
                                            p.title
                                        )}
                                    </h2>
                                    <span className="text-xs text-[color:var(--rosy-taupe)]">{p.year}</span>
                                </div>
                                <p className="text-base leading-7 text-[color:var(--ink)]">{p.blurb}</p>
                                <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                                    {p.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-full border px-2 py-0.5"
                                            style={{ borderColor: "var(--rule)" }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
            <Footer />
        </div>
    );
}
