import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import type { Metadata } from "next";
import { Montserrat, Newsreader } from "next/font/google";
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
    title: "tina wang",
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
            {children}
        </body>
    </html>
  );
}
