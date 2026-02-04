import { useState } from "react";
import { CalendarPlus, CheckCircle } from "@phosphor-icons/react";

function ConsultaMedico() {
  const [pacienteInput, setPacienteInput] = useState("");
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

  const pacientes = ["Carlos Pereira", "Ana Oliveira", "João Mendes", "Maria Clara"];

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
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 transition-colors duration-500 font-[var(--font-sans)]">
      <div className="container mx-auto max-w-2xl">
       
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4 shadow-lg shadow-[var(--accent)]/5">
            <CalendarPlus size={32} weight="bold" />
          </div>

          <h1 className="text-4xl font-bold text-[var(--text)] tracking-tight font-[var(--font-display)]">
            Cadastro de <span className="text-cyan-500">Consulta</span>
          </h1>

          <p className="text-[var(--muted)] font-medium text-sm">
            Preencha os dados da consulta para continuar.
          </p>
        </div>

        <form
          className="bg-[var(--surface)] p-10 rounded-[2.5rem] border border-[var(--accent)]/10 relative overflow-hidden transition-all duration-500 font-[var(--font-sans)]"
          style={{
            boxShadow:
              "0 0 25px rgba(13, 148, 136, 0.5), 0 0 25px rgba(59, 130, 246, 0.5)",
          }}
        >
          <div className="space-y-6 relative z-10">
            
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
                  placeholder="Digite o nome do paciente"
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
                          className="px-4 py-2 cursor-pointer hover:bg-[var(--accent)]/10 text-[var(--text)]"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            </div>

            
            <div className="flex flex-col">
              <label className={labelStyle}>Data de Nascimento</label>
              <input type="date" className={inputStyle} />
            </div>

           
            <div className="flex flex-col">
              <label className={labelStyle}>Telefone</label>
              <input type="tel" placeholder="(XX) XXXXX-XXXX" className={inputStyle} />
            </div>

           
            <div className="flex flex-col">
              <label className={labelStyle}>E-mail</label>
              <input type="email" placeholder="exemplo@email.com" className={inputStyle} />
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
              <label className={labelStyle}>Descrição dos Sintomas</label>
              <textarea
                rows={4}
                className={`${inputStyle} resize-none`}
                placeholder="Descreva detalhadamente os sintomas..."
              />
            </div>

           
            <div className="pt-4">
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
                <CheckCircle size={24} weight="bold" />
                Confirmar Agendamento
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConsultaMedico;