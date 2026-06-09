"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { createProfile, updateProfile } from "@/lib/supabase/profile";
import { getDiscoverData, clearDiscoverData, type DiscoverData } from "@/lib/discover-store";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [discover, setDiscover] = useState<DiscoverData | null>(null);

  useEffect(() => {
    setDiscover(getDiscoverData());
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (password.length < 6) { setError("Password minimal 6 karakter"); setLoading(false); return; }
    try {
      const supabase = getSupabaseClient();
      if (!supabase) throw new Error("Supabase not configured");
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email, password,
        options: { data: { full_name: fullName }, emailRedirectTo: `${window.location.origin}/auth/callback` },
      });
      if (authError) throw authError;
      if (!authData.user) throw new Error("Gagal membuat akun");

      const profileData: Record<string, unknown> = {
        id: authData.user.id,
        email,
        full_name: fullName,
        onboarding_completed: true,
      };

      if (discover?.goal) profileData.goals = [discover.goal];
      if (discover?.status) profileData.status = discover.status.toLowerCase().replace(/\s+/g, "_") as string;
      if (discover?.city) profileData.city = discover.city;

      const { error: profileError } = await createProfile(profileData as Parameters<typeof createProfile>[0]);
      if (profileError) throw profileError;

      clearDiscoverData();
      setSuccess(true);
      setTimeout(() => router.push("/beranda"), 800);
    } catch (err) {
      const message = err instanceof Error
        ? err.message.includes("already registered") ? "Email sudah terdaftar" : err.message
        : "Gagal mendaftar";
      setError(message);
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-surface rounded-[24px] shadow-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="absolute -top-20 -right-20 w-36 h-36 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-36 h-36 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 py-8">
        {success ? (
          <div className="py-10 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-text-primary mb-1">Akun berhasil dibuat!</h2>
            <p className="text-sm text-text-secondary/60">Mengarahkan ke dashboard...</p>
          </div>
        ) : (
          <>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
              <Sparkles size={17} className="text-white" />
            </div>

            <h1 className="text-[22px] font-bold text-text-primary font-heading mb-1">Mulai Perjalananmu</h1>
            <p className="text-sm text-text-secondary/50 mb-6">Buat akun dan simpan roadmap personalisasimu.</p>

            {discover && (
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4 text-xs text-text-secondary/60">
                Roadmap untuk <span className="font-semibold text-text-primary">{discover.goal}</span> akan tersimpan
              </div>
            )}

            {error && (
              <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/10 text-xs text-destructive mb-4">{error}</div>
            )}

            <form onSubmit={handleRegister} className="space-y-3.5">
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nama Lengkap" required
                  className="w-full h-12 pl-9 pr-3.5 rounded-lg bg-bg border-0 text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow" />
              </div>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
                  className="w-full h-12 pl-9 pr-3.5 rounded-lg bg-bg border-0 text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow" />
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (min. 6 karakter)" required minLength={6}
                  className="w-full h-12 pl-9 pr-9 rounded-lg bg-bg border-0 text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30 cursor-pointer hover:text-text-secondary/50">
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <button type="submit" disabled={loading}
                className="w-full h-12 rounded-lg bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 transition-all disabled:opacity-40 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-1">
                {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Daftar <ArrowRight size={15} /></>}
              </button>
            </form>

            <p className="text-center text-xs text-text-secondary/40 mt-5">
              Sudah punya akun? <Link href="/login" className="text-primary font-semibold hover:underline">Masuk</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
