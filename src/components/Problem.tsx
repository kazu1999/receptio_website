"use client";

const PROBLEMS = [
  {
    icon: "📞",
    before: "作業中・移動中に電話に出られない",
    after: "AIが24時間365日、即時に応答",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/20",
    accentColor: "text-red-400",
  },
  {
    icon: "🏃",
    before: "折り返しのたびに見込み客が離脱",
    after: "その場でアポイントまで完結",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
  },
  {
    icon: "💰",
    before: "電話番スタッフの人件費が高い",
    after: "1通話 約¥100〜200で運用可能",
    color: "from-yellow-500/20 to-yellow-500/5",
    borderColor: "border-yellow-500/20",
    accentColor: "text-yellow-400",
  },
  {
    icon: "📝",
    before: "電話のやり取りが記録に残らない",
    after: "全通話を自動録音・ログ保存",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
  },
  {
    icon: "📅",
    before: "予約のダブルブッキングが発生",
    after: "空き枠・重複をリアルタイムチェック",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            こんな<span className="gradient-text">課題</span>ありませんか？
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            中小企業の多くが電話対応の問題を抱えています。Receptioはこれらを一気に解決します。
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className={`group glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 border ${p.borderColor} hover:border-primary/30`}
            >
              <div className="text-3xl mb-4">{p.icon}</div>

              {/* Before */}
              <div className="flex items-start gap-2 mb-3">
                <span className="mt-0.5 text-red-400 text-sm">✕</span>
                <p className="text-sm text-muted leading-relaxed">{p.before}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 my-3 pl-5">
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <span className="text-xs text-muted">▼</span>
                <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
              </div>

              {/* After */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-accent text-sm">✓</span>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  {p.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
