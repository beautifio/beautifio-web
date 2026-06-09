"use client";

import { useState } from "react";
import { Home, Users, MapPin, Compass, User, Bell, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ProgressBar, MilestoneCheck } from "@/components/ui/progress-bar";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
        {/* ─── Hero ─────────────────────── */}
        <section className="pt-8 pb-6 animate-fade-in">
          <div className="w-10 h-[3px] bg-accent mb-4 rounded-full" />
          <h1 className="text-[40px] font-bold leading-[1.2] text-text-primary">
            Beautifio
          </h1>
          <p className="text-base text-text-secondary mt-2 leading-relaxed max-w-xs">
            Masa Depan Dimulai Hari Ini
          </p>
          <div className="flex gap-2 mt-5">
            <Button variant="primary" size="md">Mulai Perjalanan</Button>
            <Button variant="secondary" size="md">Pelajari</Button>
          </div>
        </section>

        {/* ─── Badges ───────────────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Badge
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Mentor</Badge>
            <Badge variant="accent">Populer</Badge>
            <Badge variant="success">Terverifikasi</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="destructive">Ditolak</Badge>
          </div>
          <div className="flex gap-3 mt-3 items-center">
            <BadgeDot variant="default" />
            <BadgeDot variant="accent" />
            <BadgeDot variant="secondary" />
            <BadgeDot variant="success" />
            <BadgeDot variant="warning" />
            <BadgeDot variant="destructive" />
          </div>
        </section>

        {/* ─── Avatars ──────────────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Avatar
          </h2>
          <div className="flex items-center gap-3">
            <Avatar initials="AP" size="sm" />
            <Avatar initials="BS" size="md" />
            <Avatar initials="CD" size="lg" />
            <Avatar initials="EF" size="xl" />
          </div>
          <div className="mt-3">
            <AvatarGroup>
              <Avatar initials="AP" size="sm" />
              <Avatar initials="BS" size="sm" />
              <Avatar initials="CD" size="sm" />
              <Avatar initials="EF" size="sm" />
              <Avatar initials="GH" size="sm" />
            </AvatarGroup>
          </div>
        </section>

        {/* ─── Buttons ──────────────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Button
          </h2>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" size="sm">Primary SM</Button>
              <Button variant="primary" size="md">Primary MD</Button>
              <Button variant="primary" size="lg">Primary LG</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm">Secondary SM</Button>
              <Button variant="secondary" size="md">Secondary MD</Button>
              <Button variant="secondary" size="lg">Secondary LG</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="accent" size="sm">Accent SM</Button>
              <Button variant="accent" size="md">Accent MD</Button>
              <Button variant="accent" size="lg">Accent LG</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm">Ghost SM</Button>
              <Button variant="ghost" size="md">Ghost MD</Button>
              <Button variant="ghost" size="lg">Ghost LG</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" size="md" disabled>Disabled</Button>
              <Button variant="secondary" size="md" disabled>Disabled</Button>
            </div>
            <Button variant="primary" size="md">
              <Bell size={16} />
              With Icon
            </Button>
          </div>
        </section>

        {/* ─── Progress ─────────────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Progress Bar
          </h2>
          <div className="space-y-4">
            <ProgressBar value={25} size="sm" showLabel />
            <ProgressBar value={50} size="md" showLabel />
            <ProgressBar value={75} size="lg" showLabel />
            <ProgressBar value={100} />
          </div>
          <div className="flex gap-3 mt-4">
            <div className="flex items-center gap-2">
              <MilestoneCheck completed />
              <span className="text-sm text-text-primary">Selesai</span>
            </div>
            <div className="flex items-center gap-2">
              <MilestoneCheck completed={false} />
              <span className="text-sm text-text-secondary">Belum</span>
            </div>
          </div>
        </section>

        {/* ─── Card ─────────────────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Card
          </h2>
          <div className="space-y-3">
            <Card padding="md">
              <CardHeader>
                <CardTitle>Goal Progress</CardTitle>
                <CardDescription>Kamu sudah menyelesaikan 2 dari 5 goal</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressBar value={40} size="md" showLabel />
                <div className="mt-4 flex items-center gap-3">
                  <Badge variant="accent">Karir</Badge>
                  <Badge variant="secondary">Skill</Badge>
                </div>
              </CardContent>
            </Card>

            <Card padding="sm">
              <div className="flex items-center gap-3">
                <Avatar initials="FM" size="md" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-text-primary">Frontend Mentor</h4>
                  <p className="text-xs text-text-secondary mt-0.5">React Specialist</p>
                </div>
                <Button variant="accent" size="sm">Ikuti</Button>
              </div>
            </Card>

            <Card padding="lg" className="bg-primary text-primary-foreground">
              <CardTitle className="text-white">Premium Member</CardTitle>
              <CardDescription className="text-white/70">
                Dapatkan akses ke semua fitur eksklusif
              </CardDescription>
              <div className="mt-4">
                <Button variant="accent" size="md">Upgrade Sekarang</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* ─── Tabs ─────────────────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Tabs
          </h2>
          <Tabs defaultValue="chat">
            <TabsList>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="mentor">Mentor</TabsTrigger>
              <TabsTrigger value="anggota">Anggota</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="pt-4">
              <Card padding="sm">
                <p className="text-sm text-text-secondary">Konten chat akan tampil di sini</p>
              </Card>
            </TabsContent>
            <TabsContent value="mentor" className="pt-4">
              <Card padding="sm">
                <p className="text-sm text-text-secondary">Daftar pertanyaan untuk mentor</p>
              </Card>
            </TabsContent>
            <TabsContent value="anggota" className="pt-4">
              <Card padding="sm">
                <p className="text-sm text-text-secondary">Daftar anggota circle</p>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* ─── Bottom Navigation ────────── */}
        <section className="py-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
            Bottom Navigation
          </h2>
          <div className="border border-border rounded-sm overflow-hidden">
            <BottomNavigation
              items={navItems}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="static"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
