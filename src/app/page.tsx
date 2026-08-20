import Navbar from "@/app/navbar"
import SplashCursor from "@/app/splashcursor";
import Link from "next/link";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen mx-auto p-8 pb-20 gap-16 sm:p-20">
        <Navbar />
        <SplashCursor />
        <main className="flex flex-col gap-[32px] row-start-2 sm:items-start align-left">
            <header className="text-8xl font-title font-bold text-left">TiNA WANG.</header>
            <section className="font-sans text-lg w-xl px-4">
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
            <div className="flex justify-between font-sans text-md w-xl px-4">
                <Link 
                    href="mailto:txw@mit.edu"
                    className="hover:opacity-80 underline"
                >
                    email
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/tina-x-wang/"
                    className="hover:opacity-80 underline"
                >
                    linkedin
                </Link>
                <Link 
                    href="https://www.instagram.com/tina.waang/"
                    className="hover:opacity-80 underline"
                >
                    instagram
                </Link>
                <Link 
                    href="https://github.com/xiaossr"
                    className="hover:opacity-80 underline"
                >
                    github
                </Link>
            </div>
        </main>
        <Footer />
    </div>
  );
}
