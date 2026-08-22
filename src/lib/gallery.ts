import fs from "node:fs";
import path from "node:path";

const exts = new Set([".jpg", ".jpeg", ".png"]);
type Img = { src: string; ts: Date; yearKey: string };

export default function getImagesByCreation(
    subdir: string
): Record<string, Img[]> {
    const imgDir = path.join("public", subdir);
    if (!fs.existsSync(imgDir)) return {};

    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        timeZone: "UTC",
    });

    const imgs: Img[] = fs
        .readdirSync(imgDir)
        .filter((f) => exts.has(path.extname(f).toLowerCase()))
        .sort((a, b) => b.localeCompare(a))
        .map((f) => {
            const dateMatch = f.match(/^(\d{4}-\d{2}-\d{2}_\d{6})/);
            let ts = new Date();

            if (dateMatch) {
                const ds = dateMatch[1]
                    .replace("_", "T")
                    .replace(/(\d{2})(\d{2})$/, ":$1:$2");
                ts = new Date(ds);
            }

            const yearKey = formatter.format(ts);
            return { src: `/art/${f}`, ts, yearKey };
        });

    return imgs.reduce<Record<string, Img[]>>((acc, img) => {
        (acc[img.yearKey] ||= []).push(img);
        return acc;
    }, {});
}
