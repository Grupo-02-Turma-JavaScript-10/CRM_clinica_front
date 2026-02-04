import { Link } from "react-router-dom";
import {
  Stethoscope,
  Calendar,
  Clock,
  PencilLine,
  Trash,
} from "@phosphor-icons/react";

interface CardConsultaProps {
  consulta?: any;
}

function CardConsulta({ consulta }: CardConsultaProps) {
  if (!consulta) return null;

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden
        rounded-[2.5rem]
        border-2 border-[var(--accent)]/10
        bg-[var(--surface)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[var(--accent)]/40
        hover:shadow-[0_20px_50px_rgba(45,212,191,0.15)]
      "
    >

      <div
        className="
          pointer-events-none absolute inset-0
          rounded-[2.5rem]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          z-[1]
        "
        style={{
          boxShadow: `
            0 0 0 1px rgba(45,212,191,0.45),
            0 0 55px rgba(45,212,191,0.35),
            0 25px 85px rgba(45,212,191,0.25)
          `,
        }}
      />
      <div className="h-1.5 w-full bg-[var(--grad)] opacity-60 group-hover:opacity-100 transition-opacity relative z-10" />

      <header className="py-4 px-8 bg-[var(--surface-2)]/50 backdrop-blur-md border-b border-[var(--accent)]/10 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Stethoscope size={20} weight="bold" className="text-[var(--accent)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--muted)]">
            Consulta #{consulta?.id || "0"}
          </span>
        </div>

        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
      </header>

      <div className="p-8 flex flex-col items-center text-center relative z-10">
        <div className="relative mb-4">
          {/* AVATAR */}
          <div
            className="
              w-24 h-24 rounded-[2rem]
              bg-[var(--bg)]
              border-2 border-[var(--accent)]
              flex items-center justify-center
              transition-all duration-500
              group-hover:scale-105
              group-hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]
            "
          >
            <span className="font-black text-3xl uppercase text-[var(--text)]">
              {consulta?.paciente?.nome?.charAt(0) || "P"}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-[var(--accent)] font-black uppercase tracking-[0.2em] mb-1">
          {consulta?.especialidade?.nome || "Especialidade"}
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-6 text-[var(--text)]">
          {consulta?.paciente?.nome || "Paciente Exemplo"}
        </h2>

        <div
          className="
            w-full flex items-center gap-2 p-1.5
            rounded-2xl
            bg-[var(--surface-2)]/50
            border border-[var(--accent)]/10
            backdrop-blur-sm
            transition-all duration-500
            group-hover:border-[var(--accent)]/40
          "
        >
          <div className="flex-1 flex items-center justify-center gap-2 py-2.5 font-bold text-[11px] text-[var(--text)]">
            <Calendar size={18} className="text-[var(--accent)]" />
            {consulta?.data || "00/00/00"}
          </div>

          <div className="w-px h-4 bg-[var(--accent)]/20" />

          <div className="flex-1 flex items-center justify-center gap-2 py-2.5 font-bold text-[11px] text-[var(--text)]">
            <Clock size={18} className="text-[var(--accent)]" />
            {consulta?.hora || "00:00"}h
          </div>
        </div>
      </div>

      <div className="flex border-t border-[var(--accent)]/10 bg-[var(--surface-2)]/30 relative z-10">
        <Link
          to={`/editarConsulta/${consulta?.id}`}
          className="
            flex-1 flex items-center justify-center gap-2 py-5
            text-[11px] font-black uppercase tracking-widest
            text-[var(--muted)]
            transition-all duration-300
            hover:bg-[var(--accent)]
            hover:text-white
            border-r border-[var(--accent)]/10
          "
        >
          <PencilLine size={18} weight="bold" />
          Editar
        </Link>

        <Link
          to={`/deletarConsulta/${consulta?.id}`}
          className="
            flex-1 flex items-center justify-center gap-2 py-5
            text-[11px] font-black uppercase tracking-widest
            text-[var(--muted)]
            transition-all duration-300
            hover:bg-red-500
            hover:text-white
          "
        >
          <Trash size={18} weight="bold" />
          Cancelar
        </Link>
      </div>
    </div>
  );
}
export default CardConsulta;