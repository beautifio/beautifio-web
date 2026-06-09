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
  const [activeTab] = useState("home");

  return (
    <div className="min-h-screen bg-surface pb-24">
      <div className="max-w-[430px] mx-auto">

        {/* ─── Header ─────────────────────── */}
        <header className="flex items-center justify-between px-6 pt-7 pb-3">
          <div>
            <p className="text-sm text-text-secondary/50 font-medium">Selamat pagi</p>
            <h1 className="text-2xl font-bold text-text-primary -mt-0.5">Tara</h1>
          </div>
          <button className="w-11 h-11 rounded-full bg-bg flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <Bell size={19} className="text-text-secondary/60" />
          </button>
        </header>

        {/* ─── Hero Card ──────────────────── */}
        <section className="px-6 mt-6 mb-24">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-[#0d6b94] text-white overflow-hidden relative"
            style={{ height: "320px" }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/[0.04] -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-secondary/[0.06] -ml-12 -mb-12" />

            <div className="relative z-10 flex flex-col justify-between h-full p-7">
              <div>
                <span className="text-[28px]">🌟</span>
                <p className="text-xs text-white/40 font-medium uppercase tracking-[0.1em] mt-5">
                  Goal utama
                </p>
                <h2 className="text-[24px] font-bold leading-tight mt-1.5">
                  Menjadi Digital<br />Marketing Director
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs text-white/50">Progress minggu ini</span>
                    <span className="text-base font-bold text-accent">65%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-700 ease-out"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-xl bg-accent/25 flex items-center justify-center flex-shrink-0">
                    <span className="text-base">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">Hubungi 1 mentor minggu ini</p>
                    <p className="text-xs text-white/50 mt-0.5">Kamu sudah dekat dengan targetmu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Priority Task ──────────────── */}
        <section className="px-6 mb-24">
          <div className="rounded-2xl bg-bg p-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-accent-foreground">!</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-text-secondary/40 font-medium uppercase tracking-[0.08em] mb-2">
                  Ada yang perlu kamu selesaikan
                </p>
                <h3 className="text-[17px] font-bold text-text-primary leading-snug">
                  Follow up networking event
                </h3>
                <p className="text-sm text-text-secondary/50 mt-2 leading-relaxed">
                  Kirim pesan ke 3 orang yang kamu temui kemarin. Bangun koneksi sebelum mereka lupa.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-xs text-text-secondary/30">📅 Hari ini</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Circle ─────────────────────── */}
        <section className="px-6 mb-24">
          <div className="rounded-2xl bg-bg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-text-secondary/40 font-medium uppercase tracking-[0.08em]">
                Circle aktifmu
              </p>
              <ChevronRight size={16} className="text-text-secondary/20" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                DM
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-bold text-text-primary">Digital Marketing Career</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-text-secondary/50">8 anggota</span>
                  <span className="w-1 h-1 rounded-full bg-text-secondary/20" />
                  <span className="text-sm text-text-secondary/50">2 online</span>
                </div>
                <div className="flex items-center mt-3.5 -space-x-2">
                  <Avatar initials="AP" size="sm" />
                  <Avatar initials="BS" size="sm" />
                  <Avatar initials="CD" size="sm" />
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-bg flex items-center justify-center text-[10px] font-medium text-text-secondary/50">
                    +5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Opportunities ──────────────── */}
        <section className="px-6 mb-28">
          <p className="text-xs text-text-secondary/40 font-medium uppercase tracking-[0.08em] mb-4">
            Rekomendasi untukmu
          </p>
          <div className="space-y-3">
            <div className="rounded-2xl bg-bg p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-[#10B981]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-text-primary">Beasiswa Fullbright</h3>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Baru</span>
                  </div>
                  <p className="text-sm text-text-secondary/50 mt-0.5">S1-S3 di universitas Amerika</p>
                  <p className="text-xs text-text-secondary/30 mt-1.5">📅 Deadline: 30 Sep</p>
                </div>
                <ChevronRight size={18} className="text-text-secondary/20 flex-shrink-0" />
              </div>
            </div>

            <div className="rounded-2xl bg-bg p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-[#F59E0B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">Magang Digital Marketing</h3>
                  <p className="text-sm text-text-secondary/50 mt-0.5">Startup unicorn, hybrid Jakarta</p>
                  <p className="text-xs text-text-secondary/30 mt-1.5">📅 Deadline: 15 Okt</p>
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
        onTabChange={() => {}}
      />
    </div>
  );
}
