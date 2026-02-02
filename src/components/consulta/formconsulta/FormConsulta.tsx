import {
  CalendarPlus,
  CaretDown,
  CheckCircle,
} from "@phosphor-icons/react";

function FormConsulta() {

  const inputStyle =
    "w-full bg-[var(--bg)] border border-[var(--accent)]/20 rounded-2xl p-4 text-[var(--text)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/50 outline-none transition-all placeholder:text-[var(--muted)]/40 appearance-none";

  const labelStyle =
    "text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)] ml-2 mb-3 block";

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 font-['Sora',_sans-serif] transition-colors duration-500">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4 shadow-lg shadow-[var(--accent)]/5">
            <CalendarPlus size={32} weight="bold" />
          </div>

          <h1 className="text-4xl font-bold text-[var(--text)] tracking-tight">
            Agendar <span className="text-[var(--accent)]">Consulta</span>
          </h1>

          <p className="text-[var(--muted)] font-medium text-sm">
            Preencha os dados técnicos para o novo atendimento.
          </p>
        </div>

        <form className="bg-[var(--surface)] p-10 rounded-[2.5rem] border border-[var(--accent)]/10 shadow-2xl relative overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent)]/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--accent)]/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex flex-col">
              <label className={labelStyle}>Paciente</label>
              <div className="relative">
                <select className={inputStyle} defaultValue="">
                  <option value="" disabled>
                    Selecione o paciente cadastrado
                  </option>
                  <option className="bg-[var(--surface)]">Paciente Exemplo 01</option>
                  <option className="bg-[var(--surface)]">Paciente Exemplo 02</option>
                </select>

                <CaretDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className={labelStyle}>Especialidade Médica</label>
              <div className="relative">
                <select className={inputStyle} defaultValue="">
                  <option value="" disabled>
                    Defina a área de atendimento
                  </option>
                  <option className="bg-[var(--surface)]">Cardiologia</option>
                  <option className="bg-[var(--surface)]">Ortopedia</option>
                </select>

                <CaretDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"
                />
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
              <label className={labelStyle}>Descrição dos Sintomas</label>
              <textarea
                rows={4}
                className={`${inputStyle} resize-none`}
                placeholder="Descreva detalhadamente o quadro do paciente..."
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="
                  w-full
                  bg-[#2DD4BF] hover:bg-[#25b3a1]
                  text-[#0B1220]
                  font-black uppercase tracking-[0.2em]
                  py-5 rounded-[1.5rem]
                  transition-all duration-300
                  shadow-lg shadow-[#2DD4BF]/20
                  hover:shadow-[#2DD4BF]/40
                  hover:-translate-y-1
                  active:scale-95
                  flex items-center justify-center gap-3
                "
              >
                <CheckCircle size={24} weight="bold" />
                Confirmar Agendamento
              </button>

              <button
                type="button"
                className="w-full mt-4 py-3 text-[var(--muted)] font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:text-red-500 hover:bg-red-500/10 active:scale-[0.99] cursor-pointer"
              >
                Cancelar Operação
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormConsulta;