"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Send, Sparkles } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      if (!supabase) throw new Error("Supabase not configured");

      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
        },
      );

      if (resetError) throw resetError;
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Gagal mengirim email reset",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] min-h-[640px] bg-surface rounded-[32px] shadow-card flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

        <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex-1 flex flex-col px-6 py-10 relative z-10">
          <div className="mb-auto">
            <Link href="/login" className="w-10 h-10 rounded-xl bg-bg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
              <ArrowLeft size={18} className="text-text-secondary" />
            </Link>
          </div>

          {sent ? (
            <div className="flex-1 flex flex-col justify-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-5">
                <Send size={24} className="text-success" />
              </div>
              <h1 className="text-[28px] font-bold text-text-primary leading-tight">
                Email terkirim
              </h1>
              <p className="text-sm text-text-secondary/60 mt-2 leading-relaxed">
                Kami sudah mengirim link reset password ke <strong className="text-text-primary">{email}</strong>.
                Cek inbox (atau folder spam) kamu ya.
              </p>
              <Link
                href="/login"
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center cursor-pointer hover:opacity-90 transition-colors shadow-lg shadow-primary/20 mt-8"
              >
                Kembali ke Login
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-[30px] font-bold text-text-primary leading-[1.15]">
                  Lupa password?
                </h1>
                <p className="text-sm text-text-secondary/60 mt-2 leading-relaxed">
                  Masukkan email kamu dan kami akan kirim link untuk reset password.
                </p>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm text-destructive mb-4 animate-fade-in">
                  {error}
                </div>
              )}

              <form onSubmit={handleReset} className="space-y-4">
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Link Reset
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-sm text-text-secondary/40 mt-6">
                Ingat password?{" "}
                <Link href="/login" className="text-primary font-semibold hover:underline">
                  Masuk
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
