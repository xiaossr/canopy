import Navbar from "@/app/navbar";
import AnchorGutter from "@/app/anchors";
import PageVine from "@/app/pagevine";
import Image from "next/image";
import getImagesByCreation from "@/app/gallery";
import Footer from "@/app/footer";

export default function ArtPage() {
    const images = getImagesByCreation("art");
    const dateKeys = Object.keys(images).reverse();

    return (
        <div className="mx-auto min-h-screen max-w-4xl px-6 py-10 font-sans sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
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
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
