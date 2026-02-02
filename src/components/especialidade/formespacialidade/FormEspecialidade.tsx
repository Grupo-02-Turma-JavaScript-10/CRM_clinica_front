import {
  Tag,
  X,
} from "@phosphor-icons/react";

function FormEspecialidade() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 transition-colors duration-500 font-['Sora',_sans-serif]">

      <div className="w-full max-w-md bg-[var(--surface)] rounded-[2.5rem] border border-[var(--accent)]/10 overflow-hidden shadow-2xl transition-all duration-500">

        <header className="py-6 px-10 bg-[var(--surface-2)]/40 border-b border-[var(--accent)]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--accent)]/10 shadow-[0_0_12px_rgba(45,212,191,0.15)]">
              <Tag size={24} weight="bold" className="text-[var(--accent)]" />
            </div>

            <h1 className="text-xl font-black uppercase tracking-widest text-[var(--text)]">
              Nova Especialidade
            </h1>
          </div>

          <button className="p-2 hover:bg-[var(--accent)]/10 rounded-full transition-colors">
            <X size={22} className="text-[var(--muted)] hover:text-[var(--text)]" />
          </button>
        </header>

        <form
          className="p-8 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
 
          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] ml-1 text-[var(--accent)]">
              Nome da Especialidade
            </label>

            <input
              type="text"
              placeholder="Ex: Cardiologia"
              className="
                w-full bg-[var(--bg)]
                border border-[var(--accent)]/20
                rounded-xl py-3.5 px-6
                text-[var(--text)]
                outline-none
                transition-all
                placeholder:text-[var(--muted)]/40
                focus:border-[var(--accent)]
                focus:ring-1
                focus:ring-[var(--accent)]/40
                focus:shadow-[0_0_20px_rgba(45,212,191,0.2)]
              "
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] ml-1 text-[var(--accent)]">
              Descrição Curta
            </label>

            <textarea
              rows={4}
              placeholder="Descreva as principais atribuições desta especialidade..."
              className="
                w-full bg-[var(--bg)]
                border border-[var(--accent)]/20
                rounded-2xl py-3.5 px-6
                text-[var(--text)]
                outline-none
                resize-none
                transition-all
                placeholder:text-[var(--muted)]/40
                focus:border-[var(--accent)]
                focus:ring-1
                focus:ring-[var(--accent)]/40
                focus:shadow-[0_0_20px_rgba(45,212,191,0.2)]
              "
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="
                w-full py-5
                bg-[#2DD4BF] hover:bg-[#25b3a1]
                text-[#0B1220]
                font-black uppercase tracking-widest
                rounded-xl
                transition-all duration-300
                shadow-[0_10px_25px_rgba(45,212,191,0.35)]
                hover:-translate-y-1
                active:scale-[0.98]
              "
            >
              Cadastrar Especialidade
            </button>

            <button
              type="button"
              className="
                w-full py-5
                text-[var(--muted)]
                font-black text-sm uppercase tracking-[0.2em]
                transition-all
                hover:text-[var(--accent)]
                hover:bg-[var(--accent)]/10
                rounded-2xl
              "
            >
              Desistir e Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEspecialidade;
