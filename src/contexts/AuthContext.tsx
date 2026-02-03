import { createContext, useState, type ReactNode, useEffect } from "react";
import type { UsuarioLogin } from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";
import { clearToken, setToken } from "../utils/Auth";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps) {
    const noSection = {
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: '',
    }

    const [usuario, setUsuario] = useState<UsuarioLogin>(noSection);

    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Sempre que o usuario mudar e tiver token, salva no localStorage
    useEffect(() => {
        if (usuario.token) {
            setToken(usuario.token);
        }
    }, [usuario]);

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login('/medicos/logar', usuarioLogin, setUsuario)
            ToastAlerta("Login efetuado com sucesso!", "info")
        }
        catch(error: any) {
            ToastAlerta("Os Dados do usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario(noSection);
        clearToken();
    }

    return (
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}