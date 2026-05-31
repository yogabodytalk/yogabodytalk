import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yogaphongthai.vercel.app";
const socialImage = "/og/yoga-phong-thai-sale-thumbnail.png";

const displaySerif = Lora({
  display: "swap",
  subsets: ["vietnamese"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const bodySans = Nunito_Sans({
  display: "swap",
  subsets: ["vietnamese"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yoga Phong Thái | BODY TALK by Master Thu Nhanh",
  description:
    "Khóa học Yoga Phong Thái giúp phụ nữ chỉnh dáng, mở hơi thở, định tuyến trục cơ thể và xây dựng phong thái tự tin từ bên trong.",
  openGraph: {
    title: "Yoga Phong Thái | BODY TALK",
    description:
      "Đẹp từ trục cơ thể. Sang từ phong thái. Lộ trình yoga chỉnh dáng, video học tập và tư vấn cá nhân cùng Master Thu Nhanh.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Yoga Phong Thái BODY TALK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Phong Thái | BODY TALK",
    description:
      "Đẹp từ trục cơ thể. Sang từ phong thái. Lộ trình yoga chỉnh dáng, video học tập và tư vấn cá nhân cùng Master Thu Nhanh.",
    images: [socialImage],
  },
  icons: {
    icon: "/brand-assets/body-talk-symbol-dark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${displaySerif.variable} ${bodySans.variable}`}>{children}</body>
    </html>
  );
}
