"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { saveDiscoverData } from "@/lib/discover-store";

export default function DiscoverCityPage() {
  const router = useRouter();
  const [city, setCity] = useState("");

  const handleContinue = () => {
    if (!city.trim()) return;
    saveDiscoverData({ city: city.trim() });
    router.push("/discover/result");
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
            Kamu tinggal di kota mana?
          </h1>
          <p className="text-sm text-text-secondary/50 mb-6">
            Kami akan rekomendasikan peluang terdekat untukmu.
          </p>

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleContinue()}
            placeholder="Contoh: Sleman, Yogyakarta"
            autoFocus
            className="w-full h-13 px-4 rounded-xl bg-bg border-0 text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
          />
        </div>

        <button
          onClick={handleContinue}
          disabled={!city.trim()}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          Lanjutkan <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
