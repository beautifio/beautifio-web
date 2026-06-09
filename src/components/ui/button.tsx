import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-button",
  secondary: "border-2 border-primary text-primary hover:bg-primary/5",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-button",
  ghost: "text-text-secondary hover:bg-muted hover:text-text-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-xs font-semibold",
  md: "h-10 px-5 text-sm font-semibold",
  lg: "h-12 px-6 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
