import { createContext, useState, type ReactNode, useEffect } from "react";
import type { UsuarioLogin } from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";
import { clearToken, setToken } from "../utils/Auth";
import type { Especialidade } from "../models/Especialidade";

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
        especialidade: {} as Especialidade,
        consulta: [],
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

    useEffect(() => {
        async function restoreSession() {
            const token = localStorage.getItem('crmed_token');

            if (!token) {
                setIsLoading(false);
                return;
            }

            if (usuario.id === 0) {
                try {
                    console.log("Tentando restaurar sessão com token:", token);
                    
                    const response = await fetch('https://crmed.onrender.com/medicos/me', {
                        headers: {
                            'Authorization': token
                        }
                    });
                    
                    console.log("Status da resposta:", response.status);

                    if (response.ok) {
                        const userData = await response.json();
                        console.log("Dados recebidos:", userData);
                        setUsuario({ ...userData, token });
                    } else {
                        console.error("token rejeitado:", response.statusText);

                        if (response.status === 401 || response.status === 403) {
                            alert("Sessão expirada. Faça login novamente.");
                            handleLogout();
                        }
                    }
                } catch (error) {
                    console.error("Erro na restauração:", error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                 setIsLoading(false);
            }
        }

        restoreSession();
    }, []);

    async function handleLogin(usuarioLogin: UsuarioLogin): Promise<void> {
        setIsLoading(true)
        try {
            await login('/medicos/logar', usuarioLogin, setUsuario)
            ToastAlerta("Login efetuado com sucesso!", "info")
        }
        catch(error: any) {
            ToastAlerta("Os Dados do usuário estão inconsistentes!", "erro")
            throw error;
        } finally {
            setIsLoading(false)
        }
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
