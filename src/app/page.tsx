import Navbar from "@/app/navbar"
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Link from "next/link";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen mx-auto max-w-5xl px-6 py-10 sm:py-16">
        <Navbar />
        <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <PageVine />
          <AnchorGutter />
          <main className="flex flex-col gap-8 sm:items-start max-w-3xl">
            <header className="font-title text-4xl sm:text-5xl font-semibold tracking-tight text-left text-[color:var(--deep-teal)]">tina wang</header>
            <section className="font-sans text-base leading-7 text-[color:var(--ink)]">
                <p className="my-5">
                    Hi! I&apos;m Tina, and I&apos;m a computer science major especially interested in systems
                    and solving interesting problems. I love exploring the interactions that arise
                    between humans and their environment. Talk to me about anything CS, philosophy,
                    chinese history, art, state-of-the-world :).
                </p>
                <p className="my-5">
                    My dream is to have experienced myriads of different cultures, encounters, tastes, and 
                    everything that the world has to offer, and to produce something in return that grants
                    a new experience or feeling back to the world.
                </p>
            </section>
            <div className="flex flex-wrap gap-6 font-sans text-sm">
                <Link 
                    href="mailto:txw@mit.edu"
                    className="text-[color:var(--muted)] underline decoration-[color:var(--thistle)] hover:text-[color:var(--deep-teal)] hover:decoration-[color:var(--rosy-taupe)]"
                >
                    email
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/tina-x-wang/"
                    className="text-[color:var(--muted)] underline decoration-[color:var(--thistle)] hover:text-[color:var(--deep-teal)] hover:decoration-[color:var(--rosy-taupe)]"
                >
                    linkedin
                </Link>
                <Link 
                    href="https://github.com/xiaossr"
                    className="text-[color:var(--muted)] underline decoration-[color:var(--thistle)] hover:text-[color:var(--deep-teal)] hover:decoration-[color:var(--rosy-taupe)]"
                >
                    github
                </Link>
            </div>
          </main>
        </div>
        <Footer />
    </div>
  );
}
