"use client";

const TECH_CARDS = [
  {
    name: "OpenAI Realtime API",
    version: "gpt-realtime-2",
    icon: "🧠",
    category: "音声AI",
    color: "border-purple-500/30",
    what: "音声入力をそのまま受け取り、推論し、音声で返すEnd-to-Endのリアルタイム音声AIモデル。",
    why: [
      "従来の STT→LLM→TTS 構成では往復で2〜5秒の遅延が発生。Realtime API は数百ミリ秒で応答可能",
      "Function Calling に対応しており、会話中にデータベース操作を自然に実行できる",
      "Semantic VAD により「えーと…」のような日本語特有の間合いを理解し、誤って発話終了と判定しない",
    ],
    metrics: [
      { label: "レスポンス", value: "~500ms" },
      { label: "音声形式", value: "pcmu" },
      { label: "推論", value: "reasoning=low" },
    ],
  },
  {
    name: "Twilio Media Streams",
    version: "WebSocket API",
    icon: "📞",
    category: "電話基盤",
    color: "border-red-500/30",
    what: "電話回線（PSTN）とサーバーを WebSocket で接続し、リアルタイム双方向音声ストリーミングを実現するクラウド電話プラットフォーム。",
    why: [
      "日本の固定電話・携帯電話番号を即座にプロビジョニング可能",
      "Media Streams で pcmu 音声をそのまま WebSocket 転送（変換不要）",
      "REST API で通話録音の開始・通話料金の取得が可能",
    ],
    metrics: [
      { label: "録音", value: "デュアルCh" },
      { label: "コスト", value: "~¥4/分" },
      { label: "可用性", value: "99.95% SLA" },
    ],
  },
  {
    name: "FastAPI + asyncio",
    version: "Python 3.11",
    icon: "⚡",
    category: "サーバー",
    color: "border-yellow-500/30",
    what: "高性能な非同期 WebSocket サーバー。Twilio と OpenAI の2つの WebSocket 接続を同時に管理し、リアルタイムで音声を双方向ブリッジ。",
    why: [
      "asyncio.gather で Twilio→OpenAI / OpenAI→Twilio の双方向ブリッジを並行実行",
      "asyncio.to_thread で DynamoDB 等のブロッキング処理をイベントループに混ぜずに実行",
      "1プロセスで複数の同時通話を効率的にハンドル",
    ],
    metrics: [
      { label: "フレームワーク", value: "FastAPI" },
      { label: "ASGI", value: "Uvicorn" },
      { label: "並行処理", value: "asyncio" },
    ],
  },
  {
    name: "Amazon DynamoDB",
    version: "6テーブル構成",
    icon: "🗄️",
    category: "データベース",
    color: "border-orange-500/30",
    what: "サーバーレスの NoSQL データベース。アポイント・通話ログ・FAQ・プロンプト・コスト記録・電話番号設定を管理。",
    why: [
      "ミリ秒単位のレスポンスで通話中のリアルタイムデータ操作に最適",
      "GSI（Global Secondary Index）でアポ検索や通話履歴を電話番号から高速クエリ",
      "client_id をパーティションキーとしたマルチテナントデータ分離",
    ],
    metrics: [
      { label: "テーブル数", value: "6" },
      { label: "レスポンス", value: "~10ms" },
      { label: "課金", value: "従量制" },
    ],
  },
  {
    name: "AWS ECS Fargate",
    version: "ALB + Terraform",
    icon: "🚀",
    category: "インフラ",
    color: "border-green-500/30",
    what: "サーバーレスのコンテナ実行環境。Docker イメージを ECR にプッシュし、ECS がコンテナを自動管理。ALB が WebSocket 接続を安定的にプロキシ。",
    why: [
      "EC2 インスタンスの管理が不要（パッチ適用・スケーリングを AWS が自動管理）",
      "ワンコマンドでビルド→プッシュ→デプロイ（所要時間 約2分）",
      "Terraform による IaC（Infrastructure as Code）で環境を完全再現可能",
    ],
    metrics: [
      { label: "デプロイ", value: "~2分" },
      { label: "スケール", value: "0〜20台" },
      { label: "ダウンタイム", value: "ゼロ" },
    ],
  },
  {
    name: "Secrets Manager + Cognito",
    version: "セキュリティ基盤",
    icon: "🔐",
    category: "セキュリティ",
    color: "border-cyan-500/30",
    what: "API キーや認証情報を安全に管理。Cognito でダッシュボードのユーザー認証を提供。認証情報は5分ごとにホットリロード（コンテナ再起動不要）。",
    why: [
      "環境変数に秘密情報をハードコードせず、Secrets Manager から動的に取得",
      "Twilio 認証情報を5分キャッシュし、Secrets Manager の更新を自動反映",
      "IAM ロールによる最小権限アクセス制御",
    ],
    metrics: [
      { label: "キャッシュ", value: "5分TTL" },
      { label: "認証", value: "IAMロール" },
      { label: "暗号化", value: "AES-256" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Technology
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">技術スタック</span>詳解
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            なぜこの技術を選んだのか。各コンポーネントの役割と、採用理由を具体的に解説します。
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {TECH_CARDS.map((tech, i) => (
            <div
              key={i}
              className={`glass rounded-2xl border ${tech.color} hover:scale-[1.01] transition-all duration-300 overflow-hidden`}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <h3 className="font-bold text-base">{tech.name}</h3>
                      <p className="text-xs text-muted">{tech.version}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-light text-[10px] font-semibold text-muted border border-border">
                    {tech.category}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {tech.what}
                </p>

                {/* Why bullets */}
                <div className="space-y-2 mb-4">
                  {tech.why.map((reason, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-0.5 flex-shrink-0 text-xs">▸</span>
                      <span className="text-foreground/80 leading-relaxed">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics bar */}
              <div className="px-6 py-3 bg-surface-light/50 border-t border-border flex justify-between">
                {tech.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <p className="text-xs font-bold text-primary-light">
                      {m.value}
                    </p>
                    <p className="text-[10px] text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
