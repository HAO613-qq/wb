"use client";

import Link from "next/link";
import { content } from "../content";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export function SiteNav() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.05] bg-white/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 text-xs font-medium">
        
        {/* 左侧名字 - 碰到会变大 */}
        <Link href="/" className="text-[#1d1d1f]">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {content[lang].nav.brand}
          </motion.div>
        </Link>

        <div className="flex items-center gap-8">
          {/* 中间菜单 - 碰到变颜色 */}
          <div className="hidden sm:flex gap-8">
            {content[lang].nav.links.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div 
                  whileHover={{ color: "#0071e3", y: -2 }} 
                  className="text-[#1d1d1f]/70 transition-colors"
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* 右侧中英文 - 简单切换 */}
          <div className="flex gap-2 bg-[#f5f5f7] p-1 rounded-full">
            <button 
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full ${lang === 'en' ? 'bg-white shadow-sm' : ''}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang("zh")}
              className={`px-3 py-1 rounded-full ${lang === 'zh' ? 'bg-white shadow-sm' : ''}`}
            >
              中文
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
