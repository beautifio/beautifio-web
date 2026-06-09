import { getSupabaseClient } from "./client";

// ─── Types ──────────────────────────────────────────────────────────────────

export type UserProfile = {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  city: string | null;
  status: "pelajar_sma" | "mahasiswa" | "fresh_graduate" | "bekerja" | "mencari" | null;
  interests: string[];
  goals: string[];
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
};

export type CreateProfileInput = {
  id: string;
  email?: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  city?: string;
  status?: UserProfile["status"];
  interests?: string[];
  goals?: string[];
};

export type UpdateProfileInput = Partial<Omit<CreateProfileInput, "id" | "email">> & {
  onboarding_completed?: boolean;
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function requireClient() {
  const client = getSupabaseClient();
  if (!client)
    throw new Error(
      "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  return client;
}

function handleError(error: unknown, context: string): never {
  const message =
    error instanceof Error ? error.message : "Unknown error";
  throw new Error(`[profile:${context}] ${message}`);
}

// ─── Repository ─────────────────────────────────────────────────────────────

export async function getProfile(userId: string): Promise<{
  data: UserProfile | null;
  error: Error | null;
}> {
  try {
    const client = requireClient();
    const { data, error } = await client
      .from("user_profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) throw error;
    return { data: data as UserProfile | null, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error(String(err)) };
  }
}

export async function createProfile(
  input: CreateProfileInput,
): Promise<{
  data: UserProfile | null;
  error: Error | null;
}> {
  try {
    const client = requireClient();
    const { data, error } = await client
      .from("user_profiles")
      .insert({
        id: input.id,
        email: input.email ?? null,
        full_name: input.full_name ?? null,
        avatar_url: input.avatar_url ?? null,
        bio: input.bio ?? null,
        city: input.city ?? null,
        status: input.status ?? null,
        interests: input.interests ?? [],
        goals: input.goals ?? [],
        onboarding_completed: false,
      })
      .select()
      .single();

    if (error) throw error;
    return { data: data as UserProfile, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error(String(err)) };
  }
}

export async function updateProfile(
  userId: string,
  input: UpdateProfileInput,
): Promise<{
  data: UserProfile | null;
  error: Error | null;
}> {
  try {
    const client = requireClient();
    const payload: Record<string, unknown> = {};

    if (input.full_name !== undefined) payload.full_name = input.full_name;
    if (input.avatar_url !== undefined) payload.avatar_url = input.avatar_url;
    if (input.bio !== undefined) payload.bio = input.bio;
    if (input.city !== undefined) payload.city = input.city;
    if (input.status !== undefined) payload.status = input.status;
    if (input.interests !== undefined) payload.interests = input.interests;
    if (input.goals !== undefined) payload.goals = input.goals;
    if (input.onboarding_completed !== undefined)
      payload.onboarding_completed = input.onboarding_completed;

    const { data, error } = await client
      .from("user_profiles")
      .update(payload)
      .eq("id", userId)
      .select()
      .single();

    if (error) throw error;
    return { data: data as UserProfile, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error(String(err)) };
  }
}
