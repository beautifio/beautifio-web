import { getSupabaseClient } from "./client";

function requireClient() {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  return client;
}

export async function signUp(email: string, password: string, fullName: string) {
  const client = requireClient();
  return client.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
}

export async function signIn(email: string, password: string) {
  const client = requireClient();
  return client.auth.signInWithPassword({ email, password });
}

export async function signInWithGoogle() {
  const client = requireClient();
  return client.auth.signInWithOAuth({ provider: "google" });
}

export async function signOut() {
  const client = requireClient();
  return client.auth.signOut();
}

export async function getProfile(userId: string) {
  const client = requireClient();
  return client.from("user_profiles").select("*").eq("id", userId).single();
}

export async function upsertProfile(profile: {
  id: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  city?: string;
  status?: string;
  interests?: string[];
  goals?: string[];
  onboarding_completed?: boolean;
}) {
  const client = requireClient();
  return client.from("user_profiles").upsert(profile).select().single();
}

export async function saveOnboardingData(
  userId: string,
  data: {
    city?: string;
    status?: string;
    interests?: string[];
    goals?: string[];
  }
) {
  const client = requireClient();
  return client.from("user_profiles").upsert({
    id: userId,
    ...data,
    onboarding_completed: true,
    updated_at: new Date().toISOString(),
  });
}
