"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, Users, BookOpen, HeartHandshake, Trophy } from "lucide-react";
import { getDiscoverData, type DiscoverData } from "@/lib/discover-store";

const opportunityMap: Record<string, { title: string; desc: string; icon: typeof BookOpen }[]> = {
  "Masuk Perguruan Tinggi": [
    { title: "Beasiswa Unggulan", desc: "S1 Dalam & Luar Negeri", icon: BookOpen },
    { title: "Volunteer Kesehatan", desc: "Pengalaman sosial", icon: HeartHandshake },
    { title: "Webinar Kedokteran", desc: "Wawasan karier", icon: Trophy },
  ],
  "Dapat Kerja Pertama": [
    { title: "Magang di Startup", desc: "Pengalaman kerja nyata", icon: BookOpen },
    { title: "Bootcamp Karier", desc: "Persiapan CV & interview", icon: Trophy },
    { title: "Job Fair Online", desc: "Bertemu HRD langsung", icon: Users },
  ],
  "Meningkatkan Skill": [
    { title: "Kursus Online", desc: "Belajar dari expert", icon: BookOpen },
    { title: "Workshop Intensif", desc: "Praktik langsung", icon: Trophy },
    { title: "Sertifikasi Profesi", desc: "Tingkatkan nilai CV", icon: Users },
  ],
  "Memulai Usaha": [
    { title: "Inkubasi Bisnis", desc: "Bimbingan untuk founder", icon: BookOpen },
    { title: "Kompetisi Startup", desc: "Dapatkan pendanaan", icon: Trophy },
    { title: "Networking Event", desc: "Temu investor & mentor", icon: Users },
  ],
  "Mendapat Beasiswa": [
    { title: "Beasiswa Unggulan", desc: "S1 Dalam & Luar Negeri", icon: BookOpen },
    { title: "LPDP", desc: "Beasiswa S2/S3", icon: Trophy },
    { title: "Beasiswa Swasta", desc: "Dari perusahaan terkemuka", icon: Users },
  ],
  "Belum Tahu": [
    { title: "Tes Minat Bakat", desc: "Kenali potensimu", icon: BookOpen },
    { title: "Konseling Karier", desc: "Gratis dengan mentor", icon: HeartHandshake },
    { title: "Eksplorasi Profesi", desc: "Video inspiratif", icon: Trophy },
  ],
  Lainnya: [
    { title: "Tes Minat Bakat", desc: "Kenali potensimu", icon: BookOpen },
    { title: "Konseling Karier", desc: "Gratis dengan mentor", icon: HeartHandshake },
    { title: "Eksplorasi Profesi", desc: "Video inspiratif", icon: Trophy },
  ],
};

export default function DiscoverResultPage() {
  const router = useRouter();
  const [data, setData] = useState<DiscoverData | null>(null);

  useEffect(() => {
    const d = getDiscoverData();
    if (!d || !d.goal) {
      router.replace("/discover/goal");
      return;
    }
    setData(d);
  }, [router]);

  if (!data) return null;

  const opportunities = opportunityMap[data.goal] ?? opportunityMap["Belum Tahu"];

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[390px] mx-auto bg-surface min-h-screen flex flex-col px-5 pt-10 pb-6">
        <div className="flex-1">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
            <Sparkles size={20} className="text-white" />
          </div>

          <h1 className="text-[24px] font-bold text-text-primary font-heading leading-tight mb-2">
            Hasil Personalisasimu
          </h1>
          <p className="text-sm text-text-secondary/50 mb-6">
            Kami telah menyiapkan roadmap awal untukmu.
          </p>

          {/* ─── Goal Card ──────────────── */}
          <div className="rounded-2xl bg-gradient-to-br from-primary to-[#0a5277] p-5 text-white mb-4">
            <p className="text-[11px] text-white/40 font-medium uppercase tracking-[0.05em] mb-2">Tujuan</p>
            <h2 className="text-[18px] font-semibold font-heading mb-3">{data.goal}</h2>
            <div className="flex items-center justify-between text-[11px] text-white/50 mb-2">
              <span>Progress Roadmap</span>
              <span className="text-accent font-semibold">72%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-700" style={{ width: "72%" }} />
            </div>
          </div>

          {/* ─── Circle ─────────────────── */}
          <div className="rounded-2xl bg-bg p-4 mb-4">
            <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em] mb-3">Circle Rekomendasi</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                CK
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Circle Kedokteran 2026</h3>
                <p className="text-[12px] text-text-secondary/50">12 anggota • 1 mentor</p>
              </div>
            </div>
          </div>

          {/* ─── Opportunities ──────────── */}
          <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em] mb-3">Peluang Untukmu</p>
          <div className="space-y-2.5 mb-6">
            {opportunities.map((opp, i) => {
              const Icon = opp.icon;
              return (
                <div key={i} className="rounded-2xl bg-bg p-4 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{opp.title}</h3>
                    <p className="text-[12px] text-text-secondary/50">{opp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Actions ────────────────── */}
        <Link
          href="/register"
          className="block w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold text-center leading-[48px] hover:opacity-90 transition-all shadow-lg shadow-primary/20 mb-3"
        >
          Simpan Roadmap Saya
        </Link>
        <Link
          href="/beranda"
          className="block w-full h-12 rounded-xl border-2 border-primary/15 text-text-primary text-sm font-semibold text-center leading-[44px] hover:bg-primary/5 transition-colors"
        >
          Lihat Demo
        </Link>
      </div>
    </div>
  );
}
