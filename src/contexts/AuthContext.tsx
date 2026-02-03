import { createContext, useEffect, useMemo, useState } from "react";

export type UsuarioLogin = {
  id?: number;
  nome?: string;
  usuario?: string;
  token: string;
};

type AuthContextType = {
  usuario: UsuarioLogin;
  setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>>;
  handleLogout: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const saved = localStorage.getItem("crmed_usuario");
    if (saved) {
      try {
        return JSON.parse(saved) as UsuarioLogin;
      } catch {
        return { token: "" };
      }
    }
    return { token: "" };
  });

  const isAuthenticated = !!usuario?.token;

  useEffect(() => {
    localStorage.setItem("crmed_usuario", JSON.stringify(usuario));
  }, [usuario]);

  function handleLogout() {
    setUsuario({ token: "" });
    localStorage.removeItem("crmed_usuario");
  }

  const value = useMemo(
    () => ({ usuario, setUsuario, handleLogout, isAuthenticated }),
    [usuario, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
