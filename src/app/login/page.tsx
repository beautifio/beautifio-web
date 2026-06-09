"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Check } from "lucide-react";
import { signIn } from "@/lib/supabase/queries";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: signInError } = await signIn(email, password);
      if (signInError) throw signInError;
      if (!data.session) {
        setError("Email atau password salah");
        setLoading(false);
        return;
      }

      const supabase = getSupabaseClient();
      if (!supabase) {
        router.push("/");
        return;
      }

      const { data: profile } = await supabase
        .from("user_profiles")
        .select("onboarding_completed")
        .eq("id", data.session.user.id)
        .maybeSingle();

      if (profile && !profile.onboarding_completed) {
        router.push("/onboarding");
      } else {
        router.push("/");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal masuk");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  const formContent = (
    <>
      <div className="mb-8">
        <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-5">
          <Sparkles size={18} className="text-white" />
        </div>
        <h1 className="text-[30px] font-bold text-text-primary leading-[1.15]">
          Selamat datang<br />kembali
        </h1>
        <p className="text-sm text-text-secondary/60 mt-2 leading-relaxed">
          Senang melihatmu lagi! Masuk untuk melanjutkan perjalananmu.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm text-destructive mb-4 animate-fade-in">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Masukkan password"
              required
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

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-primary/60 hover:text-primary transition-colors"
          >
            Lupa password?
          </Link>
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
              Masuk
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-surface px-3 text-xs text-text-secondary/30">atau</span>
        </div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full h-14 rounded-xl bg-surface shadow-sm text-sm font-semibold text-text-primary cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center gap-2.5 border-0"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Lanjut dengan Google
      </button>

      <p className="text-center text-sm text-text-secondary/40 mt-6">
        Belum punya akun?{" "}
        <Link href="/register" className="text-primary font-semibold hover:underline">
          Daftar
        </Link>
      </p>
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
              Selamat Datang<br />
              Kembali
            </h2>

            <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-sm">
              Senang melihatmu lagi. Lanjutkan perjalananmu menuju masa depan yang lebih cerah.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white/80" />
                </div>
                <span className="text-sm text-white/50">Lanjutkan dari tempat terakhir</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white/80" />
                </div>
                <span className="text-sm text-white/50">Akses progress dan milestonemu</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white/80" />
                </div>
                <span className="text-sm text-white/50">Terhubung dengan circle dan mentor</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-px bg-white/10 mb-4" />
            <p className="text-xs text-white/30">
              Bersama Beautifio, wujudkan masa depan impianmu
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
