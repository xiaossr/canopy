import Navbar from "@/app/navbar"
import Footer from "@/app/footer";

export default function WritingPage() {
    return (
        <div className="font-sans min-h-screen mx-auto p-8 pb-20 gap-16 sm:p-20">
            <Navbar />
            <header className="text-7xl font-title font-bold text-left mb-12">writings ✩</header>
            <Footer />
        </div>
    )
}