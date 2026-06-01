"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

type L10nText = {
  zh: string;
  en: string;
};

type Bullet = {
  label: L10nText;
  text: L10nText;
  tag?: L10nText;
};

type ExperienceItem = {
  time: string;
  org: L10nText;
  role: L10nText;
  bullets: Bullet[];
};

type ProjectItem = {
  time: string;
  name: L10nText;
  role: L10nText;
  bullets: Bullet[];
};

const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    time: "2022.06 — 2025.06",
    org: {
      zh: "北京水木时代文化传播有限公司",
      en: "Beijing Shuimu Age Culture Communication Co., Ltd.",
    },
    role: { zh: "品牌策划 | 广告业", en: "Brand Planner | Advertising Industry" },
    bullets: [
      {
        label: { zh: "新媒体运营", en: "New Media Operations" },
        text: {
          zh: "负责国家林业和草原科学数据中心宣传类公众号全周期运营工作，涵盖策划采编、内容审核、线上发布等工作。累计发布科普、行业资讯类内容260余篇，平台总阅读量100万次，有效提升官方平台对外传播力与公信力。",
          en: "Managed the full-cycle operations of the National Forestry and Grassland Scientific Data Center's promotional WeChat official account. Published 260+ popular science and industry news articles, achieving 1M+ total views and enhancing platform credibility.",
        },
      },
      {
        label: { zh: "品牌视觉物料策划", en: "Brand Visual Material Planning" },
        text: {
          zh: "专项负责国企、金融机构客户品牌宣传物料策划与落地工作，独立对接多家地方国企及金融类客户，统筹企业宣传画册、企业文化手册、形象手册等各类宣传物料的设计制作。全程跟进需求对接、创意策划、设计校对、印刷交付全流程，精准匹配国企品牌宣传调性与合规要求，保障宣传物料高标准落地。",
          en: "Specially led the planning and delivery of brand promotional materials for state-owned enterprises (SOEs) and financial institutions. Independently managed client accounts, overseeing brochures and culture manuals from creative strategy to final print delivery under strict compliance.",
        },
      },
      {
        label: { zh: "流程优化与团队提效", en: "Process Optimization & Team Efficiency" },
        tag: { zh: "2024年度最佳员工", en: "Best Employee of 2024" },
        text: {
          zh: "参与搭建品牌宣传内容生产及标准化审核机制，规范选题策划、文稿撰写、校对审核、发布全流程标准，有效缩短生产周期，提升内容出品合格率，助力团队规范化、高效化运营。",
          en: "Participated in building the standardized content production and review mechanism. Streamlined topic planning, copywriting, and proofreading processes, effectively shortening production cycles and boosting team operational efficiency.",
        },
      },
    ],
  },
  {
    time: "2022.01 — 2022.06",
    org: { zh: "北京新氧科技有限公司", en: "Beijing SoYoung Technology Co., Ltd." },
    role: { zh: "活动运营实习生 | 互联网", en: "Campaign Operations Intern | Internet Industry" },
    bullets: [
      {
        label: { zh: "品牌活动宣传统筹", en: "Brand Campaign Promotion" },
        text: {
          zh: "周年庆品牌评选活动宣传负责人，制定核心宣传方案并落地执行。联动10余家合作品牌及媒体资源，整合多方宣传渠道，统筹活动宣发节奏，活动相关话题全网曝光量超100万次，有效提升活动影响力。",
          en: "Led promotion for the anniversary brand awards. Developed core campaign strategies, collaborated with 10+ partner brands and media, resulting in over 1M+ cross-platform exposures.",
        },
      },
      {
        label: { zh: "宣传内容产出", en: "Creative Content Production" },
        text: {
          zh: "负责活动宣传文案、推广海报文案等各类宣传物料撰写。通过精准的内容策划与渠道投放，助力平台新增用户2万余人次，活动整体参与率达90%，圆满完成品牌宣传引流任务。",
          en: "Crafted promotional copy and poster text for the campaign. Attracted 20,000+ new users through precise content targeting and placement, driving a 90% overall campaign participation rate.",
        },
      },
    ],
  },
];

