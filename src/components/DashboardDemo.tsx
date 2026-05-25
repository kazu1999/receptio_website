"use client";

import Link from "next/link";

export default function DashboardDemo() {
  return (
    <section id="demo" className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Dashboard Preview
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            実際の<span className="gradient-text">管理画面</span>を体験
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            AIが受け付けた通話ログの確認、アポイント管理、承認フローまで
            <br className="hidden sm:block" />
            すべてブラウザから操作可能。デモ画面で実際の操作感をお確かめください。
          </p>
        </div>

        {/* Preview card */}
        <div className="gradient-border rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
          {/* Browser chrome */}
          <div className="bg-[#1e1e2e] px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-[#2a2a3e] rounded-md px-3 py-1 text-[11px] text-slate-400 font-mono text-center">
                https://dashboard.receptio.jp
              </div>
            </div>
          </div>

          {/* Screenshot-like preview */}
          <div className="bg-slate-50 flex h-[340px] overflow-hidden">
            {/* Mini sidebar */}
            <div className="w-48 bg-white border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col">
              <div className="px-3 py-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🌿</span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Receptio</div>
                    <div className="text-[8px] text-slate-400 -mt-0.5">Dashboard</div>
                  </div>
                </div>
              </div>
              <div className="px-2 py-2 space-y-0.5">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-medium">
                  <span>📞</span><span>通話ログ</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-500 text-[11px]">
                  <span>📅</span><span>アポイント</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 text-[11px]">
                  <span className="opacity-50">❓</span><span>FAQ</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 text-[11px]">
                  <span className="opacity-50">📝</span><span>プロンプト</span>
                </div>
              </div>
            </div>

            {/* Mini content */}
            <div className="flex-1 p-4 space-y-2 overflow-hidden">
              <div className="text-sm font-bold text-gray-800 mb-3">Ueki 管理ダッシュボード</div>
              {/* Mini call cards */}
              {[
                { phone: "090-1234-5678", approved: false, badge: "📅 アポあり" },
                { phone: "080-9876-5432", approved: true, badge: "✅ 承認済み" },
                { phone: "070-5555-1234", approved: true, badge: "📋 サマリー済み" },
              ].map((c, i) => (
                <div key={i} className={`bg-white rounded-md shadow-sm border-l-3 p-2.5 ${c.approved ? "border-l-green-400" : "border-l-gray-300"}`}>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700 text-xs">📞 {c.phone}</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded-full font-medium">{c.badge}</span>
                  </div>
                </div>
              ))}
              {/* Blur overlay */}
              <div className="relative -mt-4 h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center mt-10">
          <Link
            href="/demo"
            className="group inline-flex items-center gap-3 px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
          >
            デモ画面を体験する
            <span className="inline-block group-hover:translate-x-1 transition-transform text-xl">→</span>
          </Link>
          <p className="mt-3 text-xs text-muted">
            ※ モックデータで操作感を体験できます。アカウント不要。
          </p>
        </div>
      </div>
    </section>
  );
}
