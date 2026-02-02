import {
  CircleNotch,
  PlusCircle,
  Plus,
} from "@phosphor-icons/react";

import CardConsulta from "../cardconsulta/CardConsulta";

function ListaConsultas() {
  const consultasMock = [
    { id: 1, paciente: { nome: "Paciente 1" }, especialidade: { nome: "Cardiologia" }, data: "20/05/2026", hora: "14:30" },
    { id: 2, paciente: { nome: "Paciente 2" }, especialidade: { nome: "Ortopedia" }, data: "21/05/2026", hora: "09:00" },
    { id: 3, paciente: { nome: "Paciente 3" }, especialidade: { nome: "Clínico Geral" }, data: "22/05/2026", hora: "10:15" },
  ];

  return (
    <div className="min-h-screen bg-transparent pb-20 transition-colors duration-300">
      {/* ===== HEADER ===== */}
      <header className="relative pt-20 pb-16 mb-14 overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
        
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/10 blur-[140px] rounded-full opacity-60" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-5">
              
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] text-[var(--accent)] border border-[var(--accent)]/20 shadow-[0_0_18px_rgba(45,212,191,0.15)] font-[var(--font-sans)]">
                <CircleNotch size={16} className="animate-spin" />
                Sistema Live
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)] font-[var(--font-display)]">
                Painel de{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]">
                  Consultas
                </span>
              </h1>

              <p className="max-w-xl text-lg font-medium leading-relaxed text-[var(--muted)] font-[var(--font-sans)]">
                Gestão em tempo real de{" "}
                <span className="text-[var(--text)] font-semibold">agendamentos</span>{" "}
                e{" "}
                <span className="text-[var(--text)] font-semibold">pacientes</span>.
              </p>
            </div>

            <button
              type="button"
              className="
                group relative flex items-center justify-center gap-3
                rounded-[2rem] px-10 py-5
                font-black uppercase text-sm text-white
                bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]
                transition-all duration-300
                hover:scale-[1.05]
                hover:shadow-[0_12px_45px_rgba(45,212,191,0.45)]
                active:scale-95
                overflow-hidden
                font-[var(--font-sans)]
              "
            >
              <span className="absolute inset-0 bg-white/25 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-[2rem] blur-xl" />

              <PlusCircle size={24} weight="bold" className="relative z-10" />
              <span className="relative z-10 tracking-widest">
                Novo Agendamento
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {consultasMock.map((consulta) => (
            <CardConsulta key={consulta.id} consulta={consulta} />
          ))}
          
          <div
            className="
              min-h-[420px]
              rounded-[2.5rem]
              border-2 border-dashed border-[var(--border)]
              flex flex-col items-center justify-center
              cursor-pointer
              transition-all duration-500
              group
              hover:border-[var(--accent)]/50
              hover:bg-[var(--surface)]
              hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]
            "
          >
            <div
              className="
                p-4 mb-4 rounded-full
                bg-[var(--surface-2)]
                transition-all duration-500
                group-hover:scale-110
                group-hover:bg-[var(--accent)]/20
              "
            >
              <Plus size={32} className="text-[var(--muted)] group-hover:text-[var(--accent)]" />
            </div>

            <p className="font-black text-sm uppercase tracking-[0.2em] text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors font-[var(--font-sans)]">
              Adicionar Consulta
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListaConsultas;
