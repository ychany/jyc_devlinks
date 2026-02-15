import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevLinks | 조영찬",
  description: "개발자 조영찬의 프로젝트 링크 모음입니다.",
  keywords: ["개발자", "포트폴리오", "프로젝트", "링크", "조영찬"],
  authors: [{ name: "조영찬" }],
  openGraph: {
    title: "DevLinks | 조영찬",
    description: "개발자 조영찬의 프로젝트 링크 모음입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
