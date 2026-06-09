"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type FilterTab = "semua" | "selesai" | "berjalan" | "tertunda";

const timeline = [
  {
    title: "Riset & Persiapan",
    items: [
      { text: "Riset kampus dan jurusan kedokteran", done: true },
      { text: "Riset passing grade & daya tampung", done: true },
    ],
  },
  {
    title: "Belajar & Latihan",
    items: [
      { text: "Buat jadwal belajar", done: false },
      { text: "Kerjakan tryout minimal 4 kali", done: false },
    ],
  },
  {
    title: "Konsultasi & Pengalaman",
    items: [
      { text: "Konsultasi dengan mahasiswa kedokteran", done: false },
    ],
  },
];

export default function RoadmapPage() {
  const [filter, setFilter] = useState<FilterTab>("semua");

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "semua", label: "Semua" },
    { key: "selesai", label: "Selesai" },
    { key: "berjalan", label: "Berjalan" },
    { key: "tertunda", label: "Tertunda" },
  ];

  const filtered = timeline.map((section) => ({
    ...section,
    items: filter === "semua" ? section.items : section.items.filter((item) =>
      filter === "selesai" ? item.done : !item.done
    ),
  })).filter((s) => s.items.length > 0);

  return (
    <div className="px-5 pt-6 pb-6">
      {/* ─── Header ──────────────── */}
      <h1 className="text-[22px] font-bold text-text-primary font-heading mb-1">Roadmap</h1>
      <p className="text-sm text-text-secondary/50 mb-4">Tujuan: Masuk Kedokteran (72%)</p>

      {/* ─── Tabs ────────────────── */}
      <div className="flex gap-3 mb-5 overflow-x-auto">
        {tabs.map((tab) => (
          <button key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap cursor-pointer transition-colors ${
              filter === tab.key ? "bg-primary text-primary-foreground" : "bg-bg text-text-secondary/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ─── Timeline ────────────── */}
      <div className="relative">
        <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-border" />
        <div className="space-y-6">
          {filtered.map((section, si) => (
            <div key={si}>
              <h3 className="text-sm font-semibold text-text-primary mb-3 ml-7">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, ii) => (
                  <div key={ii} className="flex items-start gap-3 ml-7">
                    <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      item.done ? "bg-success" : "bg-border"
                    }`}>
                      {item.done && <Check size={11} className="text-white" />}
                    </div>
                    <p className={`text-sm ${item.done ? "text-text-secondary/40 line-through" : "text-text-primary"}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
