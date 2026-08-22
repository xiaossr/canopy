import Image from "next/image";
import PageShell from "@/components/page-shell";
import getImagesByCreation from "@/lib/gallery";

export default function ArtPage() {
    const images = getImagesByCreation("art");
    const yearKeys = Object.keys(images).reverse();

    return (
        <PageShell>
            <header className="font-title text-deep-teal text-left text-4xl font-semibold tracking-tight sm:text-5xl">
                art
            </header>
            <div className="justify-left items-left">
                {yearKeys.map((year) => (
                    <section key={year}>
                        <h2 className="text-rosy-taupe mt-8 mb-4 text-lg font-semibold">
                            {year}
                        </h2>
                        <div className="mx-5 flex flex-wrap gap-3">
                            {images[year].map((img) => (
                                <Image
                                    key={img.src}
                                    src={img.src}
                                    alt=""
                                    width={450} // required by next/image but ignored when class sets size
                                    height={0}
                                    className="max-h-62.5 w-auto rounded-lg object-contain"
                                    loading={
                                        year === yearKeys[0]
                                            ? "eager"
                                            : undefined
                                    }
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </PageShell>
    );
}
