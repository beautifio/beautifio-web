"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Users, Search } from "lucide-react";

const featuredCircle = {
  name: "Circle Kedokteran 2024",
  mentor: "dr. Nadya",
  members: 10,
};

const activeCircles = [
  { name: "Circle Kedokteran 2024", active: true, members: 10 },
  { name: "Circle SNBT 2024", active: true, members: 12 },
  { name: "Circle Beasiswa 2024", active: true, members: 8 },
];

export default function CirclePage() {
  const [tab, setTab] = useState<"my" | "discover">("my");

  return (
    <div className="px-5 pt-6 pb-6">
      {/* ─── Header ──────────────── */}
      <h1 className="text-[22px] font-bold text-text-primary font-heading mb-5">Circle</h1>

      {/* ─── Tabs ────────────────── */}
      <div className="flex gap-4 mb-5 border-b border-border">
        <button onClick={() => setTab("my")}
          className={`pb-2.5 text-sm font-medium transition-colors cursor-pointer ${tab === "my" ? "text-primary border-b-2 border-primary" : "text-text-secondary/50"}`}>
          My Circle
        </button>
        <button onClick={() => setTab("discover")}
          className={`pb-2.5 text-sm font-medium transition-colors cursor-pointer ${tab === "discover" ? "text-primary border-b-2 border-primary" : "text-text-secondary/50"}`}>
          Discover Circle
        </button>
      </div>

      {/* ─── Featured Circle ─────── */}
      {tab === "my" && (
        <>
          <div className="rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 p-5 mb-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-lg font-bold shrink-0">
                CK
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">{featuredCircle.name}</h3>
                <p className="text-[12px] text-text-secondary/50">Mentor: {featuredCircle.mentor}</p>
                <p className="text-[12px] text-text-secondary/50">{featuredCircle.members} Anggota</p>
              </div>
            </div>
            <Link href="/circle/kedokteran-2024"
              className="block w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center leading-[40px] cursor-pointer hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Masuk Circle
            </Link>
          </div>

          {/* ─── Active Circles ────── */}
          <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em] mb-3">Circle Aktif</p>
          <div className="space-y-2.5">
            {activeCircles.map((c, i) => (
              <div key={i} className="rounded-2xl bg-bg p-4 flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {c.name.split(" ").slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{c.name}</h4>
                    <p className="text-[11px] text-text-secondary/40">
                      <span className="text-success font-medium text-[10px]">Aktif</span> • {c.members} anggota
                    </p>
                  </div>
                </div>
                <ChevronRight size={15} className="text-text-secondary/20" />
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "discover" && (
        <div className="text-center py-10">
          <Search size={24} className="text-text-secondary/20 mx-auto mb-3" />
          <p className="text-sm text-text-secondary/40">Temukan circle baru</p>
        </div>
      )}
    </div>
  );
}
