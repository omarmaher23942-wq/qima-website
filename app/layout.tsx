import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QIMA — Content that earns trust, then earns customers",
  description:
    "QIMA helps creators, brands, and companies turn raw footage into content that performs — through sharp editing, platform literacy, and marketing instinct.",
  openGraph: {
    title: "QIMA — Content that earns trust, then earns customers",
    description:
      "Video editing, thumbnail design, and script direction built for real results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}