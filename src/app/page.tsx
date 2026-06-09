"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 max-w-[390px] mx-auto w-full">
        <div className="mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-[34px] font-bold text-text-primary leading-[1.1] tracking-[-0.02em] font-heading">
            beautifio
          </h1>
          <div className="w-12 h-[3px] bg-accent rounded-full my-5" />
          <p className="text-sm text-text-secondary/70 leading-relaxed max-w-xs">
            Masa Depan Dimulai Hari Ini. Temukan arah, lingkungan, dan peluang untuk masa depan yang lebih baik.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/register"
            className="block w-full h-13 rounded-xl bg-primary text-primary-foreground text-sm font-bold text-center leading-[52px] cursor-pointer hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Mulai Perjalananmu
          </Link>
          <Link
            href="/login"
            className="block w-full h-13 rounded-xl border-2 border-primary/15 text-text-primary text-sm font-semibold text-center leading-[48px] cursor-pointer hover:bg-primary/5 transition-colors"
          >
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}
