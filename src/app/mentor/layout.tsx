import { BottomNav } from "@/components/ui/bottom-nav";

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <div className="max-w-[390px] mx-auto bg-[#0F172A] min-h-screen relative">
        <div className="pb-[64px]">{children}</div>
      </div>
      <BottomNav variant="mentor" />
    </div>
  );
}
