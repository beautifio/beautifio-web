"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { saveDiscoverData } from "@/lib/discover-store";

const goals = [
  "Masuk Perguruan Tinggi",
  "Dapat Kerja Pertama",
  "Meningkatkan Skill",
  "Memulai Usaha",
  "Mendapat Beasiswa",
  "Belum Tahu",
  "Lainnya",
];

export default function DiscoverGoalPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (!selected) return;
    saveDiscoverData({ goal: selected });
    router.push("/discover/status");
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[390px] mx-auto bg-surface min-h-screen flex flex-col px-5 pt-12 pb-6">
        <div className="flex-1">
          <h1 className="text-[24px] font-bold text-text-primary font-heading leading-tight mb-2">
            Apa tujuan utamamu saat ini?
          </h1>
          <p className="text-sm text-text-secondary/50 mb-6">
            Pilih tujuan yang paling ingin kamu capai dalam 12 bulan ke depan.
          </p>

          <div className="space-y-2.5">
            {goals.map((goal) => {
              const active = selected === goal;
              return (
                <button
                  key={goal}
                  onClick={() => setSelected(goal)}
                  className={`w-full h-13 rounded-xl text-sm font-medium text-left px-4 transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-bg text-text-secondary hover:bg-muted"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selected}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          Lanjutkan <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
