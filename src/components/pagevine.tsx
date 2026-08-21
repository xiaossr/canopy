"use client";

import { useEffect, useRef, useState } from "react";
import LeafIcon from "@/components/leaf-icon";

const LEAF_SPACING = 120;
const FIRST_LEAF_OFFSET = 48;

export default function PageVine() {
    const [growth, setGrowth] = useState(0.08);
    const [height, setHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            setHeight(entry.contentRect.height);
        });
        observer.observe(el);
        setHeight(el.getBoundingClientRect().height);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduced) {
            setGrowth(1);
            return;
        }

        let frame = 0;
        const update = () => {
            frame = 0;
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            const ratio = scrollable > 8 ? window.scrollY / scrollable : 1;
            setGrowth(Math.min(1, 0.08 + ratio * 0.92));
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    const leafOffsets: number[] = [];
    for (let y = FIRST_LEAF_OFFSET; y < height - 16; y += LEAF_SPACING) {
        leafOffsets.push(y);
    }
    const drawn = growth * height;

    return (
        <div
            ref={containerRef}
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-3 lg:block"
        >
            <svg
                viewBox="0 0 8 100"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible text-(--rule)"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
            >
                <path
                    d="M4 0C4 0 1 8 4 16C7 24 1 32 4 40C7 48 1 56 4 64C7 72 1 80 4 88C6 94 4 100 4 100"
                    pathLength={1}
                    strokeDasharray={1}
                    strokeDashoffset={1 - growth}
                    className="transition-[stroke-dashoffset] duration-[180ms] ease-linear"
                />
            </svg>
            {leafOffsets.map((offset, i) => (
                <span
                    key={offset}
                    className={`absolute -left-1 text-(--palm-leaf) transition-opacity duration-500 ${
                        drawn >= offset ? "opacity-70" : "opacity-0"
                    }`}
                    style={{
                        top: `${offset}px`,
                        transform: `rotate(${i % 2 === 0 ? -18 : 18}deg)`,
                    }}
                >
                    <LeafIcon className="h-3 w-3" />
                </span>
            ))}
        </div>
    );
}
