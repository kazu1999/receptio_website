"use client";

const STEPS = [
  {
    number: "01",
    title: "着信受付",
    tech: "Twilio Media Streams",
    description:
      "お客様が電話をかけると、Twilio が着信を受け取り、WebSocket 経由で音声ストリームをサーバーに転送します。pcmu（8kHz）形式のリアルタイム双方向音声チャネルが確立されます。",
    details: [
      "日本の固定電話・携帯電話番号に対応",
      "通話開始と同時にデュアルチャンネル録音を自動開始",
    ],
    icon: "📞",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "音声認識 + AI 思考 + 音声合成",
    tech: "OpenAI Realtime API (gpt-realtime-2)",
    description:
      "サーバーが Twilio の音声を OpenAI Realtime API にリアルタイム転送。OpenAI 側で音声認識（Speech-to-Text）→ AI 推論 → 音声合成（Text-to-Speech）を一気通貫で処理し、自然な日本語で応答します。",
    details: [
      "従来の STT→LLM→TTS の3段構成ではなく、End-to-End の音声モデル",
      "発話のトーンや間合いも理解する Semantic VAD（意味的発話検知）",
      "お客様の割り込み（バージイン）を即座に検知し、AI 音声を停止して聞く側に回る",
      "推論コスト最適化のため reasoning effort を low に設定（レスポンス速度重視）",
    ],
    icon: "🧠",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "ヒアリング → ツール実行",
    tech: "OpenAI Function Calling",
    description:
      "AI が会話の中でお名前・日時・住所・電話番号・作業内容を自然にヒアリング。5つの情報が揃ったと判断した時点で、Function Calling を使ってアポイント登録APIを自動実行します。",
    details: [
      "create_appointment — 新規予約をデータベースに即時登録",
      "get_appointments_by_phone — 電話番号から既存予約を検索",
      "update_appointment / delete_appointment — 予約の変更・キャンセル",
      "wait_for_user — 背景ノイズや無関係な音声を検知し、無応答で待機",
    ],
    icon: "⚡",
    color: "from-primary to-primary-dark",
  },
  {
    number: "04",
    title: "データ保存 + 即時通知",
    tech: "DynamoDB + LINE Messaging API",
    description:
      "登録されたアポイントは DynamoDB に即時保存。同時に事業者の LINE アカウントにプッシュ通知でお客様情報を送信します。通話ログ・トークン使用量・Twilio 通話料金もすべて自動記録されます。",
    details: [
      "アポイント情報（名前・日時・住所・内容）を構造化データとして保存",
      "受付時間外の予約を自動拒否（例: 9:00〜17:00 のみ受付）",
      "同一時間帯の予約上限チェック（ダブルブッキング防止）",
      "OpenAI トークンコスト + Twilio 通話料金を通話ごとに自動記録",
    ],
    icon: "🗄️",
    color: "from-accent to-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            通話1本の<span className="gradient-text">処理フロー</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            電話がかかってきた瞬間から、アポイント登録・LINE通知まで——
            各ステップで何が起きているかを技術的に解説します。
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <div key={i} className="group">
              <div className="glass rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-5">
                    {/* Number + icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-xs font-bold text-muted tracking-widest">
                          STEP {step.number}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-semibold text-primary-light">
                          {step.tech}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Detail bullets */}
                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-accent mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-foreground/80">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3 bg-border" />
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-muted"
                    >
                      <path
                        d="M6 2v8M3 7l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="w-px h-3 bg-border" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
