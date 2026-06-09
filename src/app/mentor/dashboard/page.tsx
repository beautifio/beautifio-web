import Link from "next/link";
import { Users, MessageSquare, Video, ChevronRight, CheckCircle } from "lucide-react";

export default function MentorDashboardPage() {
  return (
    <div className="px-5 pt-6 pb-6">
      {/* ─── Header ──────────────── */}
      <h1 className="text-[20px] font-bold text-white font-heading">Dashboard Mentor</h1>
      <p className="text-[28px] font-bold text-white font-heading mt-1">Halo, dr. Nadya! 👋</p>
      <p className="text-sm text-white/40 mt-1">Berikut ringkasan circle-mu hari ini.</p>

      {/* ─── Circle Info Card ────── */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mt-6 mb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
            CK
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Circle Kedokteran 2024</h3>
            <p className="text-[12px] text-white/40">10 Anggota • 3 Pertanyaan Baru • 1 Sesi Live</p>
          </div>
        </div>
        <Link href="/mentor/circle"
          className="block w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center leading-[40px] cursor-pointer hover:opacity-90 transition-all">
          Lihat Circle
        </Link>
      </div>

      {/* ─── Tugas Mentor ────────── */}
      <p className="text-[11px] text-white/20 font-medium uppercase tracking-[0.05em] mb-3">Tugas Mentor</p>
      <div className="space-y-2.5">
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
          <CheckCircle size={18} className="text-white/30 shrink-0" />
          <p className="text-sm text-white/70">Jawab 3 pertanyaan baru</p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
          <Video size={18} className="text-white/30 shrink-0" />
          <p className="text-sm text-white/70">Sesi Live Mingguan — Sabtu, 20 Apr 2024 • 19.00 WIB</p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
          <Users size={18} className="text-white/30 shrink-0" />
          <p className="text-sm text-white/70">Review progress anggota</p>
        </div>
      </div>
    </div>
  );
}
