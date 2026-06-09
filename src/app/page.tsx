"use client";

import { useState } from "react";
import {
  Home,
  Users,
  MapPin,
  Compass,
  User,
  Target,
  ChevronRight,
  Calendar,
  Bell,
  BookOpen,
  Sparkles,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
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
      <div className="max-w-[390px] mx-auto px-6">
        {/* ─── Header ─────────────────────── */}
        <header className="pt-8 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-sm font-bold">
              T
            </div>
            <button className="w-10 h-10 rounded-sm bg-surface border border-border flex items-center justify-center cursor-pointer hover:border-primary/30 transition-all">
              <Bell size={18} className="text-text-secondary" />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-text-primary">
            Hallo Tara 👋
          </h1>
          <p className="text-base text-text-secondary mt-1.5 leading-relaxed">
            Apa langkah terpentingmu minggu ini?
          </p>
        </header>

        {/* ─── Goal Progress Card ──────────── */}
        <section className="mb-5">
          <Card padding="lg" className="animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-sm bg-accent/15 flex items-center justify-center">
                <Target size={20} className="text-accent-foreground" />
              </div>
              <Badge variant="accent" className="text-[10px] px-2 py-0.5">
                Goal Aktif
              </Badge>
            </div>
            <CardHeader className="mb-0">
              <CardTitle className="text-lg">Menjadi Digital Marketing Director</CardTitle>
              <CardDescription className="text-sm mt-1">
                Progress menuju target karir impianmu
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex items-end justify-between mb-2">
                <span className="text-xs font-medium text-text-secondary">Progress</span>
                <span className="text-xs font-bold text-primary">65%</span>
              </div>
              <ProgressBar value={65} size="md" />
              <div className="mt-4 flex items-start gap-3 p-3 rounded-sm bg-muted">
                <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-primary">Langkah Selanjutnya</p>
                  <p className="text-xs text-text-secondary mt-0.5">Hubungi 1 mentor minggu ini</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ─── Weekly Action Card ──────────── */}
        <section className="mb-5">
          <Card padding="lg" className="animate-fade-in">
            <CardHeader className="mb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  <CardTitle className="text-base">Aksi Minggu Ini</CardTitle>
                </div>
                <span className="text-[10px] font-medium text-text-secondary">3 tersisa</span>
              </div>
            </CardHeader>
            <CardContent className="mt-4 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-sm border border-border hover:border-secondary/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-border flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary">Review materi sertifikasi Google</p>
                  <p className="text-[11px] text-text-secondary mt-0.5">Deadline: Jumat</p>
                </div>
                <ChevronRight size={14} className="text-text-secondary flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 p-3 rounded-sm border border-border hover:border-secondary/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-border flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary">Buat konten LinkedIn 1x</p>
                  <p className="text-[11px] text-text-secondary mt-0.5">Deadline: Sabtu</p>
                </div>
                <ChevronRight size={14} className="text-text-secondary flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 p-3 rounded-sm border border-border hover:border-secondary/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-accent-foreground">!</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary">Follow up networking event</p>
                  <p className="text-[11px] text-text-secondary mt-0.5">Prioritas tinggi</p>
                </div>
                <ChevronRight size={14} className="text-text-secondary flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ─── My Circle Card ──────────────── */}
        <section className="mb-5">
          <Card padding="lg" className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-secondary" />
                <CardTitle className="text-base">Circle Saya</CardTitle>
              </div>
              <button className="text-xs font-medium text-primary cursor-pointer hover:underline">
                Lihat Semua
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-sm bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
              <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                DM
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-text-primary">Digital Marketing Career</h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Users size={12} />
                    8 anggota
                  </span>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 leading-none">
                    Aktif
                  </Badge>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <Avatar initials="AP" size="sm" />
                  <Avatar initials="BS" size="sm" />
                  <Avatar initials="CD" size="sm" />
                  <div className="w-7 h-7 rounded-full bg-muted border-2 border-surface flex items-center justify-center text-[10px] font-medium text-text-secondary -ml-1">
                    +5
                  </div>
                </div>
              </div>
              <ChevronRight size={16} className="text-text-secondary flex-shrink-0" />
            </div>
          </Card>
        </section>

        {/* ─── Opportunity Preview ─────────── */}
        <section className="mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-accent" />
              <h2 className="text-base font-bold text-text-primary">Peluang untukmu</h2>
            </div>
            <button className="text-xs font-medium text-primary cursor-pointer hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="space-y-3">
            <Card padding="md" className="animate-fade-in hover:border-accent/30 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-success/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-success" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-text-primary">Beasiswa Fullbright</h3>
                    <Badge variant="success" className="text-[10px] px-1.5 py-0 leading-none">Baru</Badge>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">S1-S3 di universitas Amerika</p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-text-secondary">
                    <span className="flex items-center gap-1"><Clock size={11} />Deadline: 30 Sep</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-text-secondary flex-shrink-0 mt-2" />
              </div>
            </Card>

            <Card padding="md" className="animate-fade-in hover:border-accent/30 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-warning" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">Magang Digital Marketing</h3>
                  <p className="text-xs text-text-secondary mt-1">Startup unicorn, hybrid Jakarta</p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-text-secondary">
                    <span className="flex items-center gap-1"><Clock size={11} />Deadline: 15 Okt</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-text-secondary flex-shrink-0 mt-2" />
              </div>
            </Card>

            <Card padding="md" className="animate-fade-in hover:border-accent/30 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-info/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={18} className="text-info" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">Workshop: Personal Branding</h3>
                  <p className="text-xs text-text-secondary mt-1">Online, gratis, sertifikat</p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-text-secondary">
                    <span className="flex items-center gap-1"><Calendar size={11} />12 Juni 2026</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-text-secondary flex-shrink-0 mt-2" />
              </div>
            </Card>
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
