import * as Icon from 'phosphor-react';

function FormConsulta() {
  // Estilos reutilizáveis para manter o padrão High-Tech
  const inputStyle = "w-full bg-[#0B1220] border border-white/10 rounded-2xl p-4 text-[#EAF2FF] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all placeholder:text-white/20";
  const labelStyle = "text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82F6] ml-2 mb-2 block";

  return (
    <div className="min-h-screen bg-[#0B1220] pt-24 pb-20 px-6 font-['Sora',_sans-serif]">
      <div className="container mx-auto max-w-2xl">
        
        {/* CABEÇALHO DO FORMULÁRIO */}
        <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] mb-4">
                <Icon.CalendarPlus size={32} weight="bold" />
            </div>
            <h1 className="text-4xl font-bold text-[#EAF2FF] tracking-tight">
                Agendar <span className="text-[#3B82F6]">Consulta</span>
            </h1>
            <p className="text-[#EAF2FF]/40 font-medium">Preencha os dados técnicos para o novo atendimento.</p>
        </div>

        {/* BOX DO FORMULÁRIO */}
        <form className="bg-[#111C2E] p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* EFEITO DE LUZ AO FUNDO */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3B82F6]/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#06B6D4]/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="space-y-6 relative z-10">
            
            {/* SELEÇÃO DE PACIENTE */}
            <div className="group">
              <label className={labelStyle}>Paciente</label>
              <select className={inputStyle}>
                <option value="" disabled selected>Selecione o paciente cadastrado</option>
                <option className="bg-[#111C2E]">Paciente Exemplo 01</option>
                <option className="bg-[#111C2E]">Paciente Exemplo 02</option>
              </select>
            </div>

            {/* SELEÇÃO DE ESPECIALIDADE */}
            <div className="group">
              <label className={labelStyle}>Especialidade Médica</label>
              <select className={inputStyle}>
                <option value="" disabled selected>Defina a área de atendimento</option>
                <option className="bg-[#111C2E]">Cardiologia</option>
                <option className="bg-[#111C2E]">Ortopedia</option>
              </select>
            </div>

            {/* GRID DATA E HORA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className={labelStyle}>Data da Consulta</label>
                <input type="date" className={inputStyle} />
              </div>
              <div className="group">
                <label className={labelStyle}>Horário</label>
                <input type="time" className={inputStyle} />
              </div>
            </div>

            {/* DESCRIÇÃO DE SINTOMAS */}
            <div className="group">
              <label className={labelStyle}>Descrição dos Sintomas</label>
              <textarea 
                rows={4} 
                className={`${inputStyle} resize-none`} 
                placeholder="Descreva detalhadamente o quadro do paciente..." 
              />
            </div>

            {/* BOTÃO DE AÇÃO */}
            <div className="pt-4">
                <button 
                  type="button"
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-black uppercase tracking-[0.2em] py-5 rounded-[1.5rem] transition-all duration-300 shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  <Icon.CheckCircle size={24} weight="bold" />
                  Confirmar Agendamento
                </button>
                
                <button 
                  type="button"
                  className="w-full mt-4 text-[#EAF2FF]/30 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors py-2"
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