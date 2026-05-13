"use client";

const FEATURES = [
  {
    icon: "🗣️",
    title: "自然な日本語音声対話",
    description:
      "関西弁や方言にも自然に対応。業種ごとにトーンや会話フローをカスタマイズ可能。FAQデータベースからの自動応答にも対応。",
    badge: "OpenAI gpt-realtime-2",
  },
  {
    icon: "📅",
    title: "アポイント自動管理",
    description:
      "通話中にAIが名前・日時・住所・電話番号をヒアリングし、その場でデータベースに予約登録。確認・変更・キャンセルもすべて音声で完結。",
    badge: "Function Calling",
  },
  {
    icon: "🛡️",
    title: "スケジュールバリデーション",
    description:
      "受付時間外の予約を自動拒否。整時チェック（14:30→14:00に誘導）。同時間帯の上限件数制限でダブルブッキングを防止。",
    badge: "Server-side",
  },
  {
    icon: "🔔",
    title: "リアルタイム通知",
    description:
      "アポイント登録時にLINEで即時プッシュ通知。着信時にはメールで自動通知。見逃しゼロの運用を実現。",
    badge: "LINE / SES",
  },
  {
    icon: "🎙️",
    title: "高精度な発話検知",
    description:
      "Semantic VADで「えーと…」や間合いを理解。お客様の割り込み（バージイン）にも即座に対応。Watchdogタイマーで無音も安全にハンドル。",
    badge: "Semantic VAD",
  },
  {
    icon: "🏢",
    title: "マルチテナント対応",
    description:
      "1システムで複数の事業者を運用。電話番号ごとにプロンプト・FAQ・音声・VADパラメータを個別設定。データは完全分離。",
    badge: "Multi-tenant",
  },
  {
    icon: "📊",
    title: "コスト自動記録",
    description:
      "OpenAIトークン消費量とTwilio通話料金を通話ごとに自動記録。ダッシュボードでリアルタイムにコストを可視化。",
    badge: "Auto-tracking",
  },
  {
    icon: "🔁",
    title: "リピーター認識",
    description:
      "発信元の電話番号から過去の通話履歴を自動取得。AIが前回の問い合わせ内容を踏まえて対応し、お客様に安心感を提供。",
    badge: "Context-aware",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">主要機能</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            単なる自動応答ではありません。予約管理・通知・コスト管理までを統合した、本格的な電話受付プラットフォームです。
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 hover:border-primary/30 border border-transparent flex flex-col"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="inline-flex self-start px-2.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-semibold text-primary-light mb-3 tracking-wide">
                {f.badge}
              </div>
              <h3 className="text-base font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
