import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);

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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoa usando computador"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[var(--surface)]/80 flex flex-col justify-center p-12">
              <h2
                className="text-4xl font-semibold mb-6 leading-tight"
                style={{ color: "var(--text)" }}
              >
                Crie sua conta <br /> em poucos minutos
              </h2>

              <p className="text-lg max-w-md" style={{ color: "var(--accent)" }}>
                Veja na prática como nossa plataforma pode transformar
                seu dia a dia e facilitar sua rotina.
              </p>
            </div>
          </div>

    
          <div className="font-sans p-8 sm:p-12">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ color: "var(--text)" }}
            >
              Cadastro de Usuário
            </h3>
            <p className="mb-8" style={{ color: "var(--accent)" }}>
              Preencha seus dados para continuar
            </p>

            <form className="space-y-6">
            
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--text)" }}
                >
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    boxShadow:
                      "0 0 8px rgba(13, 148, 136, 0.4), 0 0 8px rgba(59, 130, 246, 0.4)",
                  }}
                />
              </div>

             
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--text)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    boxShadow:
                      "0 0 8px rgba(13, 148, 136, 0.4), 0 0 8px rgba(59, 130, 246, 0.4)",
                  }}
                />
              </div>

     
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--text)" }}
                >
                  Usuário
                </label>
                <input
                  type="text"
                  placeholder="Nome de usuário"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    boxShadow:
                      "0 0 8px rgba(13, 148, 136, 0.4), 0 0 8px rgba(59, 130, 246, 0.4)",
                  }}
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
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "var(--border)",
                      boxShadow:
                        "0 0 8px rgba(13, 148, 136, 0.4), 0 0 8px rgba(59, 130, 246, 0.4)",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--accent)" }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--text)" }}
                >
                  Foto
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-3 rounded-lg border"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    boxShadow:
                      "0 0 6px rgba(13, 148, 136, 0.3), 0 0 6px rgba(59, 130, 246, 0.3)",
                  }}
                />
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