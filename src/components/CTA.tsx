"use client";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/8 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <div className="glass rounded-3xl p-10 md:p-14 border border-primary/20 glow-primary">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-accent font-medium">デモ受付中</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            まずは<span className="gradient-text">デモ</span>を
            <br />
            体験してみませんか？
          </h2>

          <p className="text-muted max-w-lg mx-auto mb-8 leading-relaxed">
            実際のAI電話応対をお聞きいただけます。
            <br />
            導入のご相談、カスタマイズのご要望もお気軽にどうぞ。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@receptio.ai"
              className="group px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
            >
              お問い合わせ
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#demo"
              className="px-8 py-3.5 text-base font-semibold rounded-full border border-border text-foreground hover:bg-surface-light transition-all"
            >
              デモに戻る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
