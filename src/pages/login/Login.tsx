import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-20 px-6 font-[var(--font-sans)]">
      <div className="container mx-auto max-w-6xl">
       
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border border-[var(--accent)]/10
            transition-all duration-500
          "
          style={{
            boxShadow:
              "0 0 25px rgba(13,148,136,0.5), 0 0 25px rgba(59,130,246,0.5)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Pessoa trabalhando"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12">
                <h2 className="text-4xl font-semibold mb-6 leading-tight text-white">
                  Bem-vindo de volta
                </h2>
                <p className="text-lg max-w-md text-cyan-300">
                  Acesse sua conta para continuar.
                </p>
              </div>
            </div>

          
            <div className="p-8 sm:p-12 bg-[var(--surface)]">
              <h3 className="text-3xl font-bold text-[var(--text)] mb-1">
                Login
              </h3>
              <p className="mb-8 text-[var(--muted)]">
                Entre com seus dados
              </p>

              <form className="space-y-6">
             
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)] ml-2 mb-3 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="
                      w-full bg-[var(--bg)] border border-[var(--accent)]/20
                      rounded-2xl p-4
                      text-[var(--text)]
                      transition-all duration-300

                      hover:border-[var(--accent)]
                      hover:shadow-[0_0_14px_var(--accent)]

                      focus-visible:outline-none
                      focus-visible:border-[var(--accent)]
                      focus-visible:shadow-[0_0_18px_var(--accent)]
                    "
                  />
                </div>

             
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)] ml-2 mb-3 block">
                    Senha
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="
                        w-full bg-[var(--bg)] border border-[var(--accent)]/20
                        rounded-2xl p-4 pr-12
                        text-[var(--text)]
                        transition-all duration-300

                        hover:border-[var(--accent)]
                        hover:shadow-[0_0_14px_var(--accent)]

                        focus-visible:outline-none
                        focus-visible:border-[var(--accent)]
                        focus-visible:shadow-[0_0_18px_var(--accent)]
                      "
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--accent)]"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

               
                <div className="flex justify-between text-sm">
                  <a href="#" className="text-[var(--accent)] hover:underline">
                    Esqueceu a senha?
                  </a>

                  <NavLink
                    to="/cadastro"
                    className="text-[var(--accent)] hover:underline"
                  >
                    Cadastre-se
                  </NavLink>
                </div>

           
               <NavLink
  to="/perfil"
  className="
    w-full py-3 rounded-lg font-medium
    bg-cyan-500 text-[#EAF2FF]
    transition-all duration-300
    hover:bg-cyan-600
    hover:shadow-[0_0_18px_rgba(13,148,136,0.8)]
    focus-visible:outline-none
    focus-visible:shadow-[0_0_22px_rgba(13,148,136,1)]
    flex items-center justify-center
  "
>
  Entrar
</NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
