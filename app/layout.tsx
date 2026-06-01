import type { Metadata } from "next";
import { LanguageProvider } from "./components/LanguageProvider";
import { SiteNav } from "./components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomato Portfolio",
  description:
    "A clean personal portfolio for content, brand communication, and project work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
