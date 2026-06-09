import type { ReactNode } from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3",
};

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = "md",
  className = "",
}: ProgressBarProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`flex-1 rounded-full bg-muted overflow-hidden ${sizeStyles[size]}`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-semibold text-text-secondary min-w-[2.5rem] text-right">
          {Math.round(pct)}%
        </span>
      )}
    </div>
  );
}

interface MilestoneCheckProps {
  completed: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function MilestoneCheck({
  completed,
  size = "md",
  className = "",
}: MilestoneCheckProps) {
  const s = size === "md" ? "w-6 h-6 text-xs" : "w-5 h-5 text-[10px]";
  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
        completed
          ? "bg-success text-white"
          : "bg-muted text-text-secondary border-2 border-border"
      } ${s} ${className}`}
    >
      {completed ? "✓" : ""}
    </div>
  );
}
