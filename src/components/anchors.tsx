"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LeafIcon from "@/components/leaf-icon";

const items = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "art", href: "/art" },
    { label: "thoughts", href: "/thoughts" },
];

function NavLink({
    href,
    label,
    active,
}: {
    href: string;
    label: string;
    active: boolean;
}) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={`group inline-flex items-center gap-2 transition-colors ${
                active
                    ? "font-medium text-(--deep-teal)"
                    : "text-(--muted) hover:text-(--deep-teal)"
            }`}
        >
            <span
                className={`transition-colors ${
                    active
                        ? "text-(--rosy-taupe)"
                        : "text-(--palm-leaf) group-hover:text-(--rosy-taupe)"
                }`}
            >
                <LeafIcon />
            </span>
            <span
                className={`underline underline-offset-4 ${
                    active
                        ? "decoration-(--thistle)"
                        : "decoration-transparent group-hover:decoration-(--thistle)"
                }`}
            >
                {label}
            </span>
        </Link>
    );
}

export default function AnchorGutter() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href));

    return (
        <>
            <nav className="border-rule mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-b pb-4 text-sm lg:hidden">
                {items.map((it) => (
                    <NavLink
                        key={it.label}
                        href={it.href}
                        label={it.label}
                        active={isActive(it.href)}
                    />
                ))}
            </nav>

            <aside className="sticky top-24 hidden self-start select-none lg:block">
                <div className="relative pl-6">
                    <nav className="flex flex-col gap-3 text-sm">
                        {items.map((it) => (
                            <NavLink
                                key={it.label}
                                href={it.href}
                                label={it.label}
                                active={isActive(it.href)}
                            />
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
}
