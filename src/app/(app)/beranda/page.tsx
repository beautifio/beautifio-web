"use client";

import Link from "next/link";
import { Bell, ChevronRight, Check, Users, BookOpen } from "lucide-react";

export default function BerandaPage() {
  return (
    <div className="px-5 pt-6 pb-6">
      {/* ─── Header ──────────────── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[11px] text-text-secondary/40 font-medium uppercase tracking-[0.05em]">Beranda</p>
        </div>
        <button className="w-9 h-9 rounded-full bg-bg flex items-center justify-center cursor-pointer">
          <Bell size={17} className="text-text-secondary/50" />
        </button>
      </div>

      {/* ─── Greeting ────────────── */}
      <h1 className="text-[22px] font-bold text-text-primary font-heading mb-1">Hai, Aisyah! 👋</h1>
      <p className="text-sm text-text-secondary/50 mb-6">Apa langkah terpentingmu minggu ini?</p>

      {/* ─── Tujuan Utama Card ────── */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-[#0a5277] p-5 text-white mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-white/50 font-medium uppercase tracking-[0.05em]">Tujuan Utama</span>
          <Link href="/onboarding" className="text-[11px] text-accent font-medium">Edit Tujuan</Link>
        </div>
        <h2 className="text-[18px] font-semibold font-heading mb-4">Masuk Kedokteran</h2>
        <div className="flex items-center justify-between text-[11px] text-white/50 mb-2">
          <span>Progress Keseluruhan</span>
          <span className="text-accent font-semibold">72%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-700" style={{ width: "72%" }} />
        </div>
      </div>

      {/* ─── Langkah Minggu Ini ──── */}
      <div className="rounded-2xl bg-bg p-4 mb-4">
        <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em] mb-3">Langkah Minggu Ini</p>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5 shrink-0">
            <Check size={12} className="text-success" />
          </div>
          <p className="text-sm text-text-secondary/70">Konsultasi dengan 1 mahasiswa kedokteran</p>
        </div>
        <Link href="/roadmap" className="inline-flex items-center gap-1 text-[12px] text-primary font-semibold">
          Lihat Detail <ChevronRight size={13} />
        </Link>
      </div>

      {/* ─── Aktivitas Circle ────── */}
      <div className="rounded-2xl bg-bg p-4 mb-4">
        <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em] mb-3">Aktivitas Circle</p>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
            <Users size={17} className="text-secondary" />
          </div>
          <div>
            <p className="text-sm text-text-primary">
              <span className="font-semibold">Siti</span> mengajukan pertanyaan baru di{" "}
              <span className="font-semibold">Circle Kedokteran 2024</span>
            </p>
            <p className="text-[11px] text-text-secondary/30 mt-1">2 jam yang lalu</p>
          </div>
        </div>
      </div>

      {/* ─── Peluang Untukmu ─────── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em]">Peluang Untukmu</p>
          <Link href="/peluang" className="flex items-center gap-0.5 text-[11px] text-primary font-semibold">Lihat Semua <ChevronRight size={13} /></Link>
        </div>
        <div className="rounded-2xl bg-bg p-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
              <BookOpen size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Beasiswa Unggulan 2024</h3>
              <p className="text-[12px] text-text-secondary/50 mt-0.5">Deadline 30 Mei 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
