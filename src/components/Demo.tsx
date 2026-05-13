"use client";

import { useState, useEffect } from "react";

interface Message {
  role: "customer" | "ai" | "system";
  text: string;
  delay: number;
}

const CONVERSATION: Message[] = [
  {
    role: "ai",
    text: "お電話ありがとうございます。ダスキン南清水トータルグリーンでございます。",
    delay: 0,
  },
  {
    role: "customer",
    text: "チラシを見て電話したんですが…庭の松の木を剪定してほしいんです",
    delay: 2000,
  },
  {
    role: "ai",
    text: "ありがとうございます。松の木の剪定ですね。一度現地の状態を確認させていただいてから正確なお見積りをお出ししたいのですが、無料で15分〜30分ほどの現地見積もりにお伺いしてもよろしいでしょうか？",
    delay: 4000,
  },
  {
    role: "customer",
    text: "はい、お願いします。明日の午後とかは大丈夫ですか？",
    delay: 7000,
  },
  {
    role: "ai",
    text: "明日の14時頃でいかがでしょうか？",
    delay: 9000,
  },
  {
    role: "customer",
    text: "14時で大丈夫です。住所は京都市伏見区深草…",
    delay: 11000,
  },
  {
    role: "system",
    text: "📅 create_appointment ツール実行中...",
    delay: 13500,
  },
  {
    role: "ai",
    text: "ご予約の登録が完了いたしました。明日14時に担当の者がお伺いいたします。当日はどうぞよろしくお願いいたします。",
    delay: 15000,
  },
  {
    role: "system",
    text: "📱 LINE通知を事業者へ送信しました",
    delay: 17000,
  },
];

export default function Demo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("demo-conversation");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timers = CONVERSATION.map((msg, i) =>
      setTimeout(() => setVisibleCount(i + 1), msg.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <section id="demo" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Live Demo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">実際の会話</span>を体験
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            電話がかかってきた瞬間から、アポイント登録、LINE通知まで——すべて自動で完結します。
          </p>
        </div>

        {/* Phone mockup */}
        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl p-1 glow-primary">
            <div className="bg-surface rounded-[22px] overflow-hidden">
              {/* Phone header */}
              <div className="bg-surface-light px-6 py-4 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AI</span>
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-surface-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Receptio AI</p>
                    <p className="text-xs text-accent flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      通話中
                    </p>
                  </div>
                </div>
                {/* Audio wave */}
                <div className="flex items-center gap-0.5 h-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="wave-bar" />
                  ))}
                </div>
              </div>

              {/* Conversation */}
              <div
                id="demo-conversation"
                className="p-4 space-y-3 min-h-[420px] max-h-[520px] overflow-y-auto"
              >
                {CONVERSATION.slice(0, visibleCount).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex fade-in-up ${
                      msg.role === "customer"
                        ? "justify-end"
                        : msg.role === "system"
                        ? "justify-center"
                        : "justify-start"
                    }`}
                  >
                    {msg.role === "system" ? (
                      <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-medium">
                        {msg.text}
                      </div>
                    ) : (
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "customer"
                            ? "bg-primary/20 text-foreground rounded-br-md"
                            : "bg-surface-light text-foreground rounded-bl-md border border-border"
                        }`}
                      >
                        <p className="text-[10px] text-muted mb-1 font-medium">
                          {msg.role === "customer" ? "📞 お客様" : "🤖 AI"}
                        </p>
                        {msg.text}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {visibleCount < CONVERSATION.length && started && (
                  <div className="flex justify-start">
                    <div className="bg-surface-light rounded-2xl rounded-bl-md px-4 py-3 border border-border">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
