import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aggro Lawn Care | Family Lawn Care in Fresno, CA",
  description:
    "Aggro Lawn Care — family-owned lawn care serving Fresno County since 2020. BBB A+ rated. Lawn mowing, edging, weed control, and yard cleanup. Fair prices, great service. Call (559) 696-7204.",
  openGraph: {
    title: "Aggro Lawn Care | Family Lawn Care in Fresno, CA",
    description:
      "Family-owned lawn care in Fresno County since 2020. BBB A+ rated. Lawn mowing, edging, weed control, yard cleanup. Reasonable prices — ask any neighbor.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&family=Mulish:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
