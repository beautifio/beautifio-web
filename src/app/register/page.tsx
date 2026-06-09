"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, UserPlus } from "lucide-react";
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

      router.push("/onboarding");
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

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 flex flex-col justify-center max-w-[430px] mx-auto w-full px-6">
        <div className="mb-10">
          <div className="w-10 h-[3px] bg-accent rounded-full mb-5" />
          <h1 className="text-[28px] font-bold text-text-primary leading-tight">
            Mulai<br />perjalananmu
          </h1>
          <p className="text-sm text-text-secondary/60 mt-2">
            Bikin akun dan temukan arah masa depanmu bersama Beautifio.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm text-destructive">
              {error}
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.06em] mb-2 block">
              Nama Lengkap
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nama lengkap kamu"
                required
                className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-surface border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.06em] mb-2 block">
              Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                required
                className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-surface border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary/50 uppercase tracking-[0.06em] mb-2 block">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                required
                minLength={6}
                className="w-full h-12 pl-10 pr-10 rounded-xl bg-surface border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30 cursor-pointer hover:text-text-secondary/50 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <UserPlus size={16} />
                Daftar
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-text-secondary/40 mt-6">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}
