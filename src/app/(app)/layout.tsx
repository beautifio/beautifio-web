import { BottomNav } from "@/components/ui/bottom-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[390px] mx-auto bg-surface min-h-screen relative">
        <div className="pb-[64px]">{children}</div>
      </div>
      <BottomNav variant="user" />
    </div>
  );
}
