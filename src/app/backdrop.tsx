export default function Backdrop() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
                <filter id="paper-grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#paper-grain)" />
            </svg>

            <svg
                viewBox="0 0 200 200"
                className="absolute -right-16 -bottom-16 h-[26rem] w-[26rem] text-[color:var(--deep-teal)] opacity-[0.13] sm:h-[34rem] sm:w-[34rem]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            >
                <path d="M30 190C30 190 60 120 100 80C140 40 175 25 175 25" />
                <path
                    d="M96 86C96 86 84 66 62 62C68 82 84 92 96 86Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M104 74C104 74 100 50 80 38C80 60 92 76 104 74Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M118 62C118 62 118 38 102 22C98 44 108 62 118 62Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M110 92C110 92 132 84 142 62C120 62 108 78 110 92Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M124 78C124 78 148 74 162 54C140 50 124 64 124 78Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M82 104C82 104 62 96 40 100C56 114 74 114 82 104Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M68 128C68 128 48 124 28 132C46 144 62 140 68 128Z"
                    fill="currentColor"
                    stroke="none"
                />
                <path
                    d="M92 116C92 116 114 110 126 90C104 88 92 102 92 116Z"
                    fill="currentColor"
                    stroke="none"
                />
            </svg>
        </div>
    );
}
