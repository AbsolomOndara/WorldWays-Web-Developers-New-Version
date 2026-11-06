export type ApiRecord = Record<string, unknown> & { id?: string | number };
const base = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');

export function apiConfigured() { return Boolean(base); }
export function token() { return typeof window === 'undefined' ? '' : sessionStorage.getItem('ww_admin_token') || ''; }
export async function apiRequest<T = any>(path: string, options: RequestInit = {}, authenticated = false): Promise<T> {
  if (!base) throw new Error('API is not configured. Set NEXT_PUBLIC_API_BASE_URL to your backend URL.');
  const headers = new Headers(options.headers);
  if (!(options.body instanceof FormData)) headers.set('Content-Type', 'application/json');
  if (authenticated && token()) headers.set('Authorization', `Bearer ${token()}`);
  const response = await fetch(`${base}${path}`, { ...options, headers, cache: 'no-store' });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) { if (response.status === 401 && authenticated && typeof window !== 'undefined') { sessionStorage.removeItem('ww_admin_token'); window.location.assign('/admin/login'); } throw new Error(result.message || `Request failed (${response.status})`); }
  return result.data ?? result;
}
export async function publicRequest<T = any>(path: string, options: RequestInit = {}): Promise<T> {
  return apiRequest<T>(path, options, false);
}
export async function adminRequest<T = any>(path: string, options: RequestInit = {}): Promise<T> {
  return apiRequest<T>(path, options, true);
}
