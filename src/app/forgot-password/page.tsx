"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Send } from "lucide-react";
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
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 flex flex-col justify-center max-w-[430px] mx-auto w-full px-6">
        <Link
          href="/login"
          className="w-10 h-10 rounded-xl bg-surface shadow-sm flex items-center justify-center mb-8 hover:shadow-md transition-shadow"
        >
          <ArrowLeft size={18} className="text-text-secondary" />
        </Link>

        {sent ? (
          <>
            <div className="mb-10">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-5">
                <Send size={22} className="text-success" />
              </div>
              <h1 className="text-[28px] font-bold text-text-primary leading-tight">
                Email terkirim
              </h1>
              <p className="text-sm text-text-secondary/60 mt-2 leading-relaxed">
                Kami sudah mengirim link reset password ke <strong>{email}</strong>.
                Cek inbox (atau folder spam) kamu ya.
              </p>
            </div>
            <Link
              href="/login"
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Kembali ke Login
            </Link>
          </>
        ) : (
          <>
            <div className="mb-10">
              <h1 className="text-[28px] font-bold text-text-primary leading-tight">
                Lupa password?
              </h1>
              <p className="text-sm text-text-secondary/60 mt-2">
                Masukkan email kamu dan kami akan kirim link untuk reset password.
              </p>
            </div>

            <form onSubmit={handleReset} className="space-y-4">
              {error && (
                <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm text-destructive">
                  {error}
                </div>
              )}

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

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
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

            <p className="text-center text-xs text-text-secondary/40 mt-6">
              Ingat password?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Masuk
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
