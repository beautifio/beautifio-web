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
  BookOpen,
  TrendingUp,
} from "lucide-react";
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
      <div className="max-w-[430px] mx-auto bg-surface min-h-screen relative shadow-2xl">

        {/* ─── Header ─────────────────────── */}
        <header className="flex items-center justify-between px-6 pt-8 pb-2">
          <div>
            <p className="text-xs text-text-secondary/40 font-medium uppercase tracking-[0.08em]">Selamat pagi</p>
            <h1 className="text-[22px] font-bold text-text-primary -mt-0.5">Tara</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-bg flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <Bell size={18} className="text-text-secondary/50" />
          </button>
        </header>

        {/* ─── Hero Card ──────────────────── */}
        <section className="px-6 mt-5 mb-20">
          <div
            className="rounded-3xl text-white overflow-hidden relative"
            style={{ height: "245px", background: "linear-gradient(135deg, #084463, #0B5377)" }}
          >
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/[0.04] -mr-14 -mt-14" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/[0.03] -ml-10 -mb-10" />

            <div className="relative z-10 flex flex-col justify-between h-full p-7">
              <div>
                <p className="text-xs text-white/40 font-medium uppercase tracking-[0.1em]">
                  Goal utama
                </p>
                <h2 className="text-[22px] font-semibold leading-relaxed mt-1.5">
                  Menjadi Digital<br />Marketing Director
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-white/50">Kamu sudah menyelesaikan</span>
                    <span className="text-sm font-semibold text-accent">13 dari 20 milestone</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-700 ease-out"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-lg bg-accent/25 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🎯</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white/90">Hubungi 1 mentor minggu ini</p>
                    <p className="text-[11px] text-white/50 mt-0.5">Kamu sudah 65% lebih dekat dengan mimpimu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Priority Task ──────────────── */}
        <section className="px-6 mb-20">
          <div className="rounded-2xl bg-bg p-5">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent-foreground">!</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">
                  Ada yang perlu kamu selesaikan
                </p>
                <h3 className="text-[15px] font-semibold text-text-primary leading-snug">
                  Follow up networking event
                </h3>
                <p className="text-[13px] text-text-secondary/50 mt-1.5 leading-relaxed">
                  Kirim pesan ke 3 orang yang kamu temui kemarin.
                </p>
                <div className="mt-3">
                  <span className="text-[11px] text-text-secondary/30">📅 Hari ini</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Circle ─────────────────────── */}
        <section className="px-6 mb-20">
          <div className="rounded-2xl bg-bg p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] text-text-secondary/30 font-medium uppercase tracking-[0.08em]">
                Circle aktifmu
              </p>
              <ChevronRight size={14} className="text-text-secondary/20" />
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                DM
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-text-primary">Digital Marketing Career</h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[13px] text-text-secondary/50">8 anggota</span>
                  <span className="w-1 h-1 rounded-full bg-text-secondary/20" />
                  <span className="text-[13px] text-text-secondary/50">2 online</span>
                </div>
                <div className="flex items-center mt-3 -space-x-2">
                  <Avatar initials="AP" size="sm" />
                  <Avatar initials="BS" size="sm" />
                  <Avatar initials="CD" size="sm" />
                  <div className="w-7 h-7 rounded-full bg-muted border-2 border-bg flex items-center justify-center text-[9px] font-medium text-text-secondary/50">
                    +5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Opportunities ──────────────── */}
        <section className="px-6 mb-28">
          <p className="text-[10px] text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-3">
            Rekomendasi untukmu
          </p>
          <div className="space-y-2.5">
            <div className="rounded-2xl bg-bg p-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={19} className="text-[#10B981]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">Beasiswa Fullbright</h3>
                    <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Baru</span>
                  </div>
                  <p className="text-[13px] text-text-secondary/50 mt-0.5">S1-S3 di universitas Amerika</p>
                  <p className="text-[11px] text-text-secondary/30 mt-1.5">📅 Deadline: 30 Sep</p>
                </div>
                <ChevronRight size={16} className="text-text-secondary/20 flex-shrink-0" />
              </div>
            </div>

            <div className="rounded-2xl bg-bg p-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={19} className="text-[#F59E0B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary">Magang Digital Marketing</h3>
                  <p className="text-[13px] text-text-secondary/50 mt-0.5">Startup unicorn, hybrid Jakarta</p>
                  <p className="text-[11px] text-text-secondary/30 mt-1.5">📅 Deadline: 15 Okt</p>
                </div>
                <ChevronRight size={16} className="text-text-secondary/20 flex-shrink-0" />
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
