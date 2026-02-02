import { WarningOctagon, Trash } from "@phosphor-icons/react";

function DeletarEspecialidade() {
  // Dados para exemplo visual
  const especialidade = {
    nome: "Cardiologia",
    descricao: "Cuidado especializado com o coração e sistema circulatório.",
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-6 font-['Sora',_sans-serif] transition-colors duration-500">
      <div
        className="
          group w-full max-w-md
          rounded-[2rem]
          bg-[var(--surface)]
          border border-[var(--accent)]/10
          overflow-hidden
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
              "0 0 0 1px rgba(45,212,191,0.15), 0 0 40px rgba(45,212,191,0.10)",
            borderRadius: "2rem",
          }}
        />

        <header className="py-4 px-6 bg-red-500/10 border-b border-[var(--accent)]/10 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-500/20 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
              <WarningOctagon size={20} weight="bold" />
            </div>

            <h1 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--text)]">
              Excluir Especialidade
            </h1>
          </div>

          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
        </header>

        <div className="p-8 text-center relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-[var(--muted)]">
            Você tem certeza que deseja excluir?
          </p>

          <div className="bg-[var(--surface-2)]/60 border border-[var(--accent)]/10 rounded-2xl p-5 mb-8 backdrop-blur-sm">
            <h2 className="text-xl font-black text-[var(--text)] uppercase mb-2 tracking-tight">
              {especialidade.nome}
            </h2>

            <p className="text-xs text-[var(--muted)] leading-relaxed px-2">
              {especialidade.descricao}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="
                w-full py-4
                bg-red-500 hover:bg-red-600
                text-white
                text-xs font-black uppercase tracking-widest
                rounded-xl
                transition-all duration-300
                shadow-[0_8px_25px_rgba(239,68,68,0.35)]
                active:scale-95
                flex items-center justify-center gap-2
              "
            >
              <Trash size={18} weight="bold" />
              Confirmar Exclusão
            </button>

            <button
              type="button"
              className="
                w-full py-3
                text-[var(--muted)]
                font-bold text-[11px]
                uppercase tracking-[0.2em]
                rounded-xl
                transition-all duration-300
                hover:text-[var(--accent)]
                hover:bg-[var(--accent)]/10
                active:scale-[0.99]
                cursor-pointer
              "
            >
              Não, Desistir e Voltar
            </button>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>
    </div>
  );
}
export default DeletarEspecialidade;