"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "art", href: "/art" },
  { label: "thoughts", href: "/thoughts" },
];

export function LeafIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.8 3.2c-4.3 0-7.9 2.7-9.7 6.6-.4.9-.7 1.8-.8 2.7-1.4-.7-3.1-1-4.9-.7-1 .2-2 .6-2.8 1.2-.3.2-.4.6-.2.9.2.3.6.4.9.2.7-.4 1.5-.8 2.3-1 .9-.2 1.8-.3 2.6-.2-1.1 1.3-2.6 2.5-4.6 3.2-.3.1-.5.4-.4.8.1.3.4.5.8.4 2.7-.9 4.6-2.5 5.9-4 0 0 0 0 0 0 .1 1 .4 1.9.8 2.7 1.8 3.9 5.4 6.6 9.7 6.6.4 0 .7-.3.7-.7 0-4.3-2.7-7.9-6.6-9.7-.9-.4-1.8-.7-2.7-.8 0 0 0 0 0 0 1.5-1.6 4.1-3.4 7.9-3.4.4 0 .7-.3.7-.7s-.3-.7-.7-.7Z" />
    </svg>
  );
}

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
          ? "text-[color:var(--deep-teal)] font-medium"
          : "text-[color:var(--muted)] hover:text-[color:var(--deep-teal)]"
      }`}
    >
      <span
        className={`transition-colors ${
          active
            ? "text-[color:var(--rosy-taupe)]"
            : "text-[color:var(--palm-leaf)] group-hover:text-[color:var(--rosy-taupe)]"
        }`}
      >
        <LeafIcon />
      </span>
      <span
        className={`underline underline-offset-4 ${
          active
            ? "decoration-[color:var(--thistle)]"
            : "decoration-transparent group-hover:decoration-[color:var(--thistle)]"
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
      <nav
        className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-b pb-4 text-sm lg:hidden"
        style={{ borderColor: "var(--rule)" }}
      >
        {items.map((it) => (
          <NavLink
            key={it.label}
            href={it.href}
            label={it.label}
            active={isActive(it.href)}
          />
        ))}
      </nav>

      <aside className="hidden lg:block sticky top-24 self-start select-none">
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
