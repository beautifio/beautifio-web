export interface DiscoverData {
  goal: string;
  status: string;
  city: string;
}

const STORAGE_KEY = "beautifio_discover";

export function getDiscoverData(): DiscoverData | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as DiscoverData;
  } catch {
    return null;
  }
}

export function saveDiscoverData(data: Partial<DiscoverData>): void {
  if (typeof window === "undefined") return;
  const existing = getDiscoverData() ?? {} as DiscoverData;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...existing, ...data }));
}

export function clearDiscoverData(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
