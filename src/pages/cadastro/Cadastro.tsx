import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function CadastroMedico() {
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
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Pessoa usando computador"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[var(--surface)]/80 flex flex-col justify-center p-12">
                <h2 className="text-4xl font-semibold mb-6 leading-tight text-[var(--text)]">
                  Crie sua conta <br /> em poucos minutos
                </h2>

                <p className="text-lg max-w-md text-[var(--accent)]">
                  Veja na prática como nossa plataforma pode transformar seu dia
                  a dia e facilitar sua rotina.
                </p>
              </div>
            </div>

    
            <div className="p-8 sm:p-12 bg-[var(--surface)]/70 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--text)]">
                Cadastro de Médico
              </h3>
              <p className="mb-8 text-[var(--accent)]">
                Preencha seus dados para continuar
              </p>

              <form className="space-y-6">
              
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text)]">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
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
                  <label className="block text-sm font-medium mb-1 text-[var(--text)]">
                    Email (usuário)
                  </label>
                  <input
                    type="email"
                    placeholder="Seu melhor email"
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
                  <label className="block text-sm font-medium mb-1 text-[var(--text)]">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent)]"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

        
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text)]">
                    Foto
                  </label>
                  <input
                    type="file"
                    className="
                      w-full px-4 py-3 rounded-lg border
                      bg-[var(--bg)] text-[var(--text)]
                      border-[var(--border)]
                      transition-all duration-300
                      hover:border-[var(--accent)]
                      hover:shadow-[0_0_12px_var(--accent)]
                      focus-visible:outline-none
                      focus-visible:border-[var(--accent)]
                      focus-visible:shadow-[0_0_16px_var(--accent)]
                    "
                  />
                </div>

        
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text)]">
                    Especialidade
                  </label>
                  <select
                    className="
                      w-full px-4 py-3 rounded-lg border
                      bg-[var(--bg)] text-[var(--text)]
                      border-[var(--border)]
                      transition-all duration-300
                      hover:border-[var(--accent)]
                      hover:shadow-[0_0_12px_var(--accent)]
                      focus-visible:outline-none
                      focus-visible:border-[var(--accent)]
                      focus-visible:shadow-[0_0_16px_var(--accent)]
                    "
                  >
                    <option value="">Selecione uma especialidade</option>
                    <option>Cardiologia</option>
                    <option>Pediatria</option>
                    <option>Ortopedia</option>
                    <option>Dermatologia</option>
                  </select>
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
      </div>
    </section>
  );
}

export default CadastroMedico;
