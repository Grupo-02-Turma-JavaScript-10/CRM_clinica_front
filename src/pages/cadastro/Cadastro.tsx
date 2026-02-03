import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoa usando computador"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[var(--surface)]/80 flex flex-col justify-center p-12">
              <h2 className="text-4xl font-semibold mb-6 leading-tight text-[var(--text)]">
                Crie sua conta <br /> em poucos minutos
              </h2>

              <p className="text-lg max-w-md text-[var(--accent)]">
                Veja na prática como nossa plataforma pode transformar seu dia a
                dia e facilitar sua rotina.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <h3 className="text-2xl font-semibold mb-2 text-[var(--text)]">
              Cadastro de Usuário
            </h3>
            <p className="mb-8 text-[var(--accent)]">
              Preencha seus dados para continuar
            </p>

            <form className="space-y-6">
         
              <div>
                <label 
                  htmlFor="nome"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  className="
                    w-full px-4 py-3 rounded-lg border
                    bg-[var(--bg)] text-[var(--text)]
                    border-[var(--border)]
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
                <label 
                  htmlFor="dataNasc"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="dataNasc"
                  name="dataNasc"
                  className="
                    w-full px-4 py-3 rounded-lg border
                    bg-[var(--bg)] text-[var(--text)]
                    border-[var(--border)]
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
                <label 
                  htmlFor="usuario"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="usuario"
                  name="usuario"
                  placeholder="seu.email@exemplo.com"
                  className="
                    w-full px-4 py-3 rounded-lg border
                    bg-[var(--bg)] text-[var(--text)]
                    border-[var(--border)]
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
                <label 
                  htmlFor="senha"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Senha
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="senha"
                    name="senha"
                    placeholder="••••••••"
                    className="
                      w-full px-4 py-3 pr-12 rounded-lg border
                      bg-[var(--bg)] text-[var(--text)]
                      border-[var(--border)]
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

            
              <div>
                <label 
                  htmlFor="confirmarSenha"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Confirmar Senha
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="••••••••"
                    className="
                      w-full px-4 py-3 pr-12 rounded-lg border
                      bg-[var(--bg)] text-[var(--text)]
                      border-[var(--border)]
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

            
              <div>
                <label 
                  htmlFor="tema"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Especialidade
                </label>
                <select
                  id="tema"
                  name="tema"
                  className="
                    w-full px-4 py-3 rounded-lg border
                    bg-[var(--bg)] text-[var(--text)]
                    border-[var(--border)]
                    transition-all duration-300

                    hover:border-[var(--accent)]
                    hover:shadow-[0_0_14px_var(--accent)]

                    focus-visible:outline-none
                    focus-visible:border-[var(--accent)]
                    focus-visible:shadow-[0_0_18px_var(--accent)]
                  "
                >
                  <option value="" disabled selected>
                    Selecione uma Especialidade
                  </option>
                </select>
              </div>

              {/* Foto de perfil */}
              <div>
                <label 
                  htmlFor="foto"
                  className="block text-sm font-medium mb-1 text-[var(--text)]"
                >
                  Foto de Perfil
                </label>
                <input
                  type="file"
                  id="foto"
                  name="foto"
                  accept="image/*"
                  className="
                    w-full px-4 py-3 rounded-lg border
                    bg-[var(--bg)] text-[var(--text)]
                    border-[var(--border)]
                    transition-all duration-300

                    hover:border-[var(--accent)]
                    hover:shadow-[0_0_14px_var(--accent)]

                    focus-visible:outline-none
                    focus-visible:border-[var(--accent)]
                    focus-visible:shadow-[0_0_18px_var(--accent)]

                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-medium
                    file:bg-cyan-500 file:text-[#EAF2FF]
                    file:cursor-pointer
                    file:transition-all file:duration-300
                    hover:file:bg-cyan-600
                  "
                />
              </div>

              <button
              type="submit"
              className="
               w-full py-3 rounded-lg font-medium
               bg-cyan-500 text-[#EAF2FF]
               transition-all duration-300

              hover:bg-cyan-600
                 hover:shadow-[0_0_18px_rgba(13,148,136,0.8)]

               focus-visible:outline-none
               focus-visible:shadow-[0_0_22px_rgba(13,148,136,1)]
               "
               >
               Criar conta
                  </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
