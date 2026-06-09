"use client";

import { useState } from "react";
import { Search, BookOpen, Building2, Trophy, HeartHandshake, ChevronRight } from "lucide-react";

type FilterChip = "semua" | "beasiswa" | "magang" | "lomba" | "lainnya";

const chips: { key: FilterChip; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "beasiswa", label: "Beasiswa" },
  { key: "magang", label: "Magang" },
  { key: "lomba", label: "Lomba" },
  { key: "lainnya", label: "Lainnya" },
];

const opportunities = [
  { title: "Beasiswa Unggulan 2024", desc: "Untuk S1 Dalam & Luar Negeri", deadline: "30 Mei 2024", icon: BookOpen, chip: "beasiswa" as const },
  { title: "Magang di Rumah Sakit", desc: "Untuk Mahasiswa Kesehatan", deadline: "15 Mei 2024", icon: Building2, chip: "magang" as const },
  { title: "Lomba Karya Tulis Ilmiah Tingkat Nasional", desc: "", deadline: "20 Mei 2024", icon: Trophy, chip: "lomba" as const },
  { title: "Program Volunteer Kesehatan", desc: "", deadline: "", icon: HeartHandshake, chip: "lainnya" as const },
];

export default function PeluangPage() {
  const [activeChip, setActiveChip] = useState<FilterChip>("semua");
  const [search, setSearch] = useState("");

  const filtered = opportunities.filter((o) => {
    const matchChip = activeChip === "semua" || o.chip === activeChip;
    const matchSearch = o.title.toLowerCase().includes(search.toLowerCase());
    return matchChip && matchSearch;
  });

  return (
    <div className="px-5 pt-6 pb-6">
      {/* ─── Header ──────────────── */}
      <h1 className="text-[22px] font-bold text-text-primary font-heading mb-4">Peluang</h1>

      {/* ─── Search ──────────────── */}
      <div className="relative mb-4">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari peluang..."
          className="w-full h-10 pl-9 pr-3.5 rounded-lg bg-bg border-0 text-sm text-text-primary outline-none placeholder:text-text-secondary/30"
        />
      </div>

      {/* ─── Filter Chips ────────── */}
      <div className="flex gap-2 mb-5 overflow-x-auto">
        {chips.map((chip) => (
          <button key={chip.key}
            onClick={() => setActiveChip(chip.key)}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap cursor-pointer transition-colors ${
              activeChip === chip.key ? "bg-primary text-primary-foreground" : "bg-bg text-text-secondary/60"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* ─── Listings ────────────── */}
      <div className="space-y-2.5">
        {filtered.map((opp, i) => {
          const Icon = opp.icon;
          return (
            <div key={i} className="rounded-2xl bg-bg p-4 flex items-center gap-3.5 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text-primary">{opp.title}</h3>
                {opp.desc && <p className="text-[12px] text-text-secondary/50 mt-0.5">{opp.desc}</p>}
                {opp.deadline && <p className="text-[11px] text-text-secondary/30 mt-1">📅 Deadline: {opp.deadline}</p>}
              </div>
              <ChevronRight size={15} className="text-text-secondary/20 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
