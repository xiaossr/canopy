import PageShell from "@/components/page-shell";

export default function Home() {
    return (
        <PageShell mainClassName="flex max-w-3xl flex-col gap-8 sm:items-start">
            <header className="font-title text-deep-teal text-left text-4xl font-semibold tracking-tight sm:text-5xl">
                tina wang
            </header>
            <section className="text-ink font-sans text-base leading-7">
                <p className="my-5">
                    Hi! I&apos;m Tina, and I&apos;m currently a junior at MIT
                    studying computer science and engineering. I&apos;m
                    interested in systems, AI, and works that intersect computer
                    science and other fields. Before this, I represented the USA
                    at the European Girls&apos; Olympiad in Informatics.
                </p>
                <p className="my-5">
                    My goal is to experience myriads of different perspectives
                    and ideas (and to share my own as well!).
                </p>
            </section>
        </PageShell>
    );
}
