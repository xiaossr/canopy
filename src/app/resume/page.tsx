"use client";

import Navbar from "@/app/navbar"
import AnchorGutter from "@/app/anchors"
import PageVine from "@/app/pagevine";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Footer from "@/app/footer";

function PdfViewer({ url }: { url: string }) {
    const defaultLayout = defaultLayoutPlugin();
    return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="h-[85vh] w-full overflow-hidden rounded-lg border">
        <Viewer fileUrl={url} plugins={[defaultLayout]} theme="dark"/>
        </div>
    </Worker>
    );
}

export default function ResumePage() {
    return (
        <div className="font-sans min-h-screen mx-auto max-w-5xl px-6 py-10 sm:py-16">
            <Navbar />
            <div className="relative lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <PageVine />
                <AnchorGutter />
                <main className="max-w-3xl">
                    <header className="font-title text-4xl sm:text-5xl font-semibold tracking-tight text-left mb-8">resume</header>
            <PdfViewer url="/resume.pdf" />
                </main>
            </div>
            <Footer />
        </div>
    )
}