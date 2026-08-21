import type { Metadata } from "next";
import { Montserrat, Newsreader } from "next/font/google";
import Backdrop from "@/app/backdrop";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const newsreader = Newsreader({
    variable: "--font-newsreader",
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://tinaw.me"),
    title: "canopy",
    description: "personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${newsreader.variable} antialiased`}
            >
                <Backdrop />
                {children}
            </body>
        </html>
    );
}
