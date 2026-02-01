
export const AUTH_TOKEN_KEY = "crmed_token";

export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}

export function getToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  window.dispatchEvent(new Event("auth-changed"));
}

export function clearToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  window.dispatchEvent(new Event("auth-changed"));
}

