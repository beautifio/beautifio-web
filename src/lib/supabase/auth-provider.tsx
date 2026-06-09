"use client";

"use client";

import { useEffect, type ReactNode } from "react";
import { getSupabaseClient } from "./client";
import { useAuthStore } from "@/stores/auth-store";
import type { Session } from "@supabase/supabase-js";

export function AuthProvider({ children }: { children: ReactNode }) {
  const { setUser, setSession, setLoading } = useAuthStore();

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(
      (res: { data: { session: Session | null } }) => {
        const s = res.data.session;
        setSession(s);
        setUser(s?.user ?? null);
        setLoading(false);
      },
    );

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);
      },
    );

    return () => subscription.unsubscribe();
  }, [setUser, setSession, setLoading]);

  return <>{children}</>;
}
