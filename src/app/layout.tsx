import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
}); // variable font가 아니므로 weight 명시

// 프로젝트 전체 경로 Metadata
export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
  // viewport는 Default Fields MetaData
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
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
