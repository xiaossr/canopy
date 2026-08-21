"use client"

import Link from "next/link";
import { LeafIcon } from "@/app/anchors";

const links = [
    { href: "mailto:txw@mit.edu", label: "email" },
    { href: "https://www.linkedin.com/in/tina-x-wang/", label: "linkedin" },
    { href: "https://github.com/xiaossr", label: "github" }
];

export default function Navbar() {

    return (
        <header className="sticky relative flex justify-between items-center top-0 bg-background opacity-90 z-50 p-3 mb-16 w-full">
            <Link href="/" className="transition-colors text-[color:var(--deep-teal)] hover:text-[color:var(--palm-leaf)]">canopy .☘︎ ݁˖</Link>
            <nav className="gap-x-15">
                {links.map(({href, label} : {href: string, label: string}) => (
                    <Link key={href} href={href}
                        className={`text-sm mx-3 transition-colors text-[color:var(--deep-teal)] hover:text-[color:var(--palm-leaf)]`}>
                        {label}
                    </Link>
                ))}
            </nav>
            <div className="pointer-events-none absolute left-0 right-0 bottom-0">
                <div className="h-px w-full" style={{ background: "var(--rule)" }} />
                <span className="absolute left-6 -bottom-1.5 text-[color:var(--palm-leaf)]">
                    <LeafIcon className="w-3 h-3" />
                </span>
                <span className="absolute left-1/3 -bottom-1 rotate-12 text-[color:var(--rule)]">
                    <LeafIcon className="w-2.5 h-2.5" />
                </span>
                <span className="absolute right-10 -bottom-1.5 -rotate-12 text-[color:var(--palm-leaf)]">
                    <LeafIcon className="w-3 h-3" />
                </span>
            </div>
        </header>
    );
}