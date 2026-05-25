"use client";

import { useState } from "react";
import Link from "next/link";

type DemoPage = "calls" | "appointments" | "faq" | "prompt";

const MOCK_CALLS = [
  { id: "1", phone: "090-1234-5678", ts: "2025/05/25 14:32", approved: false, hasApt: true, summary: "松の剪定のお見積もりを希望。来週火曜日の午前中をご希望。西宮市甲子園口にお住まい。", apt: { name: "田中 太郎", date: "2025/05/27 10:00", content: "松の剪定 見積もり", address: "兵庫県西宮市甲子園口3丁目", phone: "090-1234-5678" } },
  { id: "2", phone: "080-9876-5432", ts: "2025/05/25 11:15", approved: true, hasApt: true, summary: "庭全体の草刈りを依頼。今週金曜日の午後に訪問予約済み。", apt: { name: "佐藤 花子", date: "2025/05/30 14:00", content: "草刈り（庭全体）", address: "兵庫県宝塚市中筋2丁目", phone: "080-9876-5432" } },
  { id: "3", phone: "070-5555-1234", ts: "2025/05/24 16:45", approved: true, hasApt: false, summary: "料金体系について質問。剪定の相場を確認後、検討するとのこと。FAQ自動応答で対応完了。", apt: null },
  { id: "4", phone: "090-3333-7777", ts: "2025/05/24 09:20", approved: false, hasApt: true, summary: "生垣の刈り込みを希望。隣家との境界沿い約10m。6月上旬希望。", apt: { name: "山本 健太", date: "2025/06/03 09:00", content: "生垣 刈り込み（約10m）", address: "兵庫県芦屋市翠ケ丘町", phone: "090-3333-7777" } },
  { id: "5", phone: "080-2222-4444", ts: "2025/05/23 15:10", approved: true, hasApt: true, summary: "庭木3本の伐採依頼。高さ約5m。クレーン不要。来週水曜日希望。", apt: { name: "中村 美咲", date: "2025/05/28 11:00", content: "庭木伐採（3本）", address: "兵庫県尼崎市武庫之荘", phone: "080-2222-4444" } },
];

const MOCK_APTS = [
  { id: "a1", name: "田中 太郎", date: "2025/05/27 10:00", content: "松の剪定 見積もり", address: "兵庫県西宮市甲子園口3丁目", phone: "090-1234-5678", approved: false, type: "phone" },
  { id: "a2", name: "佐藤 花子", date: "2025/05/30 14:00", content: "草刈り（庭全体）", address: "兵庫県宝塚市中筋2丁目", phone: "080-9876-5432", approved: true, type: "phone" },
  { id: "a3", name: "山本 健太", date: "2025/06/03 09:00", content: "生垣 刈り込み（約10m）", address: "兵庫県芦屋市翠ケ丘町", phone: "090-3333-7777", approved: false, type: "phone" },
  { id: "a4", name: "中村 美咲", date: "2025/05/28 11:00", content: "庭木伐採（3本）", address: "兵庫県尼崎市武庫之荘", phone: "080-2222-4444", approved: true, type: "phone" },
  { id: "a5", name: "鈴木 一郎", date: "2025/06/05 13:00", content: "植木の消毒", address: "兵庫県西宮市苦楽園", phone: "080-1111-2222", approved: true, type: "manual" },
];

const NAV = [
  { key: "calls" as const, icon: "📞", label: "通話ログ" },
  { key: "appointments" as const, icon: "📅", label: "アポイント" },
];
const ADMIN_NAV = [
  { key: "faq" as const, icon: "❓", label: "FAQ" },
  { key: "prompt" as const, icon: "📝", label: "プロンプト" },
];
const SYS_NAV = [
  { icon: "☁️", label: "AWSコスト" }, { icon: "💻", label: "サーバー管理" },
  { icon: "🪙", label: "トークン" }, { icon: "📱", label: "電話番号設定" },
  { icon: "👥", label: "ユーザー" }, { icon: "⚙️", label: "設定" },
];

