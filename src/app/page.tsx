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
  Clock,
  BookOpen,
  Target,
  TrendingUp,
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
    <div className="min-h-screen bg-bg pb-24">
      <div className="max-w-[390px] mx-auto">
        {/* ─── Header ─────────────────────── */}
        <header className="flex items-center justify-between px-6 pt-7 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-sm font-bold shadow-md">
              T
            </div>
            <div>
              <h1 className="text-lg font-bold text-text-primary">Hallo, Tara</h1>
              <p className="text-[13px] text-text-secondary/70 leading-relaxed">
                Yuk, wujudkan mimpi hari ini
              </p>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            <Bell size={18} className="text-text-secondary" />
          </button>
        </header>

        {/* ─── Hero Goal Card ──────────────── */}
        <section className="px-6 mb-14">
          <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-[#0a5a7e] p-7 text-white shadow-[0_12px_40px_rgba(8,68,99,0.3)] min-h-[280px] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                <Sparkles size={18} className="text-accent" />
              </div>
              <Badge variant="secondary" className="bg-white/15 text-white border-white/10 text-[10px] px-2.5 py-0.5">
                Goal Aktif
              </Badge>
            </div>

            <div className="mt-auto space-y-5">
              <div>
                <p className="text-xs font-medium text-white/60 uppercase tracking-[0.08em] mb-1.5">
                  Goal Utama
                </p>
                <h2 className="text-xl font-bold leading-snug">
                  Menjadi Digital Marketing Director
                </h2>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/70">Progress</span>
                  <span className="text-sm font-bold text-accent">65%</span>
                </div>
                <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-700 ease-out"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Target size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Langkah Selanjutnya</p>
                  <p className="text-[12px] text-white/70 mt-0.5">Hubungi 1 mentor minggu ini</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Priority Task ──────────────── */}
        <section className="px-6 mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-[0.06em]">
              Prioritas Hari Ini
            </h2>
            <span className="text-[11px] text-text-secondary/60">1 dari 3</span>
          </div>
          <div className="rounded-xl bg-surface p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[11px] font-bold text-accent-foreground">!</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-text-primary">Follow up networking event</h3>
                  <Badge variant="accent" className="text-[9px] px-1.5 py-0 leading-none">Prioritas</Badge>
                </div>
                <p className="text-[12px] text-text-secondary/70 mt-1 leading-relaxed">
                  Kirim pesan ke 3 orang yang kamu temui di acara kemarin. Bangun koneksi sebelum mereka lupa.
                </p>
                <div className="flex items-center gap-3 mt-3 text-[11px] text-text-secondary/60">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    Deadline hari ini
                  </span>
                </div>
              </div>
              <ChevronRight size={16} className="text-text-secondary/30 flex-shrink-0 mt-2" />
            </div>
          </div>
        </section>

        {/* ─── Circle ─────────────────────── */}
        <section className="px-6 mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-[0.06em]">
              Circle Aktif
            </h2>
            <button className="text-[12px] font-medium text-primary/70 cursor-pointer hover:text-primary transition-colors">
              Lihat Semua
            </button>
          </div>
          <div className="rounded-xl bg-surface p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-base font-bold flex-shrink-0 shadow-sm">
                DM
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-text-primary">Digital Marketing Career</h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[12px] text-text-secondary/60 flex items-center gap-1">
                    <Users size={13} />
                    8 anggota
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span className="text-[12px] text-success/70">2 online</span>
                </div>
                <div className="flex items-center mt-3 -space-x-1.5">
                  <Avatar initials="AP" size="sm" />
                  <Avatar initials="BS" size="sm" />
                  <Avatar initials="CD" size="sm" />
                  <div className="w-7 h-7 rounded-full bg-muted border-2 border-surface flex items-center justify-center text-[9px] font-medium text-text-secondary">
                    +5
                  </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-text-secondary/30 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* ─── Opportunities ──────────────── */}
        <section className="px-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-[0.06em]">
              Rekomendasi untukmu
            </h2>
            <button className="text-[12px] font-medium text-primary/70 cursor-pointer hover:text-primary transition-colors">
              Lihat Semua
            </button>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-surface p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-success" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-text-primary">Beasiswa Fullbright</h3>
                    <Badge variant="success" className="text-[9px] px-1.5 py-0 leading-none">Baru</Badge>
                  </div>
                  <p className="text-[12px] text-text-secondary/70 mt-0.5">S1-S3 di universitas Amerika</p>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-text-secondary/60">
                    <Clock size={11} />
                    Deadline: 30 Sep
                  </div>
                </div>
                <ChevronRight size={16} className="text-text-secondary/30 flex-shrink-0" />
              </div>
            </div>

            <div className="rounded-xl bg-surface p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-warning" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">Magang Digital Marketing</h3>
                  <p className="text-[12px] text-text-secondary/70 mt-0.5">Startup unicorn, hybrid Jakarta</p>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-text-secondary/60">
                    <Clock size={11} />
                    Deadline: 15 Okt
                  </div>
                </div>
                <ChevronRight size={16} className="text-text-secondary/30 flex-shrink-0" />
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
