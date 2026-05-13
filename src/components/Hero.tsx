"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="fade-in-up fade-in-up-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted font-medium">
            OpenAI Realtime API × Twilio 搭載
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-in-up fade-in-up-2 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-6">
          電話に出られない
          <br />
          <span className="gradient-text">を、無くす。</span>
        </h1>

        {/* Sub */}
        <p className="fade-in-up fade-in-up-3 text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          AIが自然な日本語音声でリアルタイム応答。
          <br className="hidden sm:block" />
          ヒアリングからアポイント予約まで、
          <span className="text-foreground font-medium">完全自動で完結</span>します。
        </p>

        {/* CTA buttons */}
        <div className="fade-in-up fade-in-up-4 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#how-it-works"
            className="group px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
          >
            仕組みを見る
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#capabilities"
            className="px-8 py-3.5 text-base font-semibold rounded-full border border-border text-foreground hover:bg-surface-light transition-all"
          >
            できること一覧
          </a>
        </div>

        {/* Stats */}
        <div className="fade-in-up fade-in-up-4 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "24/7", label: "対応" },
            { value: "〜¥200", label: "/ 通話" },
            { value: "2分", label: "デプロイ" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted">Scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-muted"
        >
          <path
            d="M8 3v10M4 9l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
