"use client";

import { useState } from "react";
import {
  Home,
  Users,
  MapPin,
  Compass,
  User,
  ChevronRight,
  Bell,
  Sparkles,
  BookOpen,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { BottomNavigation } from "@/components/ui/bottom-nav";

const navItems = [
  { id: "home", label: "Beranda", icon: Home },
  { id: "circle", label: "Circle", icon: Users },
  { id: "roadmap", label: "Roadmap", icon: MapPin },
  { id: "opportunity", label: "Peluang", icon: Compass },
  { id: "profile", label: "Profil", icon: User },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[420px] mx-auto">

        {/* ─── Header ─────────────────────── */}
        <header className="flex items-center justify-between px-6 pt-8 pb-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-base font-bold shadow-lg shadow-primary/20">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">Selamat pagi</h1>
              <p className="text-sm text-text-secondary/60">Tara, semangat terus ya ✨</p>
            </div>
          </div>
          <button className="w-11 h-11 rounded-full bg-surface flex items-center justify-center cursor-pointer shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <Bell size={19} className="text-text-secondary" />
          </button>
        </header>

        {/* ─── Hero Goal Card ──────────────── */}
        <section className="px-6 mt-6 mb-20">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-[#0a5a7e] to-[#0d6b94] p-8 text-white shadow-[0_20px_60px_rgba(8,68,99,0.35)] min-h-[360px] flex flex-col relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/10" />

            <div className="relative z-10 flex flex-col h-full min-h-[360px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-2xl">🌟</span>
                  <span className="text-2xl">🚀</span>
                </div>
                <Badge className="bg-white/15 text-white text-[11px] px-3 py-1 font-medium">
                  ✨ Goal Aktif
                </Badge>
              </div>

              <div className="mt-10 space-y-2">
                <p className="text-sm font-medium text-white/50 uppercase tracking-[0.08em]">
                  Goal Utama
                </p>
                <h2 className="text-[26px] font-bold leading-tight">
                  Menjadi Digital<br />Marketing Director
                </h2>
                <p className="text-sm text-white/60 mt-3 leading-relaxed">
                  Kamu sudah 65% lebih dekat dengan mimpimu. Tetap lanjutkan!
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-white/60">Progress</span>
                  <span className="text-lg font-bold text-accent">65%</span>
                </div>
                <div className="h-3 rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-[#ffd86b] to-secondary transition-all duration-700 ease-out relative"
                    style={{ width: "65%" }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-4 rounded-full bg-white/40 blur-sm" />
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-accent/25 flex items-center justify-center flex-shrink-0">
                    <Target size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">Langkah selanjutnya</p>
                    <p className="text-[13px] text-white/60 mt-0.5">Hubungi 1 mentor minggu ini</p>
                  </div>
                  <ArrowRight size={18} className="text-white/40 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Priority Task ──────────────── */}
        <section className="px-6 mb-20">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-semibold text-text-secondary/50 uppercase tracking-[0.1em]">
              Prioritas Hari Ini
            </h2>
            <span className="text-xs text-text-secondary/40">1 tugas</span>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-accent/25">
                <span className="text-sm font-bold text-accent-foreground">!</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-[15px] font-bold text-text-primary">
                    Follow up networking event
                  </h3>
                  <Badge variant="accent" className="text-[9px] px-2 py-0.5 leading-none">
                    🔥 Prioritas
                  </Badge>
                </div>
                <p className="text-sm text-text-secondary/60 mt-2 leading-relaxed">
                  Kirim pesan ke 3 orang yang kamu temui kemarin. Bangun koneksi sebelum mereka lupa denganmu.
                </p>
                <div className="flex items-center gap-4 mt-4 text-xs text-text-secondary/40">
                  <span>📅 Deadline hari ini</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-text-secondary/20 flex-shrink-0 mt-2" />
            </div>
          </div>
        </section>

        {/* ─── Circle ─────────────────────── */}
        <section className="px-6 mb-20">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-semibold text-text-secondary/50 uppercase tracking-[0.1em]">
              Circle Aktif
            </h2>
            <button className="text-xs font-medium text-primary/50 cursor-pointer hover:text-primary transition-colors">
              Lihat Semua →
            </button>
          </div>
          <div className="rounded-2xl bg-surface p-6 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-lg shadow-primary/20">
                DM
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-bold text-text-primary">Digital Marketing Career</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm text-text-secondary/50 flex items-center gap-1.5">
                    <Users size={14} />
                    8 anggota
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span className="text-sm text-success/60">2 online</span>
                </div>
                <div className="flex items-center mt-4 -space-x-2">
                  <Avatar initials="AP" size="sm" />
                  <Avatar initials="BS" size="sm" />
                  <Avatar initials="CD" size="sm" />
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-surface flex items-center justify-center text-[10px] font-medium text-text-secondary shadow-sm">
                    +5
                  </div>
                </div>
              </div>
              <ChevronRight size={20} className="text-text-secondary/20 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* ─── Opportunities ──────────────── */}
        <section className="px-6 mb-24">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-semibold text-text-secondary/50 uppercase tracking-[0.1em]">
              Rekomendasi untukmu
            </h2>
            <button className="text-xs font-medium text-primary/50 cursor-pointer hover:text-primary transition-colors">
              Lihat Semua →
            </button>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-surface p-6 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-success" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-[15px] font-bold text-text-primary">Beasiswa Fullbright</h3>
                    <Badge variant="success" className="text-[9px] px-2 py-0.5 leading-none">Baru</Badge>
                  </div>
                  <p className="text-sm text-text-secondary/60 mt-1">S1-S3 di universitas Amerika</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-text-secondary/40">
                    <span>📅 Deadline: 30 Sep</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-text-secondary/20 flex-shrink-0" />
              </div>
            </div>

            <div className="rounded-2xl bg-surface p-6 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-warning" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-text-primary">Magang Digital Marketing</h3>
                  <p className="text-sm text-text-secondary/60 mt-1">Startup unicorn, hybrid Jakarta</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-text-secondary/40">
                    <span>📅 Deadline: 15 Okt</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-text-secondary/20 flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <BottomNavigation
        items={navItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}
