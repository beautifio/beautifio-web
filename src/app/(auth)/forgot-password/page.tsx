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
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      });
      if (resetError) throw resetError;
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengirim email reset");
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-surface rounded-[24px] shadow-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="absolute -top-20 -right-20 w-36 h-36 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-36 h-36 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 py-8">
        <Link href="/login" className="w-9 h-9 rounded-lg bg-bg flex items-center justify-center mb-5 hover:shadow-sm transition-shadow">
          <ArrowLeft size={16} className="text-text-secondary" />
        </Link>

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-5">
          <Sparkles size={17} className="text-white" />
        </div>

        {sent ? (
          <div className="py-6 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <Send size={20} className="text-success" />
            </div>
            <h2 className="text-lg font-bold text-text-primary mb-1">Email terkirim</h2>
            <p className="text-sm text-text-secondary/60 mb-6">Cek inbox atau spam kamu ya.</p>
            <Link href="/login"
              className="block w-full h-12 rounded-lg bg-primary text-primary-foreground text-sm font-bold text-center leading-[48px] shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
              Kembali ke Login
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-[22px] font-bold text-text-primary font-heading mb-1">Lupa password?</h1>
            <p className="text-sm text-text-secondary/50 mb-6">Masukkan email untuk reset password.</p>

            {error && (
              <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/10 text-xs text-destructive mb-4">{error}</div>
            )}

            <form onSubmit={handleReset} className="space-y-3.5">
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary/30" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
                  className="w-full h-12 pl-9 pr-3.5 rounded-lg bg-bg border-0 text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full h-12 rounded-lg bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 disabled:opacity-40 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send size={15} /> Kirim Link Reset</>}
              </button>
            </form>

            <p className="text-center text-xs text-text-secondary/40 mt-4">
              Ingat password? <Link href="/login" className="text-primary font-semibold hover:underline">Masuk</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
