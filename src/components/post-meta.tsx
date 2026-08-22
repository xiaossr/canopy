import type { Post } from "@/lib/posts";

export default function PostMeta({
    date,
    tags,
    className = "",
}: Pick<Post, "date" | "tags"> & { className?: string }) {
    return (
        <div
            className={`text-rosy-taupe flex flex-wrap items-center gap-3 text-xs ${className}`}
        >
            <time dateTime={date}>{date}</time>
            {tags.map((t) => (
                <span
                    key={t}
                    className="border-rule text-muted rounded-full border px-2 py-0.5"
                >
                    {t}
                </span>
            ))}
        </div>
    );
}
