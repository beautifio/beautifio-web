"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, MapPin, Compass, User } from "lucide-react";

const userItems = [
  { id: "beranda", label: "Beranda", icon: Home, href: "/beranda" },
  { id: "circle", label: "Circle", icon: Users, href: "/circle" },
  { id: "roadmap", label: "Roadmap", icon: MapPin, href: "/roadmap" },
  { id: "peluang", label: "Peluang", icon: Compass, href: "/peluang" },
  { id: "profil", label: "Profil", icon: User, href: "/profil" },
];

const mentorItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/mentor/dashboard" },
  { id: "circle", label: "Circle", icon: Users, href: "/mentor/circle" },
  { id: "sesi", label: "Sesi", icon: MapPin, href: "/mentor/sesi" },
  { id: "profil", label: "Profil", icon: User, href: "/mentor/profil" },
];

export function BottomNav({ variant = "user" }: { variant?: "user" | "mentor" }) {
  const pathname = usePathname();
  const items = variant === "mentor" ? mentorItems : userItems;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] h-[64px] bg-surface border-t border-border z-50 px-2">
      <div className="h-full flex items-center justify-around">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                isActive ? "text-primary" : "text-text-secondary/50"
              }`}
            >
              <Icon size={20} className={isActive ? "text-primary" : ""} />
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-primary font-semibold" : "text-text-secondary/50"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
