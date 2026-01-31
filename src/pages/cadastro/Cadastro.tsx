import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="font-sans min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#0B1220" }} // fundo escuro
    >
      {/* Card */}
      <div
        className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl"
        style={{
          backgroundColor: "#1A2538", // mais claro que o fundo
          boxShadow: "0 0 25px #06B6D4", // profundidade cyan
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LADO ESQUERDO - IMAGEM */}
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Pessoa usando computador"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#1A2538]/80 flex flex-col justify-center p-12">
              <h2 className="text-4xl font-semibold mb-6 leading-tight" style={{ color: "#EAF2FF" }}>
                Crie sua conta <br /> em poucos minutos
              </h2>

              <p className="text-lg max-w-md" style={{ color: "#06B6D4" }}>
                Veja na prática como nossa plataforma pode transformar
                seu dia a dia e facilitar sua rotina.
              </p>
            </div>
          </div>

          {/* LADO DIREITO - FORMULÁRIO */}
          <div className="font-sans p-8 sm:p-12">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "#EAF2FF" }}>
              Cadastro de Usuário
            </h3>
            <p className="mb-8" style={{ color: "#06B6D4" }}>
              Preencha seus dados para continuar
            </p>

            <form className="space-y-6">

              {/* NOME */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#EAF2FF" }}>
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#0B1220",
                    color: "#EAF2FF",
                    borderColor: "#0891B2", // cyan mais escuro
                  }}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#EAF2FF" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#0B1220",
                    color: "#EAF2FF",
                    borderColor: "#0891B2",
                  }}
                />
              </div>

              {/* USUÁRIO */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#EAF2FF" }}>
                  Usuário
                </label>
                <input
                  type="text"
                  placeholder="Nome de usuário"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#0B1220",
                    color: "#EAF2FF",
                    borderColor: "#0891B2",
                  }}
                />
              </div>

              {/* SENHA COM OLHINHO */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#EAF2FF" }}>
                  Senha
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "#0B1220",
                      color: "#EAF2FF",
                      borderColor: "#0891B2",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "#06B6D4" }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* FOTO */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#EAF2FF" }}>
                  Foto
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-3 rounded-lg border"
                  style={{
                    backgroundColor: "#0B1220",
                    color: "#EAF2FF",
                    borderColor: "#0891B2",
                  }}
                />
              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium transition shadow-md"
                style={{
                  backgroundColor: "#06B6D4", // cyan premium
                  color: "#EAF2FF",           // texto claro
                  boxShadow: "0 0 12px #06B6D4", // glow cyan
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0891B2")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#06B6D4")}
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