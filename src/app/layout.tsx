import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/lib/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhruvik Gondaliya - Biodata",
  description:
    "Personal biodata of Dhruvik Gondaliya with family, education, profession, lifestyle, galleries and contact information.",
  keywords: ["biodata", "Dhruvik", "Gondaliya", "profile", "portfolio"],
  authors: [{ name: "Dhruvik Gondaliya" }],
  openGraph: {
    title: "Dhruvik Gondaliya - Biodata",
    description: "Personal biodata and galleries",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruvik Gondaliya - Biodata",
    description: "Personal biodata and galleries",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
