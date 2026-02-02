import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

import CardEspecialidade from "../cardespecialidade/CardEspecialidade";

function ListaEspecialidades() {
  const [especialidades] = useState([
    { id: 1, nome: "Cardiologia", descricao: "Cuidado especializado com o coração e sistema circulatório." },
    { id: 2, nome: "Ortopedia", descricao: "Tratamento de lesões e doenças do sistema osteomuscular." },
    { id: 3, nome: "Clínico Geral", descricao: "Atendimento primário e preventivo para todas as idades." },
  ]);

  return (
    <div className="min-h-screen bg-transparent p-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-black uppercase tracking-tighter mb-2 text-[var(--text)] font-[var(--font-display)]">
            Especialidades <span className="text-[var(--accent)]">Médicas</span>
          </h1>
          <div className="h-1 w-20 bg-[var(--accent)] rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="
              min-h-[350px]
              rounded-[2.5rem]
              border-2 border-dashed border-[var(--border)]
              flex flex-col items-center justify-center p-12
              cursor-pointer
              transition-all duration-500
              group
              hover:bg-[var(--surface)]
              hover:border-[var(--accent)]/50
              hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]
            "
          >
            <div
              className="
                p-4 rounded-full
                bg-[var(--surface-2)]
                mb-4
                transition-all duration-500
                group-hover:scale-110
                group-hover:bg-[var(--accent)]/20
              "
            >
              <Plus size={32} className="text-[var(--muted)] group-hover:text-[var(--accent)]" />
            </div>

            <p className="font-black text-sm uppercase tracking-[0.2em] text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors font-[var(--font-sans)]">
              Adicionar Especialidade
            </p>
          </div>

          {especialidades.map((especialidade) => (
            <CardEspecialidade key={especialidade.id} especialidade={especialidade} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaEspecialidades;
