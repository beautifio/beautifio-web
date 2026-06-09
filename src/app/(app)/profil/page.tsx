import Link from "next/link";
import { Bell, Settings, ChevronRight, MapPin, CheckCircle, Users } from "lucide-react";

const badges = [
  { label: "Fast Learner", color: "bg-accent/15 text-accent" },
  { label: "Konsisten", color: "bg-success/10 text-success" },
  { label: "Kolaboratif", color: "bg-secondary/10 text-secondary" },
  { label: "Pantang Menyerah", color: "bg-primary/10 text-primary" },
];

export default function ProfilPage() {
  return (
    <div className="px-5 pt-6 pb-6">
      {/* ─── Header ──────────────── */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[22px] font-bold text-text-primary font-heading">Profil</h1>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-bg flex items-center justify-center cursor-pointer">
            <Bell size={17} className="text-text-secondary/50" />
          </button>
          <button className="w-9 h-9 rounded-full bg-bg flex items-center justify-center cursor-pointer">
            <Settings size={17} className="text-text-secondary/50" />
          </button>
        </div>
      </div>

      {/* ─── User Info ───────────── */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shrink-0">
          AP
        </div>
        <div>
          <h2 className="text-lg font-bold text-text-primary">Aisyah Putri</h2>
          <p className="text-[12px] text-text-secondary/50">Pelajar • 18 Tahun</p>
          <p className="text-[12px] text-text-secondary/50">Jakarta, Indonesia</p>
          <Link href="#" className="text-[12px] text-primary font-semibold mt-1 inline-block">Edit Profil</Link>
        </div>
      </div>

      {/* ─── Stats ───────────────── */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 rounded-xl bg-bg p-3.5 text-center">
          <MapPin size={17} className="text-text-secondary/30 mx-auto mb-1" />
          <p className="text-base font-bold text-text-primary">12</p>
          <p className="text-[10px] text-text-secondary/40">Langkah</p>
        </div>
        <div className="flex-1 rounded-xl bg-bg p-3.5 text-center">
          <CheckCircle size={17} className="text-success/50 mx-auto mb-1" />
          <p className="text-base font-bold text-text-primary">5</p>
          <p className="text-[10px] text-text-secondary/40">Tercapai</p>
        </div>
        <div className="flex-1 rounded-xl bg-bg p-3.5 text-center">
          <Users size={17} className="text-secondary/50 mx-auto mb-1" />
          <p className="text-base font-bold text-text-primary">3</p>
          <p className="text-[10px] text-text-secondary/40">Bergabung</p>
        </div>
      </div>

      {/* ─── Pencapaian ──────────── */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em]">Pencapaian</p>
        <Link href="#" className="flex items-center gap-0.5 text-[11px] text-primary font-semibold">Lihat Semua <ChevronRight size={13} /></Link>
      </div>
      <div className="flex gap-2.5 mb-6 flex-wrap">
        {badges.map((b, i) => (
          <span key={i} className={`px-3 py-1.5 rounded-lg text-[11px] font-medium ${b.color}`}>
            {b.label}
          </span>
        ))}
      </div>

      {/* ─── Pengaturan ──────────── */}
      <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.05em] mb-3">Pengaturan</p>
      <div className="rounded-2xl bg-bg divide-y divide-border">
        <Link href="#" className="flex items-center justify-between px-4 py-3.5">
          <span className="text-sm text-text-primary">Akun</span>
          <ChevronRight size={15} className="text-text-secondary/20" />
        </Link>
        <Link href="#" className="flex items-center justify-between px-4 py-3.5">
          <span className="text-sm text-text-primary">Notifikasi</span>
          <ChevronRight size={15} className="text-text-secondary/20" />
        </Link>
      </div>
    </div>
  );
}
