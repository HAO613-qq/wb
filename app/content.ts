export type Lang = "en" | "zh";

type Module = {
  title: string;
  detail: string;
};

type Section = {
  title: string;
  modules: Module[];
};

type SiteContent = {
  nav: {
    brand: string;
    links: { label: string; href: string }[];
  };
  sections: {
    work: Section;
    education: Section;
    projects: Section;
  };
};

export const content: Record<Lang, SiteContent> = {
  en: {
    nav: {
      brand: "Tomato",
      links: [
        { label: "Work", href: "#work" },
        { label: "Education", href: "#education" },
        { label: "Projects", href: "#projects" },
      ],
    },
    sections: {
      work: {
        title: "Work Experience",
        modules: [
          {
            title: "Advertising company role",
            detail:
              "I started in advertising, focusing on project management for brand communication campaigns. Responsible for coordination, workflow structuring, and end-to-end delivery of multi-format content.",
          },
          {
            title: "JD / Baidu campaigns",
            detail: "Multi-platform execution for brand communication campaigns.",
          },
          {
            title: "Science communication platform",
            detail: "2M+ reads, 30K+ users.",
          },
          {
            title: "Short video / 3D production",
            detail: "Full pipeline management.",
          },
        ],
      },
      education: {
        title: "Education",
        modules: [
          {
            title: "Bachelor — Shanxi University",
            detail: "BA Advertising — Shanxi University (2018–2022).",
          },
          {
            title: "Master — University of Malaya",
            detail:
              "MSc Science Communication — University of Malaya (2025–2026). Focus: science communication, brand communication, digital media, content systems.",
          },
        ],
      },
      projects: {
        title: "Projects",
        modules: [
          {
            title: "Photography",
            detail: "50+ sessions, including events, performances, and communities.",
          },
          {
            title: "Podcast",
            detail: "“A Warm Family” — featured on trending charts.",
          },
          {
            title: "Reading group",
            detail: "3+ years continuous practice.",
          },
        ],
      },
    },
  },
  zh: {
    nav: {
      brand: "小番茄",
      links: [
        { label: "工作", href: "#work" },
        { label: "教育", href: "#education" },
        { label: "项目", href: "#projects" },
      ],
    },
    sections: {
      work: {
        title: "工作经历",
        modules: [
          {
            title: "广告公司项目角色",
            detail:
              "我从广告行业开始，专注品牌传播 Campaign 的项目管理。负责协调沟通、流程搭建，以及多形式内容从策划到交付的全流程推进。",
          },
          {
            title: "京东 / 百度 Campaign",
            detail: "多平台执行。",
          },
          {
            title: "科学传播平台",
            detail: "200万+阅读量，3万+用户。",
          },
          {
            title: "短视频 / 3D 制作",
            detail: "全流程管理。",
          },
        ],
      },
      education: {
        title: "教育",
        modules: [
          {
            title: "本科 — 山西大学",
            detail: "广告学学士 — 山西大学（2018–2022）。",
          },
          {
            title: "硕士 — 马来亚大学",
            detail: "Science Communication 硕士 — 马来亚大学（2025–2026）。关注方向：科学传播、品牌传播、数字媒体、内容系统。",
          },
        ],
      },
      projects: {
        title: "项目",
        modules: [
          {
            title: "摄影",
            detail: "50+ 场拍摄，包括活动、演出与社群。",
          },
          {
            title: "播客",
            detail: "“A Warm Family” — 曾进入热门榜单。",
          },
          {
            title: "阅读小组",
            detail: "3年以上持续实践。",
          },
        ],
      },
    },
  },
};
