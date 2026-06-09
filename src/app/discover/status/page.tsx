"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { saveDiscoverData } from "@/lib/discover-store";

const options = [
  "Pelajar SMA",
  "Mahasiswa",
  "Fresh Graduate",
  "Bekerja",
  "Mencari Kerja",
];

export default function DiscoverStatusPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (!selected) return;
    saveDiscoverData({ status: selected });
    router.push("/discover/city");
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[390px] mx-auto bg-surface min-h-screen flex flex-col px-5 pt-12 pb-6">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 rounded-lg bg-bg flex items-center justify-center mb-6 cursor-pointer"
        >
          <ArrowLeft size={16} className="text-text-secondary" />
        </button>

        <div className="flex-1">
          <h1 className="text-[24px] font-bold text-text-primary font-heading leading-tight mb-2">
            Statusmu saat ini?
          </h1>
          <p className="text-sm text-text-secondary/50 mb-6">Pilih yang paling sesuai dengan kondisimu.</p>

          <div className="space-y-2.5">
            {options.map((opt) => {
              const active = selected === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setSelected(opt)}
                  className={`w-full h-13 rounded-xl text-sm font-medium text-left px-4 transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-bg text-text-secondary hover:bg-muted"
                  }`}
                >
                  {opt}
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
