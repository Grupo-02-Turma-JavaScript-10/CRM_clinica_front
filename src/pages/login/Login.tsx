import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
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
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Pessoa trabalhando"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A2538]/80 flex flex-col justify-center p-12">
              <h2
                className="text-4xl font-semibold mb-6 leading-tight"
                style={{ color: "#EAF2FF" }}
              >
                Bem-vindo de volta
              </h2>
              <p className="text-lg max-w-md" style={{ color: "#06B6D4" }}>
                Acesse sua conta para continuar.
              </p>
            </div>
          </div>

          {/* LADO DIREITO - FORMULÁRIO */}
          <div className="font-sans p-8 sm:p-12 flex flex-col justify-center">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ color: "#EAF2FF" }}
            >
              Login
            </h3>
            <p className="mb-8" style={{ color: "#06B6D4" }}>
              Entre com seus dados
            </p>

            <form className="space-y-6">
              {/* EMAIL */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "#EAF2FF" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
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
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "#EAF2FF" }}
                >
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

              {/* OPÇÕES */}
              <div className="flex items-center justify-between text-sm">
                <label
                  className="flex items-center gap-2"
                  style={{ color: "#EAF2FF" }}
                >
                  <input
                    type="checkbox"
                    className="rounded border"
                    style={{ borderColor: "#0891B2" }}
                  />
                  Lembrar de mim
                </label>
                <a
                  href="#"
                  style={{ color: "#06B6D4" }}
                  className="hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium transition shadow-md"
                style={{
                  backgroundColor: "#06B6D4",
                  color: "#EAF2FF",
                  boxShadow: "0 0 12px #06B6D4",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0891B2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#06B6D4")
                }
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;