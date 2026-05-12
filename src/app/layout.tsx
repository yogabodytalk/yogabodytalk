import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Yoga Phong Thái | BODY TALK by Master Thu Nhanh",
  description:
    "Khóa học Yoga Phong Thái giúp phụ nữ chỉnh dáng, mở hơi thở, định tuyến trục cơ thể và xây dựng phong thái tự tin từ bên trong.",
  openGraph: {
    title: "Yoga Phong Thái | BODY TALK",
    description:
      "Đẹp từ trục cơ thể. Sang từ phong thái. Lộ trình yoga chỉnh dáng, video học tập và tư vấn cá nhân cùng Master Thu Nhanh.",
    images: ["/anh-ghep/yoga-phong-thai-mau1-goc2.png"],
  },
  icons: {
    icon: "/brand-assets/body-talk-symbol-dark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
