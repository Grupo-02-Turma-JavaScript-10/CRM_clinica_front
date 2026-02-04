import { useState } from "react";
import { CalendarPlus, CheckCircle } from "@phosphor-icons/react";

function EditarConsulta() {
  const [pacienteInput, setPacienteInput] = useState("Carlos Pereira");
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);
  const [status, setStatus] = useState("em_andamento");

  const pacientes = [
    "Carlos Pereira",
    "Ana Oliveira",
    "João Mendes",
    "Maria Clara",
  ];

  const inputStyle = `
    w-full bg-[var(--bg)] border border-[var(--accent)]/20 rounded-2xl p-4
    font-[var(--font-sans)] text-[var(--text)]
    transition-all duration-300 placeholder:text-[var(--muted)]/40 appearance-none

    hover:border-[var(--accent)]
    hover:shadow-[0_0_14px_var(--accent)]

    focus-visible:outline-none
    focus-visible:border-[var(--accent)]
    focus-visible:shadow-[0_0_18px_var(--accent)]
  `;

  const labelStyle =
    "text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)] ml-2 mb-3 block font-[var(--font-sans)]";

  const pacientesFiltrados = pacientes.filter((p) =>
    p.toLowerCase().includes(pacienteInput.toLowerCase())
  );

  const selecionarPaciente = (nome) => {
    setPacienteInput(nome);
    setMostrarSugestoes(false);
  };

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 font-[var(--font-sans)]">
      <div className="container mx-auto max-w-2xl">
       
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4 shadow-lg shadow-[var(--accent)]/5">
            <CalendarPlus size={32} weight="bold" />
          </div>

          <h1 className="text-4xl font-bold text-[var(--text)]">
            Editar <span className="text-cyan-500">Consulta</span>
          </h1>

          <p className="text-[var(--muted)] text-sm">
            Atualize as informações da consulta
          </p>
        </div>

       
        <form
          className="bg-[var(--surface)] p-10 rounded-[2.5rem] border border-[var(--accent)]/10 space-y-6"
          style={{
            boxShadow:
              "0 0 25px rgba(13,148,136,0.5), 0 0 25px rgba(59,130,246,0.5)",
          }}
        >
          
          <div className="flex flex-col">
            <label className={labelStyle}>Paciente</label>
            <div className="relative">
              <input
                type="text"
                value={pacienteInput}
                onChange={(e) => {
                  setPacienteInput(e.target.value);
                  setMostrarSugestoes(true);
                }}
                className={inputStyle}
              />

              {mostrarSugestoes &&
                pacienteInput &&
                pacientesFiltrados.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-[var(--surface)] border border-[var(--accent)]/20 mt-2 shadow-lg max-h-40 overflow-y-auto z-20">
                    {pacientesFiltrados.map((p) => (
                      <li
                        key={p}
                        onClick={() => selecionarPaciente(p)}
                        className="px-4 py-2 cursor-pointer hover:bg-[var(--accent)]/10"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className={labelStyle}>Data da Consulta</label>
              <input type="date" className={inputStyle} />
            </div>

            <div className="flex flex-col">
              <label className={labelStyle}>Horário</label>
              <input type="time" className={inputStyle} />
            </div>
          </div>

         
          <div className="flex flex-col">
            <label className={labelStyle}>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={inputStyle}
            >
              <option value="em_andamento">Em andamento</option>
              <option value="realizado">Realizado</option>
            </select>
          </div>

         
          <div className="flex flex-col">
            <label className={labelStyle}>Descrição dos Sintomas</label>
            <textarea
              rows={4}
              className={`${inputStyle} resize-none`}
              placeholder="Descreva os sintomas..."
            />
          </div>

     
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg font-medium
              bg-cyan-500 text-[#EAF2FF]
              transition-all duration-300
              hover:bg-cyan-600
              hover:shadow-[0_0_18px_rgba(13,148,136,0.8)]
              focus-visible:outline-none
              focus-visible:shadow-[0_0_22px_rgba(13,148,136,1)]
              flex items-center justify-center gap-3
            "
          >
            <CheckCircle size={22} />
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarConsulta;
