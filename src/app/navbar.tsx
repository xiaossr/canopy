"use client";

import Link from "next/link";
import { LeafIcon } from "@/app/anchors";

const links = [
    { href: "mailto:txw@mit.edu", label: "email" },
    { href: "https://www.linkedin.com/in/tina-x-wang/", label: "linkedin" },
    { href: "https://github.com/xiaossr", label: "github" },
];

export default function Navbar() {
    return (
        <header className="bg-background relative top-0 z-50 mb-16 flex w-full items-center justify-between p-3 opacity-90">
            <Link
                href="/"
                className="text-(--deep-teal) transition-colors hover:text-(--palm-leaf)"
            >
                canopy .☘︎ ݁˖
            </Link>
            <nav className="gap-x-15">
                {links.map(
                    ({ href, label }: { href: string; label: string }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`mx-3 text-sm text-(--deep-teal) transition-colors hover:text-(--palm-leaf)`}
                        >
                            {label}
                        </Link>
                    )
                )}
            </nav>
            <div className="pointer-events-none absolute right-0 bottom-0 left-0">
                <div
                    className="h-px w-full"
                    style={{ background: "var(--rule)" }}
                />
                <span className="absolute -bottom-1.5 left-6 text-(--palm-leaf)">
                    <LeafIcon className="h-3 w-3" />
                </span>
                <span className="absolute -bottom-1 left-1/3 rotate-12 text-(--rule)">
                    <LeafIcon className="h-2.5 w-2.5" />
                </span>
                <span className="absolute right-10 -bottom-1.5 -rotate-12 text-(--palm-leaf)">
                    <LeafIcon className="h-3 w-3" />
                </span>
            </div>
        </header>
    );
}
