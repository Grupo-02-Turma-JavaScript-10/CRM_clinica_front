import { useContext, useState, type ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type { UsuarioLogin } from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";
import { NavLink } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const {handleLogin, isLoading} = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  const [showPassword, setShowPassword] = useState(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await handleLogin(usuarioLogin);
      navigate('/perfil');
    } catch (error) {
      // Erro já tratado no AuthContext
    }
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 relative"
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
              <h2 className="text-4xl font-semibold mb-6 leading-tight font-[var(--font-display)] text-[var(--text)]">
                Bem-vindo de volta
              </h2>
              <p className="text-lg max-w-md font-[var(--font-sans)] text-[var(--accent)]">
                Acesse sua conta para continuar.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2 font-[var(--font-display)] text-[var(--text)]">
              Login
            </h3>
            <p className="mb-8 font-[var(--font-sans)] text-[var(--accent)]">
              Entre com seus dados
            </p>

            <form className="space-y-6" onSubmit={logar}>
       
              <div>
                <label className="block text-sm font-medium mb-1 font-[var(--font-sans)] text-[var(--text)]">
                  Email
                </label>
                <input
                  type="email"
                  name="usuario"
                  placeholder="seu@email.com"
                  className="
                    w-full px-4 py-3 rounded-lg border
                    font-[var(--font-sans)]
                    bg-[var(--bg)] text-[var(--text)]
                    border-[var(--border)]
                    transition-all duration-300

                    hover:border-[var(--accent)]
                    hover:shadow-[0_0_14px_var(--accent)]

                    focus-visible:outline-none
                    focus-visible:border-[var(--accent)]
                    focus-visible:shadow-[0_0_18px_var(--accent)]
                  "
                  value = {usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>

           
              <div>
                <label className="block text-sm font-medium mb-1 font-[var(--font-sans)] text-[var(--text)]">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="senha"
                    placeholder="••••••••"
                    className="
                      w-full px-4 py-3 pr-12 rounded-lg border
                      font-[var(--font-sans)]
                      bg-[var(--bg)] text-[var(--text)]
                      border-[var(--border)]
                      transition-all duration-300

                      hover:border-[var(--accent)]
                      hover:shadow-[0_0_14px_var(--accent)]

                      focus-visible:outline-none
                      focus-visible:border-[var(--accent)]
                      focus-visible:shadow-[0_0_18px_var(--accent)]
                    "
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent)]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm font-[var(--font-sans)]">
                <a href="#" className="hover:underline text-[var(--accent)]">
                  Esqueceu a senha?
                </a>

                <NavLink
                  to="/cadastro"
                  className="hover:underline text-[var(--accent)] font-[var(--font-sans)]"
                >
                  Cadastre-se
                </NavLink>
              </div>

         
              <button
                type="submit"
                className="
                  w-full py-3 rounded-lg font-medium font-[var(--font-sans)]
                  bg-cyan-500 text-[#EAF2FF]
                  transition-all duration-300 shadow-md

                  hover:bg-cyan-600
                  hover:shadow-[0_0_18px_rgba(13,148,136,0.8)]

                  focus-visible:outline-none
                  focus-visible:shadow-[0_0_22px_rgba(13,148,136,1)]
                "
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