const WORK_PROJECTS: ProjectItem[] = [
  {
    time: "2024.09 — 2024.12",
    name: { zh: "京东智狼等企业级视频制作统筹项目", en: "Enterprise Video Production Project (JD Zhilang, etc.)" },
    role: { zh: "项目总控", en: "Project Director" },
    bullets: [
      {
        label: { zh: "品牌宣传内容把控", en: "Brand Content Control" },
        text: {
          zh: "主导3D品牌宣传片创意策划与全流程统筹工作，精准传递企业品牌形象核心价值。",
          en: "Spearheaded the creative planning and full-process orchestration of the 3D brand promotional video, accurately conveying core brand values.",
        },
      },
      {
        label: { zh: "全流程落地管控", en: "Full Lifecycle Management" },
        text: {
          zh: "统筹协调多方制作团队，制定标准化制作排期与验收规范，前置规避内容偏差、需求变更等风险，全程严格把控内容质量与交付节点，实现项目零延期、零客诉，成片作为企业官方宣传物料常态化使用。",
          en: "Coordinated cross-functional production teams and established standardized schedules. Prevented scope creep, controlled quality tightly, and achieved zero delays and zero complaints. The final film is now used routinely as official corporate material.",
        },
      },
    ],
  },
  {
    time: "2022.12 — 2025.01",
    name: { zh: "\"林家那些事儿\" 国家级公众号运营升级项目", en: "\"Lin's Stories\" National Official Account Upgrade" },
    role: { zh: "项目负责人", en: "Project Leader" },
    bullets: [
      {
        label: { zh: "平台优化升级", en: "Platform Optimization & Rebranding" },
        text: {
          zh: "主导国家林草局数据中心公众号品牌焕新升级工作，结合平台用户数据及传播需求，对原有栏目结构进行优化重组，新增数据科普特色板块，丰富平台宣传内容维度，有效提升平台用户留存率35%。",
          en: "Led the rebranding of the State Forestry and Grassland Administration Data Center's official account. Restructured columns and introduced a dedicated data science section, successfully increasing user retention by 35%.",
        },
      },
      {
        label: { zh: "精品栏目打造", en: "Flagship Column Creation" },
        text: {
          zh: "严格把控内容专业性、严谨性，打造“林家故事”特色标杆栏目，累计产出优质原创科普、行业宣传内容50余篇，搭建起规范优质的内容宣传阵地，助力林草科普事业常态化宣传推广。",
          en: "Maintained rigorous and professional content standards to build the 'Lin's Stories' flagship column. Generated 50+ premium original science popularization articles, establishing a normalized and high-quality promotional hub.",
        },
      },
    ],
  },
  {
    time: "2025.01 — 2025.02",
    name: { zh: "小猿热搜短视频传播项目", en: "Xiaoyuan Hot Search Short Video Communication Project" },
    role: { zh: "项目负责人", en: "Project Leader" },
    bullets: [
      {
        label: { zh: "宣传机制搭建", en: "Response Mechanism Architecture" },
        text: {
          zh: "搭建“热点监测-选题策划-脚本审核-拍摄发布”短视频快速响应宣传机制，压缩内容生产链路，大幅提升热点内容宣发效率，保障热点宣传及时落地。",
          en: "Established a rapid-response short video mechanism covering 'trend monitoring - topic selection - script review - shooting & release.' Compressed the content pipeline to ensure immediate execution of trending topics.",
        },
      },
    ],
  },
];

