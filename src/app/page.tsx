"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { Coffee, Mail, Phone, MapPin } from "lucide-react";

// --- 1. 辅助组件 (必须在 Home 函数外部定义) ---
const ScrollReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const CoffeeEgg = () => (
  <div className="relative group inline-block ml-2">
    <Coffee className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
    <motion.div
      className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100"
      initial={false}
    >
      {[1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-3 bg-gray-300 rounded-full blur-[1px]"
          animate={{ y: [0, -8], opacity: [0, 1, 0], scale: [0.8, 1.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </motion.div>
  </div>
);

// --- 2. 主页面开始 ---
export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [openWork, setOpenWork] = useState(false);
  const [openWork2, setOpenWork2] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeBeyond, setActiveBeyond] = useState<string | null>(null);
  // 复制微信相关的逻辑
  const [copied, setCopied] = useState(false);
  const handleCopyWeChat = () => {
    navigator.clipboard.writeText("hqx5622"); 
    setCopied(true);
    console.log("点击成功！");
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  const content = {
    zh: {
      name: "H番茄 🍅",
      nav: ["工作", "教育", "其他", "联系"],
      heroTitle: "以逻辑统筹复杂，以审美缝合创意",
      heroSub: "科学传播 · 系统思维 · 叙事表达",
      location: "基于吉隆坡",

      workTitle: "工作经历",
      eduTitle: "教育经历",
      beyondTitle: "其他",
      contactTitle: "联系",

      work1Title: "北京水木时代文化传播有限公司",
      work1Role: "高级客户执行",
      work1Desc: "品牌传播 · 项目统筹 · 内容策略 · 新媒体运营",

      work2Title: "北京新氧科技有限公司",
      work2Role: "活动运营实习生 · B端活动组长",
      work2Desc: "聚焦平台用户增长与B端资源整合，通过高并发活动实现品牌破圈。",

      edu1Title: "马来亚大学 University of Malaya",
      edu1Desc: "科学传播 硕士",

      edu2Title: "职业实践阶段",
      edu2Desc: "品牌传播与内容行业实践",

      edu3Title: "山西大学",
      edu3Desc: "广告学 本科",

      beyond1: "摄影",
      beyond2: "播客",
      beyond3: "读书小组",

      contact: "邮箱 · 小红书 · Instagram · 小宇宙",
      thanks: "感谢访问",
    },

    en: {
      name: "H`Tomato🍅",
      nav: ["Work", "Education", "Beyond", "Contact"],
      heroTitle: "Orchestrating complexity with logic, stitching creativity with aesthetics.",
      heroSub: "Science Communication · Systems Thinking · Narrative Expression",
      location: "Based in Kuala Lumpur",

      workTitle: "Work Experience",
      eduTitle: "Education",
      beyondTitle: "Beyond Work",
      contactTitle: "Contact",

      work1Title: "Beijing Waterwood Media",
      work1Role: "Senior Account Executive",
      work1Desc: "Brand communication · Project management · Content strategy",

      work2Title: "Xinyang Technology",
      work2Role: "Event Operations Intern · B2B Team Lead",
      work2Desc: "Focused on platform user growth and B2B resource integration, driving brand expansion.",

      edu1Title: "University of Malaya",
      edu1Desc: "MSc Science Communication",

      edu2Title: "Professional Practice Phase",
      edu2Desc: "Media & communication industry practice",

      edu3Title: "Shanxi University",
      edu3Desc: "Bachelor in Advertising",

      beyond1: "Photography",
      beyond2: "Podcast",
      beyond3: "Reading Group",

      contact: "Email · Xiaohongshu · Instagram · Xiaoyuzhou",
      thanks: "Thanks for visiting",
    },
  };

  const t = content[lang];
  const getStackPositionClass = (position: number) => {
    if (position === 0) {
      return "z-30 translate-x-0 translate-y-0 scale-100 shadow-2xl group-hover:-translate-y-3 group-hover:scale-[1.03]";
    }
    if (position === 1) {
      return "z-20 translate-x-4 translate-y-4 scale-100 shadow-xl group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-[0.98]";
    }
    return "z-10 translate-x-8 translate-y-8 scale-100 shadow-lg group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-[0.95]";
  };

  const renderStackedCarousel = (images: string[], className = "") => (
    <div className={`relative w-full aspect-video md:aspect-[16/8] group mb-12 md:mb-16 ${className}`}>
      {images.map((imageSrc, idx) => {
        const position = (idx - activeCardIndex + images.length) % images.length;

        return (
          <div
            key={imageSrc}
            className={`absolute inset-0 rounded-3xl overflow-hidden border border-white/50 bg-white transition-all duration-700 ease-out ${getStackPositionClass(position)}`}
          >
            <img
              src={imageSrc}
              className="w-full h-full object-cover transition duration-700 ease-out brightness-95 contrast-[0.98] saturate-95 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none transition duration-700 ease-out group-hover:bg-black/0" />
          </div>
        );
      })}
    </div>
  );

  return (
    <main className="bg-gradient-to-b from-[#F5F5F7] via-[#FAFAFA] to-white text-[#1D1D1F] antialiased tracking-tight scroll-smooth">

      {/* NAV */}
      <header className="fixed top-0 w-full bg-[#F5F5F7]/80 backdrop-blur-2xl border-b border-gray-200/70 z-50 px-8 py-4 flex justify-between text-sm text-gray-600">

        <div className="font-medium">{t.name}</div>

        <div className="flex gap-6 items-center">
          <a href="#work">{t.nav[0]}</a>
          <a href="#education">{t.nav[1]}</a>
          <a href="#beyond">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>

          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="ml-4 px-3 py-1 border border-gray-200 rounded-full text-xs hover:bg-gray-100 transition"
          >
            {lang === "zh" ? "中文 / EN" : "EN / 中文"}
          </button>
        </div>
      </header>
      

      {/* HERO (IMPROVED APPLE STYLE) */}
      <section className="min-h-screen flex items-center justify-center px-10 pt-40">

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div className="space-y-8">

            <div className="text-sm text-gray-400">{t.name}</div>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              {t.heroTitle}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed">
              {t.heroSub}
            </p>

            <p className="text-sm text-gray-400">
              {t.location}
            </p>

          </div>

          {/* IMAGE (AUTO HEIGHT - TIGHT FIT) */}
          <div className="flex justify-center md:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              // 关键修改：去掉了 h-[620px]，高度改为 auto，保持圆角和背景
              className="relative w-full md:w-[520px] h-auto rounded-[40px] overflow-hidden bg-[#F3F4F6] shadow-2xl border border-white/50 group"
            >
              <motion.div 
                className="w-full h-full"
                whileHover={{ scale: 1.03 }} // 稍微减小缩放，防止大图锯齿
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/profile.jpg"
                  // 关键修改：去掉 pt-10 防止顶部分散。使用 block 确保撑开高度
                  className="w-full h-auto object-cover block" 
                />
              </motion.div>

              {/* 遮罩层 pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.06] to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </section>

      {/* WORK */}
      <section id="work" className="py-40 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12">{t.workTitle}</h2>

        <div className="space-y-8">

          <div
            onClick={() => setOpenWork(!openWork)}
            className="p-8 border border-white/60 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1 transition duration-500 cursor-pointer"
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-medium">
                  {lang === "zh"
                    ? "北京水木时代文化传播有限公司"
                    : "Beijing Waterwood Media"}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  2022 — 2025 ·
                  {lang === "zh"
                    ? " 高级客户执行"
                    : " Senior Account Executive"}
                </p>

                <p className="text-sm text-gray-600 mt-3">
                  {lang === "zh"
                    ? "品牌传播 · 项目统筹 · 内容策略 · 新媒体运营"
                    : "Brand communication · Project management · Content strategy"}
                </p>
              </div>

              <div className="text-gray-400 text-sm">
                {openWork ? "−" : "+"}
              </div>

            </div>


            {/* EXPAND CONTENT */}
            {openWork && (

              <div className="mt-24 flex flex-col gap-12 md:gap-16">

                {/* PROJECT 01 */}
                <div className="max-w-[96%] w-full mx-auto min-h-[400px] px-6 md:px-8 py-8 md:py-10 rounded-3xl border border-gray-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 backdrop-blur-xl bg-[#FAFAFA] overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                    {/* TEXT */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">

                      <div className="text-sm text-gray-400">
                        01
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight mt-3">
                        {lang === "zh"
                          ? "内容生态建设：把行业壁垒转化为大众共鸣"
                          : "Building Content Ecosystems for Public Engagement"}
                      </h3>

                      <p className="text-sm md:text-base opacity-80 leading-relaxed mt-4">
                        {lang === "zh"
                          ? "服务国家林草局（林草科学中心）、京东物流等客户，将专业行业内容转化为可持续传播的品牌叙事。"
                          : "Collaborated with public institutions and enterprise brands, transforming complex industry knowledge into scalable storytelling systems."}
                      </p>

                      <div className="space-y-2 text-sm text-gray-600/85 leading-6 mt-4">

                        <p>
                          {lang === "zh"
                            ? "• 粉丝增长 50,000+"
                            : "• 50,000+ follower growth"}
                        </p>

                        <p>
                          {lang === "zh"
                            ? "• 累计原创内容 260+"
                            : "• 260+ original long-form contents"}
                        </p>

                        <p>
                          {lang === "zh"
                            ? "• 建立稳定内容 SOP 与品牌栏目体系"
                            : "• Established sustainable editorial SOP systems"}
                        </p>

                      </div>
                    </div>

                    {renderStackedCarousel([
                      "/images/work1-main.jpg",
                      "/images/work1-detail1.jpg",
                      "/images/work1-detail2.jpg",
                    ], "w-full md:w-1/2 pl-6 md:pl-10")}
                  </div>
                </div>


                {/* PROJECT 02 */}
                <div className="max-w-[96%] w-full mx-auto min-h-[400px] px-6 md:px-8 py-8 md:py-10 rounded-3xl border border-gray-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 backdrop-blur-xl bg-[#F5F5F5] overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                    {renderStackedCarousel(
                      [
                        "/images/work2-main.jpg",
                        "/images/work2-detail1.jpg",
                        "/images/work2-detail2.jpg",
                      ],
                      "w-full md:w-1/2 pr-6 md:pr-10"
                    )}

                    {/* TEXT */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">

                      <div className="text-sm text-gray-400">
                        02
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight mt-3">
                        {lang === "zh"
                          ? "敏捷影像制作：在热点消退前完成质感交付"
                          : "Agile Visual Production for Fast-Moving Media"}
                      </h3>

                      <p className="text-sm md:text-base opacity-80 leading-relaxed mt-4">
                        {lang === "zh"
                          ? "服务百度、小猿等互联网企业，建立快速响应的短视频生产机制。"
                          : "Developed rapid-response video production systems for internet brands, balancing speed, storytelling, and visual quality."}
                      </p>

                      <div className="space-y-2 text-sm text-gray-600/85 leading-6 mt-4">

                        <p>
                          {lang === "zh"
                            ? "• 打造 10+ 百万赞爆款视频"
                            : "• Produced 10+ viral videos"}
                        </p>

                        <p>
                          {lang === "zh"
                            ? "• 单条最高点赞超 200 万"
                            : "• Highest engagement exceeded 2 million likes"}
                        </p>

                        <p>
                          {lang === "zh"
                            ? "• 后期返工率降低 30%"
                            : "• Reduced revision rounds by 30%"}
                        </p>

                      </div>
                    </div>

                  </div>
                </div>


                {/* PROJECT 03 */}
                <div className="max-w-[96%] w-full mx-auto min-h-[400px] px-6 md:px-8 py-8 md:py-10 rounded-3xl border border-gray-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 backdrop-blur-xl bg-[#EFEFEF] overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                    {/* TEXT */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">

                      <div className="text-sm text-gray-400">
                        03
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight mt-3">
                        {lang === "zh"
                          ? "全链路项目统筹：将变量转化为确定性"
                          : "End-to-End Coordination for Complex Projects"}
                      </h3>

                      <p className="text-sm md:text-base opacity-80 leading-relaxed mt-4">
                        {lang === "zh"
                          ? "统筹高校、品牌与政府项目，从视觉到线下活动实现复杂项目高质量落地。"
                          : "Led institutional and brand projects from creative planning to on-site execution, ensuring high-quality delivery across multiple stakeholders."}
                      </p>

                      <div className="space-y-2 text-sm text-gray-600/85 leading-6 mt-4">

                        <p>
                          {lang === "zh"
                            ? "• 年度主导项目金额超 130 万"
                            : "• Managed projects exceeding RMB 1.3M annually"}
                        </p>

                        <p>
                          {lang === "zh"
                            ? "• 单场活动参与超 2000 人"
                            : "• Events with 2,000+ attendees"}
                        </p>

                        <p>
                          {lang === "zh"
                            ? "• 客户续约率高达 80%"
                            : "• Achieved 80% client renewal rate"}
                        </p>

                      </div>
                    </div>

                    {renderStackedCarousel([
                      "/images/work3-main.jpg",
                      "/images/work3-detail1.jpg",
                      "/images/work3-detail2.jpg",
                    ], "w-full md:w-1/2 pl-6 md:pl-10")}
                  </div>
                </div>

              </div>

            )}

          </div>

          <div
            onClick={() => setOpenWork2(!openWork2)}
            className="p-8 border border-white/60 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1 transition duration-500 cursor-pointer"
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-medium">{t.work2Title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  2022 · {t.work2Role}
                </p>

                <p className="text-sm text-gray-600 mt-3">{t.work2Desc}</p>
              </div>

              <div className="text-gray-400 text-sm">
                {openWork2 ? "−" : "+"}
              </div>

            </div>

            {/* EXPANDED TEXT CONTENT - 已调整点号与水木一致 */}
            {openWork2 && (
              <div className="mt-8 md:mt-10 p-8 md:p-10 rounded-3xl bg-[#FAFAFA] border border-gray-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-500 cursor-default" onClick={(e) => e.stopPropagation()}>
                {/* 这里从 ul 标签改为了普通的 div 标签，去掉 flex 结构 */}
                <div className="space-y-5 text-sm text-gray-600/85 leading-6 tracking-wide">
                  {lang === "zh" ? (
                    <>
                      {/* 直接使用文字字符 • 开头，去掉原本蓝色的点 */}
                      <p>
                        • 全链路主导 <span className="font-semibold text-gray-900">30+</span> 场品牌活动，单场最高参与破万人，累计拉新 <span className="font-semibold text-gray-900">10,000+</span> 用户。
                      </p>
                      <p>
                        • 统筹周年庆品牌评选，成功联动 <span className="font-semibold text-gray-900">20+</span> 合作品牌实现资源置换与双向曝光。
                      </p>
                      <p>
                        • 独立负责从策划、邀约到数据复盘的完整闭环，单场平均参与率达 <span className="font-semibold text-gray-900">90%</span>。
                      </p>
                    </>
                  ) : (
                    <>
                      {/* 英文同样调整为简单的 • 字符开头 */}
                      <p>
                        • Executed <span className="font-semibold text-gray-900">30+</span> brand campaigns, driving <span className="font-semibold text-gray-900">10,000+</span> new user acquisitions with peak participation exceeding 10,000.
                      </p>
                      <p>
                        • Led the B2B event team for the Anniversary Awards, coordinating with <span className="font-semibold text-gray-900">20+</span> partner brands to maximize cross-platform exposure.
                      </p>
                      <p>
                        • Managed the full lifecycle from planning to data analysis, maintaining an average <span className="font-semibold text-gray-900">90%</span> engagement rate.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    {/* EDUCATION SECTION */}
    <section id="education" className="py-40 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12">
          {lang === "zh" ? "教育与实践经历" : "Education & Practice"}
        </h2>
        
        <div className="relative border-l border-gray-200 ml-2 md:ml-3 space-y-12">
          
          {/* Item 1: University of Malaya */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-8 md:pl-10 group cursor-pointer"
          >
            {/* 时间轴圆点 */}
            <div className="absolute w-2.5 h-2.5 bg-gray-200 rounded-full -left-[5.5px] top-2 ring-4 ring-[#FAFAFA] transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-125"></div>
            
            <h3 className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-black">
              {lang === "zh" ? "马来亚大学 (University of Malaya)" : "University of Malaya"}
            </h3>
            
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-sm text-gray-500 font-mono">2025.09 — 2026.09</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600 tracking-wide transition-colors group-hover:bg-gray-200">
                {lang === "zh" ? "科学传播硕士" : "MSc Science Communication"}
              </span>
            </div>
            
            {/* 触碰展开容器 */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="space-y-5 text-sm text-gray-600/85 leading-6 tracking-wide mt-6 border-t border-gray-100 pt-6 transition-colors duration-300 group-hover:text-gray-900">
                  {lang === "zh" ? (
                    <>
                      <li><span className="font-medium text-gray-900">核心方向：</span>科学内容传播、公众心理与跨文化视阈下的媒介影响。</li>
                      <li><span className="font-medium text-gray-900">研究论文：</span>《中国科幻电影对马来西亚受众科学兴趣、意识与欣赏度的影响》</li>
                      <li><span className="font-medium text-gray-900">学术实践：</span>参与“马来西亚青少年科学素养提升”课题，负责调研问卷设计与文案创作；协助策划校园科学节，覆盖超 <span className="font-semibold text-gray-900">2000</span> 名师生。</li>
                    </>
                  ) : (
                    <>
                      <li><span className="font-medium text-gray-900">Focus:</span> Science communication, public psychology, and cross-cultural media impact.</li>
                      <li><span className="font-medium text-gray-900">Research Thesis:</span> "The Impact of Chinese Science Fiction Films on Scientific Interest, Awareness, and Appreciation among Malaysian Audiences."</li>
                      <li><span className="font-medium text-gray-900">Practice:</span> Contributed to the "Youth Science Literacy in Malaysia" research, leading survey design and copywriting; Coordinated the University Science Festival (<span className="font-semibold text-gray-900">2,000+</span> participants).</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Professional Practice */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative pl-8 md:pl-10 group cursor-pointer"
          >
            <div className="absolute w-2.5 h-2.5 bg-gray-200 rounded-full -left-[5.5px] top-2 ring-4 ring-[#FAFAFA] transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-125"></div>
            
            <h3 className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-black">
              {lang === "zh" ? "职业实践阶段" : "Professional Practice Phase"}
            </h3>
            
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-sm text-gray-500 font-mono">2022.01 — 2025.06</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600 tracking-wide transition-colors group-hover:bg-gray-200">
                {lang === "zh" ? "互联网运营与广告统筹实战" : "Internet & Advertising Practice"}
              </span>
            </div>
            
            {/* 触碰展开容器 */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="space-y-5 text-sm text-gray-600/85 leading-6 tracking-wide mt-6 border-t border-gray-100 pt-6 transition-colors duration-300 group-hover:text-gray-900">
                  {lang === "zh" ? (
                    <>
                      <li><span className="font-medium text-gray-900">履历简述：</span>本科毕业后的三年半实战积累。前半年于互联网大厂实习，积累了扎实的用户与活动运营经验；随后在广告公司深耕三年，独立统筹超 <span className="font-semibold text-gray-900">百万级预算</span> 的品牌传播项目。</li>
                      <li><span className="font-medium text-gray-900">个人荣誉：</span>具备出色的跨团队协作与项目交付能力，凭借优秀的职场表现，荣获 <span className="font-semibold text-gray-900">2024 年度“最佳员工奖”</span>。</li>
                    </>
                  ) : (
                    <>
                      <li><span className="font-medium text-gray-900">Overview:</span> 3.5 years of industry experience. Started with a 6-month tech internship, followed by 3 years at an ad agency managing <span className="font-semibold text-gray-900">multi-million-RMB</span> campaigns.</li>
                      <li><span className="font-medium text-gray-900">Honors:</span> Recognized for excellent cross-functional collaboration and project delivery, awarded the <span className="font-semibold text-gray-900">"2024 Best Employee"</span>.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Item 3: Shanxi University */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pl-8 md:pl-10 group cursor-pointer"
          >
            <div className="absolute w-2.5 h-2.5 bg-gray-200 rounded-full -left-[5.5px] top-2 ring-4 ring-[#FAFAFA] transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-125"></div>
            
            <h3 className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-black">
              {lang === "zh" ? "山西大学 (Shanxi University)" : "Shanxi University"}
            </h3>
            
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-sm text-gray-500 font-mono">2018.09 — 2022.06</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-600 tracking-wide transition-colors group-hover:bg-gray-200">
                {lang === "zh" ? "广告学本科" : "Bachelor in Advertising"}
              </span>
            </div>
            
            {/* 触碰展开容器 */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="space-y-5 text-sm text-gray-600/85 leading-6 tracking-wide mt-6 border-t border-gray-100 pt-6 transition-colors duration-300 group-hover:text-gray-900">
                  {lang === "zh" ? (
                    <>
                      <li><span className="font-medium text-gray-900">专业核心：</span>主修广告策划、品牌营销、传播学及文案写作。</li>
                      <li><span className="font-medium text-gray-900">校园实践：</span>参与全校“十大优秀教师”表彰系列内容的筹备，负责采访本校荣誉教师，并协助编写相关宣传文案。</li>
                      <li><span className="font-medium text-gray-900">综合荣誉：</span>曾获院级 <span className="font-semibold text-gray-900">摄影大赛二等奖</span>；在校期间荣获三好学生、三等奖学金及全国 <span className="font-semibold text-gray-900">“互联网+”</span> 大赛奖项。</li>
                    </>
                  ) : (
                    <>
                      <li><span className="font-medium text-gray-900">Core Courses:</span> Majored in Advertising Planning, Brand Marketing, Communication Studies, and Copywriting.</li>
                      <li><span className="font-medium text-gray-900">Practice:</span> Interviewed honorary teachers and assisted in drafting promotional content for the "Top Ten Excellent Teachers" series.</li>
                      <li><span className="font-medium text-gray-900">Honors:</span> <span className="font-semibold text-gray-900">2nd Prize</span> in photography competition; Awarded Merit Student and National <span className="font-semibold text-gray-900">"Internet+"</span> Competition Award.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* BEYOND WORK SECTION */}
      <ScrollReveal>
        <section id="beyond" className="py-32 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">{lang === "zh" ? "工作之外" : "Beyond Work"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 摄影卡片 */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => setActiveBeyond("photo")} 
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{lang === "zh" ? "纪实摄影" : "Photography"}</h3>
                <p className="text-sm text-gray-600/85 leading-relaxed tracking-wide">
                  {lang === "zh" ? "兼职摄影 50+ 场，涵盖脱口秀、创投论坛及身心灵活动。用镜头记录真实瞬间与人类体验。" : "Freelance photographer for 50+ events, capturing moments across stand-up comedy, panels, and retreats."}
                </p>
              </div>
              <div className="mt-10 text-sm font-medium text-gray-300 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                <span>{lang === "zh" ? "探索影像" : "View Portfolio"}</span>
                <span className="text-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
              </div>
            </motion.div>

            {/* 播客卡片 */}
            <motion.a 
              whileHover={{ y: -8 }}
              href="https://www.xiaoyuzhoufm.com/podcast/6537c168bc176817e8e2ac19" 
              target="_blank" rel="noopener noreferrer" 
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{lang === "zh" ? "家庭播客" : "Family Podcast"}</h3>
                <p className="text-sm text-gray-600/85 leading-relaxed tracking-wide">
                  {lang === "zh" ? "独立策划制作对谈播客，曾登顶小宇宙 App 妇女节热搜榜。记录真实的跨代际沟通。" : "Produced an independent family podcast, featured on the Xiaoyuzhou app's trending list. Exploring generational dialogue."}
                </p>
              </div>
              <div className="mt-10 text-sm font-medium text-gray-300 group-hover:text-[#0071e3] transition-colors flex items-center justify-between">
                <span>{lang === "zh" ? "去听听看" : "Listen Now"}</span>
                <span className="text-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">↗</span>
              </div>
            </motion.a>

            {/* 读书卡片 */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => setActiveBeyond("reading")} 
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{lang === "zh" ? "共读小组" : "Reading Group"}</h3>
                <p className="text-sm text-gray-600/85 leading-relaxed tracking-wide">
                  {lang === "zh" ? "发起并主理青年读书社群。3年不间断深度共读，保持系统性输入，沉淀年度思想书单。" : "Founded a reading community with a 3-year continuous streak, curating annual thought-provoking book lists."}
                </p>
              </div>
              <div className="mt-10 text-sm font-medium text-gray-300 group-hover:text-gray-900 transition-colors flex items-center justify-between">
                <span>{lang === "zh" ? "查看书单" : "Explore List"}</span>
                <span className="text-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* MODAL LAYER */}
      <AnimatePresence>
        {activeBeyond && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/60 backdrop-blur-2xl"
            onClick={() => setActiveBeyond(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-2xl w-full bg-white rounded-[40px] shadow-2xl p-10 md:p-14 relative overflow-y-auto max-h-[85vh] border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" onClick={() => setActiveBeyond(null)} className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors text-2xl" aria-label="Close">✕</button>

              {activeBeyond === "photo" && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {lang === "zh" ? "摄影作品集" : "Photography Portfolio"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {lang === "zh"
                      ? "镜头是我观察人类经验的延伸。50余场拍摄，记录对不同生命状态的共情。"
                      : "The camera is an extension of my observation of human experience. Over 50 shoots, capturing empathy and life states."}
                  </p>
                  <div className="columns-2 md:columns-3 gap-4 [column-gap:1rem]">
                    {Array.from({ length: 20 }, (_, i) => {
                      const id = i + 1;
                      const portraitIds = [1, 3, 10, 16, 18];
                      const aspect = portraitIds.includes(id) ? "aspect-[2/3]" : "aspect-[3/2]";
                      return { id, aspect, url: `https://cdn.jsdelivr.net/gh/HAO613-qq/H-allery/${id}.jpg` };
                    }).map((photo) => (
                      <div key={`photo-${photo.id}`} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-gray-50">
                        <div className={`${photo.aspect} overflow-hidden rounded-2xl`}>
                          <img
                            src={photo.url}
                            alt={`Gallery ${photo.id}`}
                            loading="lazy"
                            className="w-full h-auto object-cover hover:scale-[1.03] transition-all duration-700 ease-in-out"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeBeyond === "reading" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {lang === "zh" ? "年度推荐书单" : "Annual Recommended Books"}
                  </h3>
                  <div className="space-y-10">
                    {[
                      {
                        year: "2026",
                        count: lang === "zh" ? "在读 20 本" : "20 Books (Reading)",
                        focus: lang === "zh" ? "社会观察" : "Society & Insight",
                        books:
                          lang === "zh"
                            ? ["《埃隆·马斯克传》", "《置身事内》", "《冬牧场》", "《她来劈开这山》"]
                            : ["Elon Musk", "Inside China's Political Economy", "Winter Pasture", "She Comes to Split the Mountain"],
                      },
                      {
                        year: "2025",
                        count: lang === "zh" ? "完读 61 本" : "61 Books Read",
                        focus: lang === "zh" ? "认知与文学" : "Cognition & Literature",
                        books:
                          lang === "zh"
                            ? ["《段永平投资问答录》", "《认知觉醒》", "《遥远的向日葵地》", "《我才不想做家务》", "《沧城》"]
                            : ["Duan Yongping Q&A", "Cognitive Awakening", "The Distant Sunflower Fields", "No Housework", "Cang Cheng"],
                      },
                      {
                        year: "2024",
                        count: lang === "zh" ? "完读 19 本" : "19 Books Read",
                        focus: lang === "zh" ? "商业与生活" : "Business & Life",
                        books:
                          lang === "zh"
                            ? ["《小米创业思考》", "《百岁人生》", "《如何找到想做的事》", "《吃的营养科学观》", "《朝花夕拾》"]
                            : ["The Xiaomi Way", "The 100-Year Life", "Finding Your Love", "Eat Right", "Dawn Blossoms"],
                      },
                    ].map((item) => (
                      <div key={item.year} className="border-l-2 border-gray-100 pl-6 hover:border-gray-300 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-lg font-bold text-gray-900">{item.year}</span>
                          <span className="text-[11px] px-2.5 py-1 bg-gray-900 text-white rounded-full font-medium tracking-wide">{item.count}</span>
                          <span className="text-[11px] px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium tracking-wide">{item.focus}</span>
                        </div>
                        <p className="text-gray-600/85 tracking-wide text-sm leading-relaxed">{item.books.join(" · ")}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT - 极致精简版 */}
      <section id="contact" className="py-16 px-6 bg-[#0c0c0c] text-white rounded-t-[40px] mt-10">
        <div className="max-w-4xl mx-auto">
          {/* 文案部分 */}
          <div className="mb-12">
            <h2 className="text-lg font-medium mb-4 tracking-tight">
              {lang === "zh" ? "聊聊？" : "Let's Talk"}
            </h2>
            <div className="text-white text-sm font-light leading-relaxed max-w-2xl">
              {lang === "zh" ? (
                <>
                  <p>目前处于「随时准备被好机会带走」的待命状态。</p>
                  <p className="mt-2">如果你正在寻找一个能将项目统筹、创意策划与强悍执行力完美缝合的人，或者有任何兼职合作想找我聊聊，欢迎随时拍砖。</p>
                  <p className="mt-4 text-white/70 italic">至于我回复的速度？通常取决于那一刻咖啡的浓度。</p>
                </>
              ) : (
                <>
                  <p>Currently in a state of "ready to be swept away by a great opportunity."</p>
                  <p className="mt-2">If you're looking for someone who can seamlessly stitch together project management, creative planning, and powerful execution—or just want to discuss freelance collaboration—feel free to reach out.</p>
                  <p className="mt-4 text-white/70 italic">My response speed? Usually depends on the concentration of coffee at that moment.</p>
                </>
              )}
            </div>
          </div>

          {/* 联系方式网格 - 纯白字 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {/* Email - 蓝色点击复制版 */}
            <div className="flex flex-col">
              <span className="text-[10px] text-white uppercase tracking-[0.2em] mb-2 opacity-50">
                {lang === "zh" ? "邮箱" : "Email"}
              </span>
              
              <div className="flex items-center gap-4 relative">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("1125183007@qq.com");
                    const tip = document.getElementById('copy-tip-email');
                    if (tip) {
                      tip.style.opacity = '1';
                      tip.style.transform = 'translateX(8px)';
                      setTimeout(() => { 
                        tip.style.opacity = '0'; 
                        tip.style.transform = 'translateX(0px)';
                      }, 1500);
                    }
                  }}
                  // hover 效果也改成了蓝色
                  className="text-sm font-light text-white hover:text-blue-400 transition-colors shrink-0"
                >
                  1125183007@qq.com
                </button>
                
                {/* 提示文字改为蓝色 text-blue-400 */}
                <span 
                  id="copy-tip-email" 
                  className="text-[10px] text-blue-400 opacity-0 transition-all duration-300 pointer-events-none font-bold whitespace-nowrap"
                  style={{ transform: 'translateX(0px)' }}
                >
                  {lang === "zh" ? "✓ 已复制" : "✓ COPIED"}
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col">
              <span className="text-[10px] text-white uppercase tracking-[0.2em] mb-2 opacity-50">WhatsApp</span>
              <a href="https://wa.me/601161359335" target="_blank" className="text-sm font-light text-white hover:text-green-400 transition-colors">
                +60 11-6135 9335
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <span className="text-[10px] text-white uppercase tracking-[0.2em] mb-2 opacity-50">
                {lang === "zh" ? "手机号" : "Phone"}
              </span>
              <a href="tel:15110795000" className="text-sm font-light text-white hover:text-blue-400 transition-colors">
                15110795000
              </a>
            </div>

            {/* WeChat */}
            <div className="flex flex-col">
  <span className="text-[10px] text-white uppercase tracking-[0.2em] mb-2 opacity-50">
    {lang === "zh" ? "微信" : "WeChat"}
  </span>
  
  {/* 使用 flex items-center 确保所有元素在同一水平线上 */}
  <div className="flex items-center gap-4 relative">
    <button 
      onClick={() => {
        navigator.clipboard.writeText("hqx5622");
        const tip = document.getElementById('copy-tip');
        if (tip) {
          tip.style.opacity = '1';
          tip.style.transform = 'translateX(8px)'; // 点击时向右微调
          setTimeout(() => { 
            tip.style.opacity = '0'; 
            tip.style.transform = 'translateX(0px)';
          }, 1500);
        }
      }}
      className="text-sm font-light text-white hover:text-green-400 transition-colors shrink-0"
    >
      hqx5622
    </button>
    
    {/* 提示文字：现在它和微信号通过 flex 自动垂直居中对齐 */}
    <span 
      id="copy-tip" 
      className="text-[10px] text-green-400 opacity-0 transition-all duration-300 pointer-events-none font-bold whitespace-nowrap"
      style={{ transform: 'translateX(0px)' }}
    >
      {lang === "zh" ? "✓ 已复制" : "✓ COPIED"}
    </span>
  </div>
</div>
          </div>

          {/* 底部版权 */}
          <div className="mt-16 flex justify-between items-center text-[9px] text-white/30 uppercase tracking-[0.3em]">
            <div>© 2026 HAO DESIGN</div>
            <div>STAY CURIOUS</div>
          </div>
        </div>
      </section>

    </main>
  );
}
