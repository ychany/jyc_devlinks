export type LinkType = "github" | "demo" | "appstore" | "toss";

export interface ProjectLink {
  type: LinkType;
  url: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  techStack: string[];
  links: ProjectLink[];
  award?: string;
  period: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ProfileData {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  socials: SocialLink[];
}

export const profileData: ProfileData = {
  name: "조영찬",
  nameEn: "Youngchan Jo",
  role: "Developer",
  tagline: "끊임없이 성장하는 개발자",
  socials: [
    {
      platform: "github",
      url: "https://github.com/ychany",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/ychany-23809637b/",
      label: "LinkedIn",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/y_chany_04/",
      label: "Instagram",
    },
    {
      platform: "email",
      url: "mailto:tigerbone@naver.com",
      label: "Email",
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "코레일 동행열차",
    subtitle: "AI 기반 커플 기차 여행 코스 추천 앱",
    techStack: ["Flutter", "Dart", "Provider", "Naver Map API"],
    award: "코레일 내일로 해커톤 장려상",
    period: "2025.11 ~ 12",
    links: [
      {
        type: "github",
        url: "https://github.com/dusagong/korail_donghang_train_app",
        label: "GitHub",
      },
    ],
  },
  {
    id: 2,
    title: "FootHub",
    subtitle: "축구 직관 기록 다이어리 앱",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod", "GoRouter"],
    period: "2025.11 ~ 2026.01",
    links: [
      {
        type: "appstore",
        url: "https://apps.apple.com/kr/app/foothub/id6757123385",
        label: "App Store",
      },
      {
        type: "github",
        url: "https://github.com/ychany/FootHub",
        label: "GitHub",
      },
    ],
  },
  {
    id: 3,
    title: "충주 원도심 문제해결 균형발전 시스템",
    subtitle: "AI 기반 동적 리워드 관광 웹앱",
    techStack: ["HTML5", "CSS3", "JavaScript", "Leaflet"],
    award: "충주 청년창업 아이디어 캠프 최우수상",
    period: "2026.01",
    links: [
      {
        type: "demo",
        url: "https://chungju-city-balance.vercel.app",
        label: "Live Demo",
      },
      {
        type: "github",
        url: "https://github.com/ychany/chungju_CityBalance",
        label: "GitHub",
      },
    ],
  },
  {
    id: 4,
    title: "두바이 왕자",
    subtitle: "두바이 쫀득 쿠키 가상 먹방 웹앱",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
    period: "2026.01",
    links: [
      {
        type: "demo",
        url: "https://dujjoncoo.vercel.app",
        label: "Live Demo",
      },
      {
        type: "toss",
        url: "https://minion.toss.im/JesOF8A2",
        label: "Toss 미니앱",
      },
      {
        type: "github",
        url: "https://github.com/ychany/dujjoncoo",
        label: "GitHub",
      },
    ],
  },
  {
    id: 5,
    title: "Smoke Trace",
    subtitle: "담배 한 개비가 남기는 흔적 시각화 웹앱",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Framer Motion"],
    period: "2026.01",
    links: [
      {
        type: "demo",
        url: "https://smoketrace.vercel.app",
        label: "Live Demo",
      },
      {
        type: "toss",
        url: "https://minion.toss.im/VKRZG1yg",
        label: "Toss 미니앱",
      },
      {
        type: "github",
        url: "https://github.com/ychany/smoke_trace",
        label: "GitHub",
      },
    ],
  },
  {
    id: 6,
    title: "Kickoff",
    subtitle: "실시간 축구 경기 정보 토스 미니앱",
    techStack: ["React", "TypeScript", "Vite", "React Router", "TanStack Query", "Framer Motion", "Recharts"],
    period: "2026.02",
    links: [
      {
        type: "demo",
        url: "https://kickoff-live.vercel.app",
        label: "Live Demo",
      },
      {
        type: "toss",
        url: "https://minion.toss.im/J0lHQcjk",
        label: "Toss 미니앱",
      },
      {
        type: "github",
        url: "https://github.com/ychany/kickoff",
        label: "GitHub",
      },
    ],
  },
  {
    id: 7,
    title: "Portfolio",
    subtitle: "개인 포트폴리오 웹사이트",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    period: "2026.01",
    links: [
      {
        type: "demo",
        url: "https://jyc-portfolio.vercel.app",
        label: "Live Demo",
      },
      {
        type: "github",
        url: "https://github.com/ychany/jyc_portfolio",
        label: "GitHub",
      },
    ],
  },
];

export const techTagColors: Record<string, string> = {
  React: "bg-[#61DAFB] text-black",
  "Next.js": "bg-[#000000] text-white",
  TypeScript: "bg-[#3178C6] text-white",
  JavaScript: "bg-[#F7DF1E] text-black",
  HTML5: "bg-[#E34F26] text-white",
  CSS3: "bg-[#1572B6] text-white",
  "Tailwind CSS": "bg-[#06B6D4] text-white",
  Python: "bg-[#3776AB] text-white",
  Firebase: "bg-[#FFCA28] text-black",
  Flutter: "bg-[#02569B] text-white",
  Dart: "bg-[#0175C2] text-white",
  Vite: "bg-[#646CFF] text-white",
  "Framer Motion": "bg-[#0055FF] text-white",
  Riverpod: "bg-[#02569B] text-white",
  GoRouter: "bg-[#02569B] text-white",
  Provider: "bg-[#02569B] text-white",
  "Naver Map API": "bg-[#03C75A] text-white",
  Leaflet: "bg-[#199900] text-white",
  "React Router": "bg-[#CA4245] text-white",
  "TanStack Query": "bg-[#FF4154] text-white",
  Recharts: "bg-[#22B5BF] text-white",
};
