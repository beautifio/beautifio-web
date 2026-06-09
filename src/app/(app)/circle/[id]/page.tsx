"use client";

import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

const messages = [
  { role: "mentor", name: "dr. Nadya", text: "Halo semuanya! Minggu ini kita fokus bahas strategi belajar untuk UTBK. Ada yang mau share progressnya?", time: "09.15" },
  { role: "user", name: "Aisyah", text: "Saya sudah mulai latihan TPS setiap hari kak!", time: "09.20" },
  { role: "user", name: "Siti", text: "Saya masih kesulitan di penalaran matematis 😢", time: "09.21" },
  { role: "mentor", name: "dr. Nadya", text: "Coba kerjakan 10 soal per hari dulu, konsisten ya! 💪", time: "09.22" },
  { role: "user", name: "Budi", text: "Siap kak! Terima kasih!", time: "09.23" },
];

export default function CircleChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* ─── Header ──────────────── */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-3 border-b border-border">
        <Link href="/circle" className="w-8 h-8 rounded-lg bg-bg flex items-center justify-center shrink-0">
          <ArrowLeft size={16} className="text-text-secondary" />
        </Link>
        <div>
          <h1 className="text-base font-semibold text-text-primary">Circle Kedokteran 2024</h1>
          <p className="text-[11px] text-success">10 anggota • 1 online</p>
        </div>
      </div>

      {/* ─── Messages ────────────── */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] ${msg.role === "user" ? "bg-primary text-white" : "bg-bg text-text-primary"} rounded-2xl px-4 py-3`}>
              {msg.role === "mentor" && <p className="text-[10px] font-semibold text-secondary mb-1">{msg.name}</p>}
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1.5 ${msg.role === "user" ? "text-white/40" : "text-text-secondary/30"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Input ───────────────── */}
      <div className="px-5 py-3 border-t border-border">
        <div className="flex items-center gap-2">
          <input
            placeholder="Ketik pesan..."
            className="flex-1 h-10 rounded-lg bg-bg border-0 text-sm text-text-primary outline-none px-4 placeholder:text-text-secondary/30"
          />
          <button className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center cursor-pointer hover:opacity-90 shrink-0">
            <Send size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
