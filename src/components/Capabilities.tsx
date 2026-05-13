"use client";

const CAPABILITY_GROUPS = [
  {
    title: "AI 音声応答",
    icon: "🗣️",
    color: "border-purple-500/30",
    items: [
      {
        label: "自然な日本語リアルタイム対話",
        detail: "方言（関西弁等）にも自然に対応。「えーと」「あのー」等の間投詞を理解し、誤って応答しない",
      },
      {
        label: "業種別カスタムプロンプト",
        detail: "会話のトーン・流れ・ヒアリング項目をDynamoDBから動的にロード。コード変更不要で調整可能",
      },
      {
        label: "FAQ 自動応答",
        detail: "「料金は？」「今日作業できる？」等のよくある質問に、登録済みFAQデータベースから即座に回答",
      },
      {
        label: "リピーター認識",
        detail: "発信元電話番号から過去3回分の通話履歴を自動取得。「前回ご依頼いただいた松の件ですね」のように文脈を引き継ぐ",
      },
      {
        label: "バージイン（割り込み対応）",
        detail: "AIが話している途中でお客様が話し始めたら、AIの音声を即座に停止して聞く側に切り替え",
      },
      {
        label: "背景ノイズ判定",
        detail: "テレビの音やサイドの会話を検知し、不要な応答をしない（wait_for_user ツール）",
      },
    ],
  },
  {
    title: "予約管理",
    icon: "📅",
    color: "border-blue-500/30",
    items: [
      {
        label: "通話中のアポイント自動登録",
        detail: "名前・日時・住所・電話番号・作業内容の5項目をヒアリングし、揃った時点でDBに即時登録",
      },
      {
        label: "予約の確認・変更・キャンセル",
        detail: "「予約を確認したい」→電話番号で検索→内容読み上げ。変更・キャンセルもすべて音声で完結",
      },
      {
        label: "受付時間チェック",
        detail: "9:00〜17:00等の受付可能時間を設定。時間外の予約は「その時間帯は受付できません」と自動拒否",
      },
      {
        label: "整時バリデーション",
        detail: "「14:30」のような半端な時刻はサーバーサイドで拒否。AIが「14:00はいかがでしょうか」と整時に誘導",
      },
      {
        label: "ダブルブッキング防止",
        detail: "同一時間帯の予約件数上限を設定（例: 最大3件/時間）。上限到達時は別の時間帯を提案",
      },
    ],
  },
  {
    title: "通知・連携",
    icon: "🔔",
    color: "border-green-500/30",
    items: [
      {
        label: "LINE プッシュ通知",
        detail: "アポイント登録時に事業者のLINEへ即時通知。お客様名・日時・住所・作業内容をメッセージで送信",
      },
      {
        label: "通話録音",
        detail: "Twilio APIでデュアルチャンネル録音を自動開始。お客様の声とAIの声を別トラックで保存",
      },
    ],
  },
  {
    title: "運用・管理",
    icon: "📊",
    color: "border-orange-500/30",
    items: [
      {
        label: "コスト自動記録",
        detail: "OpenAIトークン消費量（音声入出力+テキスト推論）とTwilio通話料金を通話ごとにDynamoDBに記録",
      },
      {
        label: "マルチテナント",
        detail: "1システムで複数事業者を運用。電話番号ごとにプロンプト・FAQ・音声・VADパラメータを個別管理",
      },
      {
        label: "ゼロダウンタイムデプロイ",
        detail: "ECR→ECSのローリングデプロイ。ワンコマンドで約2分でデプロイ完了。通話中の切断なし",
      },
      {
        label: "認証情報のホットリロード",
        detail: "Twilio/OpenAIの認証情報をSecrets Managerで管理。更新は5分以内に自動反映（再起動不要）",
      },
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">できること</span>一覧
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            単なる自動音声ガイダンスではありません。予約の CRUD 操作、スケジュール制御、
            リアルタイム通知まで——人間の電話番が行うすべての業務を AI が代行します。
          </p>
        </div>

        {/* Capability groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {CAPABILITY_GROUPS.map((group, i) => (
            <div
              key={i}
              className={`glass rounded-2xl border ${group.color} overflow-hidden`}
            >
              {/* Group header */}
              <div className="px-6 py-4 border-b border-border bg-surface-light/30 flex items-center gap-3">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-bold text-base">{group.title}</h3>
                <span className="ml-auto px-2 py-0.5 rounded-full bg-surface-light text-[10px] font-semibold text-muted">
                  {group.items.length} 機能
                </span>
              </div>

              {/* Items */}
              <div className="p-4 space-y-3">
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    className="group/item rounded-xl p-3 hover:bg-surface-light/50 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <div>
                        <p className="text-sm font-semibold mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
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
