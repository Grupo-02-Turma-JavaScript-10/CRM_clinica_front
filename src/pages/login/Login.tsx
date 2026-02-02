import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type { UsuarioLogin } from "../../models/UsuarioLogin";
import { isAuthenticated } from "../../utils/Auth";
import { ClipLoader } from "react-spinners";


function Login() {
  const navigate = useNavigate();

  const {usuario, handleLogin, isLoading} = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=> {
    if (isAuthenticated()) {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <section
      className="font-sans min-h-screen flex items-center justify-center px-6 relative"
      style={{ backgroundColor: "var(--bg)" }} 
    >
 
     

  
      <div
        className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl"
        style={{
          backgroundColor: "var(--surface)",
          boxShadow:
            "0 0 25px rgba(13, 148, 136, 0.5), 0 0 25px rgba(59, 130, 246, 0.5)", 
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
         
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Pessoa trabalhando"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--surface)]/80 flex flex-col justify-center p-12">
              <h2
                className="text-4xl font-semibold mb-6 leading-tight"
                style={{ color: "var(--text)" }}
              >
                Bem-vindo de volta
              </h2>
              <p className="text-lg max-w-md" style={{ color: "var(--text-accent)" }}>
                Acesse sua conta para continuar.
              </p>
            </div>
          </div>

       
       
          <div className="font-sans p-8 sm:p-12 flex flex-col justify-center">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ color: "var(--text)" }}
            >
              Login
            </h3>
            <p className="mb-8" style={{ color: "var(--text-accent)" }}>
              Entre com seus dados
            </p>

            <form className="space-y-6" onSubmit={logar}>
       
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--text)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="usuario"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    boxShadow:
                      "0 0 8px rgba(13, 148, 136, 0.4), 0 0 8px rgba(59, 130, 246, 0.4)",
                  }}
                  value = {usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>

          
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--text)" }}
                >
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="senha"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "var(--border)",
                      boxShadow:
                        "0 0 8px rgba(13, 148, 136, 0.4), 0 0 8px rgba(59, 130, 246, 0.4)",
                    }}
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

       
              <div className="flex items-center justify-between text-sm">
                <label
                  className="flex items-center gap-2"
                  style={{ color: "var(--text)" }}
                >
                  <input
                    type="checkbox"
                    className="rounded border"
                    style={{
                      borderColor: "var(--border)",
                      boxShadow:
                        "0 0 6px rgba(13, 148, 136, 0.3), 0 0 6px rgba(59, 130, 246, 0.3)",
                    }}
                  />
                  Lembrar de mim
                </label>
                <a
                  href="#"
                  style={{ color: "var(--text-accent-2)" }}
                  className="hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>

         
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium transition shadow-md"
                style={{
                  backgroundColor: "#06B6D4",
                  color: "#EAF2FF",
                  boxShadow:
                    "0 0 12px rgba(13, 148, 136, 0.6), 0 0 12px rgba(59, 130, 246, 0.6)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0891B2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#06B6D4")
                }
              >
                {
                  isLoading ?
                  <ClipLoader
                    color="#ffffff"
                    size={24}
                  /> :
                  <span>Entrar</span>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;