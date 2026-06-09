"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { updateProfile } from "@/lib/supabase/profile";

const TOTAL_STEPS = 5;

const statusOptions = [
  { value: "pelajar_sma", label: "Pelajar SMA" },
  { value: "mahasiswa", label: "Mahasiswa" },
  { value: "fresh_graduate", label: "Fresh Graduate" },
  { value: "bekerja", label: "Bekerja" },
  { value: "mencari", label: "Mencari Kerja" },
];

const interestOptions = [
  "Teknologi & Programming",
  "Desain & Kreatif",
  "Bisnis & Kewirausahaan",
  "Pemasaran & Content Creation",
  "Data & Analitik",
  "Kesehatan & Mental Health",
  "Sosial & Lingkungan",
  "Pendidikan & Akademik",
];

export default function OnboardingPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [goal, setGoal] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [target, setTarget] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const canProceed = () => {
    switch (step) {
      case 1: return city.trim().length > 0;
      case 2: return status !== "";
      case 3: return goal.trim().length > 0;
      case 4: return interests.length > 0;
      case 5: return target.trim().length > 0;
      default: return false;
    }
  };

  const handleNext = () => {
    if (!canProceed()) return;
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleFinish = async () => {
    if (!canProceed()) return;
    if (!user) {
      router.push("/login");
      return;
    }

    setSaving(true);
    setError("");

    const { error: saveError } = await updateProfile(user.id, {
      city,
      status: status as "pelajar_sma" | "mahasiswa" | "fresh_graduate" | "bekerja" | "mencari",
      goals: [goal, target],
      interests,
      onboarding_completed: true,
    });

    if (saveError) {
      setError("Gagal menyimpan data. Coba lagi.");
      setSaving(false);
      return;
    }

    router.push("/");
  };

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[430px] mx-auto w-full min-h-screen bg-surface flex flex-col">

        {/* ─── Progress Bar ──────────────── */}
        <div className="px-6 pt-8 pb-2">
          <div className="flex items-center gap-1.5 mb-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  i < step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-text-secondary/40 font-medium">
            Langkah {step} dari {TOTAL_STEPS}
          </p>
        </div>

        {/* ─── Content ───────────────────── */}
        <div className="flex-1 flex flex-col px-6 pt-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/10 text-sm text-destructive mb-4">
              {error}
            </div>
          )}

          {/* Step 1: Kota */}
          {step === 1 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <p className="text-xs text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">
                Pertanyaan 1
              </p>
              <h2 className="text-[24px] font-bold text-text-primary leading-tight mb-6">
                Kota tempat tinggalmu?
              </h2>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                placeholder="Contoh: Sleman, Yogyakarta"
                className="w-full h-12 px-4 rounded-xl bg-bg border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
                autoFocus
              />
            </div>
          )}

          {/* Step 2: Status */}
          {step === 2 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <p className="text-xs text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">
                Pertanyaan 2
              </p>
              <h2 className="text-[24px] font-bold text-text-primary leading-tight mb-6">
                Status kamu saat ini?
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {statusOptions.map((opt) => {
                  const selected = status === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setStatus(opt.value)}
                      className={`h-16 rounded-xl text-sm font-semibold text-left px-4 transition-all cursor-pointer ${
                        selected
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-bg text-text-secondary hover:bg-muted shadow-sm"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Goal */}
          {step === 3 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <p className="text-xs text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">
                Pertanyaan 3
              </p>
              <h2 className="text-[24px] font-bold text-text-primary leading-tight mb-6">
                Apa goal utamamu?
              </h2>
              <p className="text-sm text-text-secondary/50 mb-4">
                Apa satu hal yang paling ingin kamu capai dalam hidup?
              </p>
              <input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                placeholder="Contoh: Jadi frontend developer"
                className="w-full h-12 px-4 rounded-xl bg-bg border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow"
                autoFocus
              />
            </div>
          )}

          {/* Step 4: Minat */}
          {step === 4 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <p className="text-xs text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">
                Pertanyaan 4
              </p>
              <h2 className="text-[24px] font-bold text-text-primary leading-tight mb-1">
                Bidang yang kamu minati?
              </h2>
              <p className="text-sm text-text-secondary/50 mb-5">
                Pilih semua yang sesuai (bisa lebih dari satu)
              </p>
              <div className="flex flex-wrap gap-2.5">
                {interestOptions.map((item) => {
                  const selected = interests.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleInterest(item)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                        selected
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-bg text-text-secondary hover:bg-muted shadow-sm"
                      }`}
                    >
                      {selected && <Check size={14} className="inline mr-1.5 -mt-0.5" />}
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 5: Target */}
          {step === 5 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <p className="text-xs text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">
                Pertanyaan 5
              </p>
              <h2 className="text-[24px] font-bold text-text-primary leading-tight mb-6">
                Target kamu 1 tahun ke depan?
              </h2>
              <textarea
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Contoh: Lulus sertifikasi Google, magang di startup, dan membangun portfolio."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-bg border-0 shadow-sm text-sm text-text-primary outline-none placeholder:text-text-secondary/30 focus:ring-2 focus:ring-primary/20 transition-shadow resize-none"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* ─── Navigation ────────────────── */}
        <div className="px-6 pb-8 pt-4">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="w-12 h-12 rounded-xl bg-bg shadow-sm flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <ArrowLeft size={18} className="text-text-secondary" />
              </button>
            )}

            {step < TOTAL_STEPS ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                Lanjut
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={saving || !canProceed()}
                className="flex-1 h-12 rounded-xl bg-accent text-accent-foreground text-sm font-bold cursor-pointer hover:bg-accent/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
              >
                {saving ? (
                  <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Sparkles size={16} />
                    Selesai
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
