import Navbar from "@/app/navbar"
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen mx-auto max-w-4xl px-6 py-10 sm:py-16">
        <Navbar />
        <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <PageVine />
          <AnchorGutter />
          <main className="flex flex-col gap-8 sm:items-start max-w-3xl">
            <header className="font-title text-4xl sm:text-5xl font-semibold tracking-tight text-left text-[color:var(--deep-teal)]">tina wang</header>
            <section className="font-sans text-base leading-7 text-[color:var(--ink)]">
                <p className="my-5">
                    Hi! I&apos;m Tina, and I&apos;m currently a junior at MIT studying computer science and engineering.
                    I&apos;m interested in systems, AI, and works that intersect computer science and other fields. Before this,
                    I represented the USA at the European Girls&apos; Olympiad in Informatics.
                </p>
                <p className="my-5">
                    My goal is to experience myriads of different perspectives and ideas (and to share my own as well!).
                </p>
            </section>
          </main>
        </div>
        <Footer />
    </div>
  );
}
