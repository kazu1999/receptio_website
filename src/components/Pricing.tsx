"use client";

const COST_ITEMS = [
  {
    label: "OpenAI Realtime API",
    detail: "音声入出力＋テキスト推論",
    cost: "約 ¥15〜30 / 分",
  },
  {
    label: "Twilio 通話料金",
    detail: "日本の固定電話着信",
    cost: "約 ¥3〜5 / 分",
  },
  {
    label: "AWS インフラ",
    detail: "ECS Fargate + DynamoDB",
    cost: "約 ¥3,000〜5,000 / 月",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">コスト構造</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            固定の月額料金ではなく、使った分だけの従量課金。スモールスタートが可能です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Cost breakdown */}
          <div className="space-y-4">
            {COST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{item.label}</h3>
                    <p className="text-xs text-muted mt-0.5">{item.detail}</p>
                  </div>
                  <span className="text-sm font-bold text-primary-light whitespace-nowrap">
                    {item.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison card */}
          <div className="glass rounded-2xl p-8 border border-accent/20 glow-accent">
            <div className="text-center">
              <p className="text-sm text-accent font-semibold mb-2">1通話あたりの平均コスト</p>
              <div className="text-5xl font-extrabold gradient-text mb-2">
                ¥100〜200
              </div>
              <p className="text-sm text-muted mb-8">3〜5分の通話を想定</p>

              <div className="h-px bg-border my-6" />

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-xs text-muted mb-1">電話番スタッフ</p>
                  <p className="text-lg font-bold text-red-400">¥1,200〜</p>
                  <p className="text-[10px] text-muted">時給</p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">Receptio AI</p>
                  <p className="text-lg font-bold text-accent">¥100〜200</p>
                  <p className="text-[10px] text-muted">1通話</p>
                </div>
              </div>

              <div className="mt-6 px-4 py-2.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs font-semibold text-accent">
                  最大 90% のコスト削減
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
