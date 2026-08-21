import Navbar from "@/components/navbar";
import AnchorGutter from "@/components/anchors";
import PageVine from "@/components/pagevine";
import Footer from "@/components/footer";

export default function PageShell({
    mainClassName = "max-w-3xl",
    children,
}: {
    mainClassName?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto min-h-screen max-w-4xl px-6 py-10 font-sans sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className={mainClassName}>{children}</main>
            </div>
            <Footer />
        </div>
    );
}
