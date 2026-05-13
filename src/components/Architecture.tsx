"use client";

const LAYERS = [
  {
    label: "お客様の電話",
    icon: "📞",
    tech: "PSTN",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
  },
  {
    label: "Twilio Media Streams",
    icon: "☁️",
    tech: "WebSocket / pcmu",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/30",
  },
  {
    label: "Receptio Server",
    icon: "⚡",
    tech: "FastAPI + Python 3.11 / ECS Fargate",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    label: "OpenAI Realtime API",
    icon: "🧠",
    tech: "gpt-realtime-2 / Semantic VAD",
    color: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/30",
  },
  {
    label: "AWS バックエンド",
    icon: "🗄️",
    tech: "DynamoDB / SES / Secrets Manager",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/30",
  },
];

const TECH_STACK = [
  { name: "OpenAI Realtime API", category: "音声AI" },
  { name: "Twilio", category: "電話基盤" },
  { name: "FastAPI", category: "サーバー" },
  { name: "Python 3.11", category: "言語" },
  { name: "DynamoDB", category: "データベース" },
  { name: "ECS Fargate", category: "コンテナ" },
  { name: "ALB", category: "ロードバランサ" },
  { name: "Secrets Manager", category: "認証管理" },
  { name: "SES + Cognito", category: "通知" },
  { name: "LINE API", category: "通知" },
  { name: "Terraform", category: "IaC" },
  { name: "Docker", category: "コンテナ化" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 md:py-32 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">システム構成</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            エンタープライズグレードの技術スタックで、安定性とスケーラビリティを両立。
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="space-y-3">
            {LAYERS.map((layer, i) => (
              <div key={i}>
                <div
                  className={`glass rounded-xl p-5 border ${layer.borderColor} hover:scale-[1.01] transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl w-10 text-center">{layer.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{layer.label}</h3>
                      <p className="text-xs text-muted mt-0.5">{layer.tech}</p>
                    </div>
                    {i < LAYERS.length - 1 && (
                      <div className="text-xs text-muted hidden sm:block">
                        {i === 0 ? "PSTN →" : i === 1 ? "WebSocket →" : i === 2 ? "WebSocket →" : "API →"}
                      </div>
                    )}
                  </div>
                </div>
                {i < LAYERS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-gradient-to-b from-border to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack pills */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-bold mb-6">使用技術一覧</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <div
                key={i}
                className="group glass rounded-full px-4 py-2 border border-border hover:border-primary/40 transition-all cursor-default"
              >
                <span className="text-xs text-muted mr-1.5">{tech.category}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
