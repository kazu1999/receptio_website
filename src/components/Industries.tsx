"use client";

const INDUSTRIES = [
  {
    icon: "🌿",
    name: "造園・植木",
    useCase: "剪定見積もりアポイント受付",
    status: "稼働中",
    active: true,
  },
  {
    icon: "🔧",
    name: "リフォーム・住宅修繕",
    useCase: "現地調査の日程調整",
    status: "展開可能",
    active: false,
  },
  {
    icon: "🏥",
    name: "クリニック・歯科",
    useCase: "診察予約の受付",
    status: "展開可能",
    active: false,
  },
  {
    icon: "💇",
    name: "美容室・サロン",
    useCase: "施術予約の受付",
    status: "展開可能",
    active: false,
  },
  {
    icon: "🚗",
    name: "自動車整備",
    useCase: "車検・修理の予約受付",
    status: "展開可能",
    active: false,
  },
  {
    icon: "📦",
    name: "不用品回収",
    useCase: "回収日の調整",
    status: "展開可能",
    active: false,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Industries
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">対象業種</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            プロンプトとFAQを差し替えるだけで、あらゆる電話予約業務に対応可能です。
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                ind.active
                  ? "border-accent/40 glow-accent"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{ind.icon}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    ind.active
                      ? "bg-accent/15 text-accent"
                      : "bg-surface-light text-muted"
                  }`}
                >
                  {ind.status}
                </span>
              </div>
              <h3 className="font-bold text-base mb-1">{ind.name}</h3>
              <p className="text-sm text-muted">{ind.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
