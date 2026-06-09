"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { updateProfile } from "@/lib/supabase/profile";

const goals = [
  "Masuk Perguruan Tinggi",
  "Dapat Kerja Pertama",
  "Meningkatkan Skill",
  "Memulai Usaha",
  "Mendapat Beasiswa",
  "Belum Tahu",
  "Lainnya",
];

const TOTAL_STEPS = 8;

export default function OnboardingPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState(3);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!selectedGoal) return;
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  };

  const handleFinish = async () => {
    if (!selectedGoal) return;
    if (!user) { router.push("/login"); return; }
    setSaving(true);
    setError("");
    const { error: saveError } = await updateProfile(user.id, {
      goals: [selectedGoal],
      onboarding_completed: true,
    });
    if (saveError) { setError("Gagal menyimpan. Coba lagi."); setSaving(false); return; }
    router.push("/beranda");
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[390px] mx-auto bg-surface min-h-screen flex flex-col">
        <div className="px-5 pt-6 pb-2">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < step ? "bg-primary" : "bg-border"}`} />
            ))}
          </div>
          <p className="text-[11px] text-text-secondary/40 font-medium">Langkah {step} dari {TOTAL_STEPS}</p>
        </div>

        <div className="flex-1 px-5 pt-4">
          {error && <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/10 text-xs text-destructive mb-4">{error}</div>}

          <p className="text-[11px] text-text-secondary/30 font-medium uppercase tracking-[0.08em] mb-2">Pertanyaan {step}</p>
          <h2 className="text-[20px] font-bold text-text-primary leading-tight font-heading mb-2">
            Apa tujuan utamamu saat ini?
          </h2>
          <p className="text-sm text-text-secondary/50 mb-5">
            Pilih tujuan yang paling ingin kamu capai dalam 12 bulan ke depan.
          </p>

          <div className="space-y-2">
            {goals.map((goal) => {
              const selected = selectedGoal === goal;
              return (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`w-full h-12 rounded-xl text-sm font-medium text-left px-4 transition-all cursor-pointer ${
                    selected
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-bg text-text-secondary hover:bg-muted"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-5 pb-6 pt-4">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button onClick={() => setStep((s) => s - 1)}
                className="w-11 h-11 rounded-xl bg-bg flex items-center justify-center cursor-pointer hover:shadow-sm transition-shadow">
                <ArrowLeft size={17} className="text-text-secondary" />
              </button>
            )}
            {step < TOTAL_STEPS ? (
              <button onClick={handleNext} disabled={!selectedGoal}
                className="flex-1 h-11 rounded-xl bg-primary text-primary-foreground text-sm font-bold cursor-pointer hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                Lanjutkan <ArrowRight size={16} />
              </button>
            ) : (
              <button onClick={handleFinish} disabled={saving || !selectedGoal}
                className="flex-1 h-11 rounded-xl bg-accent text-accent-foreground text-sm font-bold cursor-pointer hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-accent/20 flex items-center justify-center gap-2">
                {saving ? <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" /> : "Selesai"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
