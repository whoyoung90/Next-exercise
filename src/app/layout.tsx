import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

// viewport는 기본 제공 (customizing 가능. 공식문서 참고)
// 프로젝트 전체 경로 Metadata
export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
