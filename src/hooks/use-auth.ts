"use client";

import { useAuthStore } from "@/stores/auth-store";

export function useAuth() {
  const { user, session, isLoading, reset } = useAuthStore();
  return { user, session, isLoading, signOut: reset };
}