// --- 2. 主页面开始 ---
export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [activeWorkView, setActiveWorkView] = useState<"experience" | "projects">("experience");
  const [openWorkId, setOpenWorkId] = useState<string | null>(null);
  const [activeBeyond, setActiveBeyond] = useState<string | null>(null);

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
  const activeWorkCards =
    activeWorkView === "experience"
      ? WORK_EXPERIENCES.map((item, index) => ({
          id: `experience-${index}`,
          time: item.time,
          title: item.org,
          role: item.role,
          bullets: item.bullets,
          accent: "green" as const,
        }))
      : WORK_PROJECTS.map((item, index) => ({
          id: `project-${index}`,
          time: item.time,
          title: item.name,
          role: item.role,
          bullets: item.bullets,
          accent: "blue" as const,
        }));

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
                  alt={lang === "zh" ? "个人照片" : "Portrait photo"}
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

        <div className="mb-10 inline-flex rounded-full border border-gray-200/70 bg-[#f5f5f7] p-1">
          <button
            type="button"
            onClick={() => {
              setActiveWorkView("experience");
              setOpenWorkId(null);
            }}
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              activeWorkView === "experience" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {lang === "zh" ? "工作经历" : "Experience"}
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveWorkView("projects");
              setOpenWorkId(null);
            }}
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              activeWorkView === "projects" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {lang === "zh" ? "项目经历" : "Projects"}
          </button>
        </div>

        <div className="space-y-5">
          {activeWorkCards.map((item) => {
            const isOpen = openWorkId === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setOpenWorkId(isOpen ? "" : item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.995 }}
                className="w-full rounded-[28px] border border-gray-200/70 bg-white p-6 md:p-7 text-left shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 md:gap-8 items-start">
                  <div className="font-mono text-sm text-gray-400">{item.time}</div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-lg font-medium tracking-tight">
                        <span className={`transition-colors ${item.accent === "green" ? "hover:text-green-400" : "hover:text-blue-400"}`}>
                          {lang === "zh" ? item.title.zh : item.title.en}
                        </span>
                      </div>
                      <div className="mt-1.5 text-sm text-gray-500">{lang === "zh" ? item.role.zh : item.role.en}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.bullets.map((bullet) => (
                        <span
                          key={bullet.label.en}
                          className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-500"
                        >
                          {lang === "zh" ? bullet.label.zh : bullet.label.en}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-gray-400 text-xl leading-none md:pt-1">{isOpen ? "−" : "+"}</div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 grid gap-5 border-t border-gray-100 pt-6">
                        {item.bullets.map((bullet) => (
                          <div key={bullet.label.en} className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-900">
                              <span>{lang === "zh" ? bullet.label.zh : bullet.label.en}</span>
                              {bullet.tag ? (
                                <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-2 py-1 text-[10px] uppercase tracking-normal text-green-400">
                                  {lang === "zh" ? bullet.tag.zh : bullet.tag.en}
                                </span>
                              ) : null}
                            </div>
                            <p className="max-w-[860px] text-sm leading-6 tracking-wide text-gray-600/85">
                              {lang === "zh" ? bullet.text.zh : bullet.text.en}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
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
                      <li><span className="font-medium text-gray-900">Research Thesis:</span> &quot;The Impact of Chinese Science Fiction Films on Scientific Interest, Awareness, and Appreciation among Malaysian Audiences.&quot;</li>
                      <li><span className="font-medium text-gray-900">Practice:</span> Contributed to the &quot;Youth Science Literacy in Malaysia&quot; research, leading survey design and copywriting; Coordinated the University Science Festival (<span className="font-semibold text-gray-900">2,000+</span> participants).</li>
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
                      <li><span className="font-medium text-gray-900">Honors:</span> Recognized for excellent cross-functional collaboration and project delivery, awarded the <span className="font-semibold text-gray-900">&ldquo;2024 Best Employee&rdquo;</span>.</li>
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
                      <li><span className="font-medium text-gray-900">Practice:</span> Interviewed honorary teachers and assisted in drafting promotional content for the &quot;Top Ten Excellent Teachers&quot; series.</li>
                      <li><span className="font-medium text-gray-900">Honors:</span> <span className="font-semibold text-gray-900">2nd Prize</span> in photography competition; Awarded Merit Student and National <span className="font-semibold text-gray-900">&quot;Internet+&quot;</span> Competition Award.</li>
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
                  <p>Currently in a state of &quot;ready to be swept away by a great opportunity.&quot;</p>
                  <p className="mt-2">If you&apos;re looking for someone who can seamlessly stitch together project management, creative planning, and powerful execution—or just want to discuss freelance collaboration—feel free to reach out.</p>
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
