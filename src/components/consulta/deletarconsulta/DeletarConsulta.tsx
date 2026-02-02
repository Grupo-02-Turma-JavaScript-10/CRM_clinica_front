import { useNavigate } from "react-router-dom";
import { WarningCircle, Trash } from "@phosphor-icons/react";

function DeletarConsulta() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-transparent pt-24 pb-20 px-6 font-['Sora',_sans-serif] transition-all duration-500 overflow-hidden bg-[var(--bg)]">
      <div className="relative z-10 container mx-auto max-w-md">
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-red-500/10 text-red-500 mb-2 backdrop-blur-md border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <WarningCircle size={40} weight="bold" />
          </div>

          <h1 className="text-3xl font-bold text-[var(--text)] tracking-tight">
            Cancelar <span className="text-red-500/90">Agendamento</span>
          </h1>

          <p className="text-[var(--muted)] text-sm font-medium">
            Esta ação é irreversível e o horário será liberado no sistema.
          </p>
        </div>

        <div
          className="
            group relative overflow-hidden rounded-[2rem]
            border border-[var(--accent)]/10
            bg-[var(--surface)]
            shadow-2xl
            transition-all duration-500
            hover:-translate-y-1
          "
        >

          <div
            className="
              pointer-events-none absolute inset-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "
            style={{
              boxShadow:
                "0 0 0 1px rgba(45,212,191,0.18), 0 0 40px rgba(45,212,191,0.10)",
              borderRadius: "2rem",
            }}
          />

          <header className="py-4 px-6 border-b border-[var(--accent)]/10 bg-red-500/5 flex items-center justify-between relative z-10">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500/70">
              Confirmação de Cancelamento
            </span>

            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.55)]" />
          </header>

          <div className="p-6 space-y-5 relative z-10">
            <div className="bg-[var(--surface-2)]/60 p-5 rounded-2xl border border-[var(--accent)]/10 backdrop-blur-sm">
              <div className="flex flex-col mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-[var(--accent)] mb-1">
                  Paciente
                </span>
                <p className="text-lg font-bold text-[var(--text)]">
                  Nome do Paciente Exemplo
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--accent)]/10">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[var(--accent)] mb-1">
                    Data
                  </span>
                  <p className="text-[var(--muted)] font-bold text-sm">
                    20/05/2026
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[var(--accent)] mb-1">
                    Horário
                  </span>
                  <p className="text-[var(--muted)] font-bold text-sm">
                    14:30h
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-black uppercase tracking-[0.1em] py-4 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(239,68,68,0.28)] active:scale-95 flex items-center justify-center gap-2 text-xs">
                <Trash size={18} weight="bold" />
                Confirmar Exclusão
              </button>

              <button
                onClick={() => navigate("/consultas")}
                className="w-full py-3 text-[var(--muted)] font-bold text-[11px] uppercase tracking-[0.2em] rounded-xl transition-all duration-300 hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 active:scale-[0.99] cursor-pointer text-center"
              >
                DESISTIR E VOLTAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeletarConsulta;