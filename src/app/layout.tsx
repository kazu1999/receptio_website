import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Receptio — AI電話受付システム | 電話に出られないを無くす",
  description:
    "AIがリアルタイムの自然な日本語音声で電話応対し、ヒアリングからアポイント予約まで完全自動で完結。24時間365日、見込み客を逃さない次世代の電話受付ソリューション。",
  keywords: "AI電話, 自動応答, アポイント予約, 電話受付, 音声AI, Twilio, OpenAI",
  openGraph: {
    title: "Receptio — AI電話受付システム",
    description: "AIがリアルタイム音声で電話応対。アポイント予約まで完全自動。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
