import { api, buscar } from "../services/Service";
import { ToastAlerta } from "./ToastAlerta";

export const AUTH_TOKEN_KEY = "crmed_token";

export function isAuthenticated(): boolean {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  if (token) {
    try {
      api.get('/especialidade/id/1', {headers: {
        Authorization: token
      }});
      return true;
    } 
    catch (error) {
      ToastAlerta('Sessão expirada!', 'info')
      clearToken()
      return false;
    }
  }
  return false;
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

