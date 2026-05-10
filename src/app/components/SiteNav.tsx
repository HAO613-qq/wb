"use client";

import Link from "next/link";
import { content } from "../content";
import { useLanguage } from "./LanguageProvider";

export function SiteNav() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.05] bg-white/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-5 px-5 text-xs font-medium leading-[1.7] tracking-[0.01em] text-[#1d1d1f]/70">
        <Link href="/" className="shrink-0 text-[#1d1d1f] transition hover:opacity-70">
          {content[lang].nav.brand}
        </Link>
        <div className="flex min-w-0 items-center gap-5 md:gap-8">
          <div className="hidden gap-5 overflow-x-auto whitespace-nowrap sm:flex md:gap-8">
            {content[lang].nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[#1d1d1f]">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex rounded-full bg-[#f5f5f7] p-0.5 text-[11px] font-medium text-[#6e6e73]">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "en" ? "bg-white text-[#1d1d1f] shadow-sm" : "hover:text-[#1d1d1f]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("zh")}
              aria-pressed={lang === "zh"}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "zh" ? "bg-white text-[#1d1d1f] shadow-sm" : "hover:text-[#1d1d1f]"
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
