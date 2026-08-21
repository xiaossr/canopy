import Link from "next/link";
import Image from "next/image";

export const linkClassName =
    "text-sm text-(--muted) underline decoration-(--thistle) hover:text-(--deep-teal) hover:decoration-(--rosy-taupe)";

export const mdxComponents = {
    p: (props: React.ComponentProps<"p">) => <p className="mb-6" {...props} />,
    h2: (props: React.ComponentProps<"h2">) => (
        <h2 className="mt-8 mb-4 text-2xl font-bold" {...props} />
    ),
    a: ({ href, children, ...props }: React.ComponentProps<"a">) => (
        <Link href={href as string} className={linkClassName} {...props}>
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