function CallsView() {
  const [filter, setFilter] = useState<"all"|"unapproved"|"approved">("all");
  const [expanded, setExpanded] = useState<string|null>("1");
  const filtered = MOCK_CALLS.filter(c => filter === "all" ? true : filter === "approved" ? c.approved : !c.approved);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Ueki 管理ダッシュボード</h2>
          <div className="mt-3 flex space-x-4">
            <span className="pb-2 px-1 text-sm font-medium border-b-2 border-blue-600 text-blue-600">📞 通話ログ</span>
            <span className="pb-2 px-1 text-sm font-medium border-b-2 border-transparent text-gray-400 cursor-pointer hover:text-gray-600">📊 顧客別集計</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">通話ログから抽出されたアポイント候補の確認・承認が行えます</p>
        <div className="flex bg-gray-100 p-0.5 rounded-lg">
          {(["all","unapproved","approved"] as const).map(s=>(
            <button key={s} onClick={()=>setFilter(s)} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${filter===s?"bg-white text-blue-600 shadow-sm":"text-gray-500 hover:text-gray-700"}`}>
              {s==="all"?"すべて":s==="unapproved"?"未承認":"承認済み"}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-100">
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">電話番号で絞り込み</label>
            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md"><option>すべて</option>{MOCK_CALLS.map(c=><option key={c.id}>{c.phone}</option>)}</select>
          </div>
          <button className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md font-medium hover:bg-blue-700 transition-colors">🔄 再読み込み</button>
        </div>
        <div className="mt-2 text-xs text-gray-400">{filtered.length}件の通話を表示中</div>
      </div>
      <div className="space-y-3">
        {filtered.map(call=>{
          const isExp = expanded===call.id;
          return (
            <div key={call.id} className={`bg-white shadow-sm rounded-lg border-l-4 transition-all ${call.approved?"border-green-400":"border-gray-300"}`}>
              <div className="p-4 cursor-pointer hover:bg-gray-50 transition-colors" onClick={()=>setExpanded(isExp?null:call.id)}>
                <div className="flex items-start gap-2">
                  <span className="text-xs mt-1 transition-transform" style={{transform:isExp?"rotate(90deg)":"none",display:"inline-block"}}>▶</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-800 text-base">📞 {call.phone}</span>
                      {call.approved&&<span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full font-semibold">✅ 承認済み</span>}
                      {call.hasApt&&<span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full font-semibold">📅 アポあり</span>}
                      <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full font-semibold">📋 サマリー済み</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">🕐 {call.ts}</div>
                    {call.summary&&<div className="mt-2 text-sm text-gray-600 bg-purple-50 p-2 rounded border border-purple-100 line-clamp-2">📋 {call.summary}</div>}
                  </div>
                  {!call.approved&&<button onClick={e=>{e.stopPropagation()}} className="px-4 py-2 text-xs bg-green-600 text-white rounded font-medium hover:bg-green-700 whitespace-nowrap">✅ 承認</button>}
                </div>
              </div>
              {isExp&&call.apt&&(
                <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-3">
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2 border-b border-blue-100 pb-1">
                      <div className="text-xs font-bold text-blue-600">📅 アポイント詳細</div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-green-100 text-green-700">AI 受電</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                      <div><span className="text-gray-400">氏名:</span> {call.apt.name}</div>
                      <div><span className="text-gray-400">訪問日時:</span> {call.apt.date}</div>
                      <div><span className="text-gray-400">住所:</span> {call.apt.address}</div>
                      <div><span className="text-gray-400">内容:</span> {call.apt.content}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs bg-purple-600 text-white rounded font-medium hover:bg-purple-700">📝 文字起こし &amp; 保存</button>
                    <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded font-medium hover:bg-indigo-700">✨ サマリー生成 &amp; 保存</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AptsView() {
  const pending = MOCK_APTS.filter(a=>!a.approved);
  const approved = MOCK_APTS.filter(a=>a.approved);
  const Section = ({title,icon,items,color}:{title:string;icon:string;items:typeof MOCK_APTS;color:"yellow"|"green"})=>(
    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{icon} {title}</h3>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${color==="yellow"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`}>{items.length}件</span>
      </div>
      <div className="space-y-3">
        {items.map(apt=>(
          <div key={apt.id} className={`border-2 rounded-lg p-4 ${color==="yellow"?"border-yellow-200 bg-yellow-50":"border-green-200 bg-green-50"}`}>
            <div className="flex justify-between items-start">
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-900 text-lg">👤 {apt.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${apt.approved?"bg-green-200 text-green-800":"bg-yellow-200 text-yellow-800"}`}>{apt.approved?"✅ 承認済み":"⏳ 未承認"}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${apt.type==="phone"?"bg-blue-100 text-blue-700":"bg-gray-100 text-gray-600"}`}>{apt.type==="phone"?"📞 受電":"✏️ 手入力"}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700">
                  <div>🗓️ <span className="font-medium">訪問日時:</span> {apt.date}</div>
                  <div>📋 <span className="font-medium">内容:</span> {apt.content}</div>
                  <div>📍 <span className="font-medium">住所:</span> {apt.address}</div>
                  <div>📞 <span className="font-medium">電話番号:</span> {apt.phone}</div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-shrink-0 ml-4">
                <button className="px-3 py-1.5 text-xs bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50 font-medium">✏️ 編集</button>
                {!apt.approved&&<button className="px-3 py-1.5 text-xs bg-green-600 text-white rounded hover:bg-green-700 font-medium">✅ 承認</button>}
                <button className="px-3 py-1.5 text-xs bg-red-100 text-red-700 border border-red-300 rounded hover:bg-red-200 font-medium">🗑️ 削除</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">📅 アポイント一覧</h2>
          <p className="mt-1 text-sm text-gray-500">AIが受け付けた受電アポ、および手動で登録された訪問予約を一覧で管理</p>
        </div>
        <div className="flex gap-2">
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold flex items-center gap-1.5 hover:bg-indigo-700 transition-colors shadow-md">➕ 新規アポ登録</button>
          <button className="px-4 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm shadow-sm">🔄 更新</button>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <span className="px-3 py-2 text-sm font-medium bg-indigo-600 text-white">☰ リスト</span>
            <span className="px-3 py-2 text-sm font-medium bg-white text-gray-600 border-l border-gray-200 cursor-pointer hover:bg-gray-50">📅 カレンダー</span>
          </div>
        </div>
      </div>
      <Section title="未承認" icon="⏳" items={pending} color="yellow" />
      <Section title="承認済み" icon="✅" items={approved} color="green" />
    </div>
  );
}

const MOCK_FAQS = [
  { question: "料金はいくらですか？", answer: "剪定は1本あたり3,000円〜、草刈りは1㎡あたり500円〜となります。現地見積もりは無料です。" },
  { question: "対応エリアはどこですか？", answer: "兵庫県の西宮市・芦屋市・宝塚市・尼崎市・伊丹市を中心に対応しております。その他のエリアもお気軽にご相談ください。" },
  { question: "当日の作業は可能ですか？", answer: "スケジュールに空きがあれば当日対応も可能です。まずはお電話でご確認ください。" },
  { question: "支払い方法は？", answer: "現金、銀行振込に対応しております。作業完了後のお支払いとなります。" },
];

const MOCK_PROMPT = `# 植木屋 Ueki AI電話受付プロンプト

あなたは植木屋「Ueki」の電話受付AIアシスタントです。

## 基本方針
- 丁寧で温かみのある関西弁混じりの標準語で対応
- お客様の要望を正確にヒアリング
- アポイント予約まで完結させる

## ヒアリング項目
1. お客様のお名前
2. ご希望の作業内容
3. ご住所
4. ご希望の訪問日時
5. お電話番号（\{CALLER_PHONE\} で確認）

## 受付可能時間
\{SCHEDULE_START\}〜\{SCHEDULE_END\}

## FAQ
\{FAQ_KB\}

## 注意事項
- 今日の日付: \{TODAY\}
- 同一時間帯の最大予約数: \{MAX_CONCURRENT\}件`;

function FAQView() {
  const [faqs, setFaqs] = useState(MOCK_FAQS);
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");
  const [editing, setEditing] = useState<string|null>(null);
  const [editAnswer, setEditAnswer] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">FAQ 管理</h2>
        <p className="mt-1 text-sm text-gray-600">クライアント: <span className="font-semibold text-indigo-600">ueki</span> のFAQを管理します</p>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">新規FAQ作成</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">質問</label>
            <input type="text" value={newQ} onChange={e=>setNewQ(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="例: 営業時間は何時から何時までですか？" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">回答</label>
            <textarea value={newA} onChange={e=>setNewA(e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="例: 平日は9:00〜18:00です。" />
          </div>
          <button onClick={()=>{ if(newQ&&newA){setFaqs(prev=>[...prev,{question:newQ,answer:newA}]);setNewQ("");setNewA("");} }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">作成</button>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">FAQ 一覧（{faqs.length}件）</h3>
        <div className="space-y-4">
          {faqs.map((faq,i)=>(
            <div key={i} className="border rounded-lg p-4">
              {editing===faq.question ? (
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">質問（編集不可）</label><div className="text-gray-900 font-medium">{faq.question}</div></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">回答</label><textarea value={editAnswer} onChange={e=>setEditAnswer(e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                  <div className="flex gap-2">
                    <button onClick={()=>{setFaqs(prev=>prev.map(f=>f.question===faq.question?{...f,answer:editAnswer}:f));setEditing(null)}} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">保存</button>
                    <button onClick={()=>setEditing(null)} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">キャンセル</button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-gray-900">{faq.question}</div>
                    <div className="flex gap-2">
                      <button onClick={()=>{setEditing(faq.question);setEditAnswer(faq.answer)}} className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">編集</button>
                      <button onClick={()=>setFaqs(prev=>prev.filter(f=>f.question!==faq.question))} className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">削除</button>
                    </div>
                  </div>
                  <div className="text-gray-700 whitespace-pre-wrap">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PromptView() {
  const [content, setContent] = useState(MOCK_PROMPT);
  const [saved, setSaved] = useState(MOCK_PROMPT);
  const [preview, setPreview] = useState(false);
  const hasChanges = content !== saved;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">システムプロンプト</h2>
          <p className="mt-1 text-sm text-gray-600">クライアント: <span className="font-semibold text-indigo-600">ueki</span> のプロンプトを編集します（Markdown対応）</p>
        </div>
        <div className="flex gap-2">
          <button onClick={()=>setPreview(!preview)} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">{preview?"編集モード":"プレビュー"}</button>
          <button onClick={()=>{setSaved(content)}} disabled={!hasChanges} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">{hasChanges?"保存 *":"保存"}</button>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-8 border border-gray-100">
        {preview ? (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[500px] prose prose-sm max-w-none">
            {content.split("\n").map((line,i)=>{
              if(line.startsWith("# ")) return <h1 key={i} className="text-2xl font-bold text-gray-900 mt-6 mb-3 pb-2 border-b-2 border-gray-300">{line.slice(2)}</h1>;
              if(line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-gray-800 mt-5 mb-2 pb-1 border-b border-gray-200">{line.slice(3)}</h2>;
              if(line.startsWith("- ")) return <li key={i} className="text-gray-700 ml-4 list-disc">{line.slice(2)}</li>;
              if(line.match(/^\d+\. /)) return <li key={i} className="text-gray-700 ml-4 list-decimal">{line.replace(/^\d+\. /,"")}</li>;
              if(line.trim()==="") return <br key={i}/>;
              return <p key={i} className="text-gray-700 leading-relaxed mb-2">{line}</p>;
            })}
          </div>
        ) : (
          <textarea value={content} onChange={e=>setContent(e.target.value)} rows={22} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm" />
        )}
        <div className="mt-4 text-sm text-gray-500">
          <div>文字数: {content.length}</div>
          {hasChanges && <div className="text-yellow-600 font-medium">未保存の変更があります</div>}
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">💡 ヒント</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• プロンプトは Markdown 形式で記述できます</li>
          <li>• 保存すると即座に AI の動作に反映されます（再デプロイ不要）</li>
          <li>• 変更前にバックアップを取ることをお勧めします</li>
        </ul>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="font-semibold text-amber-900 mb-3">🔧 使えるプレースホルダー</h3>
        <p className="text-xs text-amber-700 mb-3">プロンプト内に以下のキーワードを書くと、通話時に自動で値に置き換わります。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { code: "{CALLER_PHONE}", desc: "発信者の電話番号" },
            { code: "{TODAY}", desc: "今日の日付（JST・曜日付き）" },
            { code: "{FAQ_KB}", desc: "FAQ データベース" },
            { code: "{SCHEDULE_START}", desc: "アポ受付開始時刻" },
            { code: "{SCHEDULE_END}", desc: "アポ受付終了時刻" },
            { code: "{MAX_CONCURRENT}", desc: "同時刻の最大重複数" },
          ].map(p=>(
            <div key={p.code} className="flex items-center gap-2 bg-white rounded p-2 border border-amber-200">
              <code className="text-amber-800 font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded whitespace-nowrap">{p.code}</code>
              <span className="text-xs text-amber-800">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DemoPage() {
  const [page, setPage] = useState<DemoPage>("calls");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-slate-200/60 z-40">
        <div className="flex flex-col h-full">
          <div className="px-5 py-5 border-b border-slate-200/60">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="text-base font-bold text-slate-900 tracking-tight">Receptio</div>
                <div className="text-[10px] text-slate-400 font-medium -mt-0.5">Dashboard Demo</div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 border-b border-slate-200/60">
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">クライアント</div>
            <select className="w-full text-xs border border-blue-200 rounded-lg px-2.5 py-2 bg-blue-50/50 text-blue-700 font-semibold outline-none cursor-pointer" defaultValue="ueki">
              <option>ueki</option><option>demo-client</option>
            </select>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
            <div className="space-y-1">
              <div className="px-3 mb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">メイン</div>
              {NAV.map(n=>(
                <button key={n.key} onClick={()=>setPage(n.key)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${page===n.key?"bg-blue-50 text-blue-700 shadow-sm border border-blue-100":"text-slate-600 hover:bg-slate-100 border border-transparent"}`}>
                  <span className="text-base">{n.icon}</span><span>{n.label}</span>{page===n.key&&<span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"/>}
                </button>
              ))}
            </div>
            <div className="space-y-1">
              <div className="px-3 mb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">管理者</div>
              {ADMIN_NAV.map(n=>(
                <button key={n.key} onClick={()=>setPage(n.key)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${page===n.key?"bg-blue-50 text-blue-700 shadow-sm border border-blue-100":"text-slate-600 hover:bg-slate-100 border border-transparent"}`}>
                  <span className="text-base">{n.icon}</span><span>{n.label}</span>{page===n.key&&<span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"/>}
                </button>
              ))}
            </div>
            <div className="space-y-1">
              <div className="px-3 mb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">システム管理</div>
              {SYS_NAV.map(n=><div key={n.label} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400"><span className="text-base opacity-50">{n.icon}</span><span>{n.label}</span></div>)}
            </div>
          </nav>
          <div className="px-4 py-4 border-t border-slate-200/60">
            <Link href="/" className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
              ← LPに戻る
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2"><span className="text-xl">🌿</span><span className="text-sm font-bold text-slate-900">Receptio Demo</span></Link>
          <button onClick={()=>setMobileOpen(!mobileOpen)} className="p-2 rounded-xl text-slate-600 hover:bg-slate-100">
            {mobileOpen?<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            :<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>}
          </button>
        </div>
      </div>
      {mobileOpen&&(
        <div className="lg:hidden fixed inset-0 z-50"><div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={()=>setMobileOpen(false)}/>
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-4 space-y-2">
            {[...NAV,...ADMIN_NAV].map(n=><button key={n.key} onClick={()=>{setPage(n.key);setMobileOpen(false)}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${page===n.key?"bg-blue-50 text-blue-700":"text-slate-600"}`}><span>{n.icon}</span><span>{n.label}</span></button>)}
            <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-blue-50" onClick={()=>setMobileOpen(false)}>← LPに戻る</Link>
          </aside>
        </div>
      )}

      {/* Content */}
      <main className="lg:pl-64 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pt-20 lg:pt-8">
          {/* Demo banner */}
          <div className="mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg">💡</span>
              <p className="text-sm text-indigo-700 font-medium">これはデモ画面です。モックデータで操作感を体験できます。</p>
            </div>
            <Link href="/" className="text-xs text-indigo-600 font-semibold hover:underline whitespace-nowrap">← LPに戻る</Link>
          </div>
          {page==="calls"?<CallsView/>:page==="appointments"?<AptsView/>:page==="faq"?<FAQView/>:<PromptView/>}
        </div>
      </main>
    </div>
  );
}
