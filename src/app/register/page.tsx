"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles, Check } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { createProfile } from "@/lib/supabase/profile";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      setLoading(false);
      return;
    }

    try {
      const supabase = getSupabaseClient();
      if (!supabase) throw new Error("Supabase not configured");

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("Gagal membuat akun");

      const { error: profileError } = await createProfile({
        id: authData.user.id,
        email,
        full_name: fullName,
      });

      if (profileError) throw profileError;

      setSuccess(true);
      setTimeout(() => router.push("/onboarding"), 800);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message.includes("already registered")
            ? "Email sudah terdaftar"
            : err.message
          : "Gagal mendaftar";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <>
      {success ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in py-10">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">
            Akun berhasil dibuat!
          </h2>
          <p className="text-sm text-text-secondary/60">
            Mengarahkan ke halaman onboarding...
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-5">
              <Sparkles size={18} className="text-white" />
            </div>
            <h1 className="text-[30px] font-bold text-text-primary leading-[1.15]">
              Mulai<br />Perjalananmu
            </h1>
            <p className="text-sm text-text-secondary/60 mt-2 leading-relaxed">
              Buat akun dan temukan arah masa depanmu bersama Beautifio.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm text-destructive mb-4 animate-fade-in">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.06em] mb-2 block">
                Nama Lengkap
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nama lengkap kamu"
                  required
                  className="w-full h-14 pl-11 pr-4 rounded-xl bg-bg border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.06em] mb-2 block">
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  required
                  className="w-full h-14 pl-11 pr-4 rounded-xl bg-bg border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.06em] mb-2 block">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 6 karakter"
                  required
                  minLength={6}
                  className="w-full h-14 pl-11 pr-11 rounded-xl bg-bg border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary/30 cursor-pointer hover:text-text-secondary/50 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Daftar
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-text-secondary/40 mt-6">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Masuk
            </Link>
          </p>
        </>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-bg md:bg-gradient-to-br md:from-primary md:to-[#052e47]">
      <div className="min-h-screen md:flex md:max-w-[1200px] md:mx-auto">

        {/* ─── Left Panel — Desktop ──────────── */}
        <div className="hidden md:flex md:w-2/5 lg:w-1/2 flex-col justify-between p-8 lg:p-14 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg mb-12">
              <Sparkles size={22} className="text-white" />
            </div>

            <h2 className="text-[32px] lg:text-[42px] font-bold text-white leading-[1.15] mb-5">
              Temukan Arah<br />
              Masa Depanmu
            </h2>

            <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-sm">
              Setiap perjalanan besar dimulai dari satu langkah kecil. Mulai hari ini, bersama Beautifio.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white/80" />
                </div>
                <span className="text-sm text-white/50">Daftar gratis — hanya 5 menit</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white/80" />
                </div>
                <span className="text-sm text-white/50">Akses ke mentor dan komunitas</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white/80" />
                </div>
                <span className="text-sm text-white/50">Tanpa commitment — kamu yang pegang kendali</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-px bg-white/10 mb-4" />
            <p className="text-xs text-white/30">
              Bergabung dengan ribuan anak muda Indonesia lainnya
            </p>
          </div>
        </div>

        {/* ─── Right Panel — Form ──────────── */}
        <div className="w-full md:w-3/5 lg:w-1/2 flex items-center justify-center md:bg-bg p-4 md:p-6 lg:p-8">
          <div className="w-full max-w-[430px] md:max-w-[500px] bg-surface rounded-[32px] shadow-card flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 flex flex-col px-6 md:px-8 py-8 md:py-10 relative z-10">
              {formContent}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
