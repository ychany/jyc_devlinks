# DevLinks | 조영찬

개발자 조영찬의 프로젝트 링크 모음 사이트입니다.

> [https://jyc-devlinks.vercel.app](https://jyc-devlinks.vercel.app)

## Preview

- Linktree 스타일의 개발자 링크 허브
- 포트폴리오 프로젝트 링크를 한곳에서 확인
- 웹/모바일 반응형 디자인
- 라이트/다크 모드 지원

## Projects

| # | 프로젝트 | 링크 |
|---|---------|------|
| 1 | 코레일 동행열차 | [GitHub](https://github.com/dusagong/korail_donghang_train_app) |
| 2 | FootHub | [App Store](https://apps.apple.com/kr/app/foothub/id6757123385) · [GitHub](https://github.com/ychany/FootHub) |
| 3 | 충주 원도심 균형발전 시스템 | [Demo](https://chungju-city-balance.vercel.app) · [GitHub](https://github.com/ychany/chungju_CityBalance) |
| 4 | 두바이 왕자 | [Demo](https://dujjoncoo.vercel.app) · [Toss](https://minion.toss.im/JesOF8A2) · [GitHub](https://github.com/ychany/dujjoncoo) |
| 5 | Smoke Trace | [Demo](https://smoketrace.vercel.app) · [Toss](https://minion.toss.im/VKRZG1yg) · [GitHub](https://github.com/ychany/smoke_trace) |
| 6 | Kickoff | [Demo](https://kickoff-live.vercel.app) · [Toss](https://minion.toss.im/J0lHQcjk) · [GitHub](https://github.com/ychany/kickoff) |
| 7 | Portfolio | [Demo](https://jyc-portfolio.vercel.app) · [GitHub](https://github.com/ychany/jyc_portfolio) |
| 8 | DevLinks | [Demo](https://jyc-devlinks.vercel.app) · [GitHub](https://github.com/ychany/jyc_devlinks) |

## Tech Stack

- **Framework** — Next.js 16, React 19, TypeScript
- **Styling** — Tailwind CSS 4
- **Animation** — Framer Motion
- **Theme** — next-themes (Light / Dark)
- **Font** — Pretendard
- **Deploy** — Vercel

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # 글로벌 스타일, 폰트, 테마 변수
│   ├── layout.tsx         # 루트 레이아웃 (ThemeProvider)
│   └── page.tsx           # 메인 페이지
├── components/
│   ├── Header.tsx         # 상단 바 (로고 + 다크모드 토글)
│   ├── ProfileSection.tsx # 프로필 영역
│   ├── ProjectCard.tsx    # 프로젝트 카드
│   ├── ProjectsGrid.tsx   # 프로젝트 그리드
│   ├── Footer.tsx         # 푸터
│   └── ui/
│       ├── FadeIn.tsx     # 스크롤 애니메이션
│       ├── ThemeToggle.tsx# 다크/라이트 토글
│       ├── LinkButton.tsx # 링크 버튼
│       └── ScrollToTop.tsx# 스크롤 투 탑
└── data/
    └── links.ts           # 프로젝트/프로필 데이터
```

## License

&copy; 2026 JO YEONG CHAN. All rights reserved.
