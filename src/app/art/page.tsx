import Image from "next/image";
import PageShell from "@/components/page-shell";
import getImagesByCreation from "@/lib/gallery";

export default function ArtPage() {
    const images = getImagesByCreation("art");
    const dateKeys = Object.keys(images).reverse();

    return (
        <PageShell>
            <header className="font-title text-left text-4xl font-semibold tracking-tight text-(--deep-teal) sm:text-5xl">
                art
            </header>
            <div className="justify-left items-left">
                {dateKeys.map((day) => (
                    <section key={day}>
                        <h2 className="mt-8 mb-4 text-lg font-semibold text-(--rosy-taupe)">
                            {day}
                        </h2>
                        <div className="mx-5 flex flex-wrap gap-3">
                            {images[day].map((img) => (
                                <Image
                                    key={img.src}
                                    src={img.src}
                                    alt=""
                                    width={450} // required by next/image but ignored when class sets size
                                    height={0}
                                    className="max-h-62.5 w-auto rounded-lg object-contain"
                                    loading="eager"
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </PageShell>
    );
}
