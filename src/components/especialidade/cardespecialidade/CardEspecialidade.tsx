import { Link } from "react-router-dom";
import {
  Tag,
  PencilLine,
  Trash,
} from "@phosphor-icons/react";

interface CardEspecialidadeProps {
  especialidade?: any;
}

function CardEspecialidade({ especialidade }: CardEspecialidadeProps) {
  if (!especialidade) return null;

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden
        rounded-[2.5rem]
        border border-[var(--accent)]/10
        bg-[var(--surface)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_0_50px_rgba(45,212,191,0.18)]
      "
    >
      {/* LINHA DE GLOW SUPERIOR */}
      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* HEADER */}
      <header className="py-4 px-8 bg-[var(--surface-2)]/40 border-b border-[var(--accent)]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag size={20} weight="bold" className="text-[var(--accent)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text)]">
            Especialidade #{especialidade.id}
          </span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="p-8 flex flex-col items-center text-center relative min-h-[220px] justify-center">
        {/* AURA TURQUESA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-32 h-32 bg-[var(--accent)]/10 blur-[45px] rounded-full" />
        </div>

        <h4 className="relative z-10 text-2xl font-black uppercase tracking-tight mb-3 text-[var(--text)]">
          {especialidade.nome}
        </h4>

        <p className="relative z-10 text-sm leading-relaxed text-[var(--muted)] max-w-sm">
          {especialidade.descricao ||
            "Nenhuma descrição informada para esta especialidade."}
        </p>
      </div>

      {/* AÇÕES */}
      <div className="flex border-t border-[var(--accent)]/10 bg-[var(--surface-2)]/40">
        <Link
          to={`/editarEspecialidade/${especialidade.id}`}
          className="
            flex-1 flex items-center justify-center gap-2 py-5
            text-[11px] font-black uppercase tracking-widest
            text-[var(--text)]
            transition-all duration-300
            hover:bg-[var(--accent)]
            hover:text-white
          "
        >
          <PencilLine size={18} weight="bold" />
          Editar
        </Link>

        <div className="w-px bg-[var(--accent)]/10" />

        <Link
          to={`/deletarEspecialidade/${especialidade.id}`}
          className="
            flex-1 flex items-center justify-center gap-2 py-5
            text-[11px] font-black uppercase tracking-widest
            text-[var(--text)]
            transition-all duration-300
            hover:bg-red-500/80
            hover:text-white
          "
        >
          <Trash size={18} weight="bold" />
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardEspecialidade;