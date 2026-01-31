import * as Icon from 'phosphor-react';
import { useNavigate } from 'react-router-dom'; // Importante para a navegação

function DeletarConsulta() {
    const navigate = useNavigate(); // Hook para redirecionar

    return (
        <div className="min-h-screen bg-[#0B1220] pt-32 pb-20 px-6 font-['Sora',_sans-serif]">
            <div className="container mx-auto max-w-lg">
                
                {/* CABEÇALHO DE ALERTA - Vermelho mais suave */}
                <div className="text-center mb-10 space-y-4">
                    <div className="inline-flex items-center justify-center p-4 rounded-[2rem] bg-red-900/20 text-red-400 mb-2">
                        <Icon.WarningCircle size={48} weight="bold" />
                    </div>
                    <h1 className="text-4xl font-bold text-[#EAF2FF] tracking-tight">
                        Cancelar <span className="text-red-500/80">Agendamento</span>
                    </h1>
                    <p className="text-[#EAF2FF]/40 font-medium">
                        Esta ação é irreversível. O horário voltará a ficar disponível para outros pacientes.
                    </p>
                </div>

                {/* CARD DE CONFIRMAÇÃO */}
                <div className="bg-[#111C2E] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden relative">
                    
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />

                    <header className="py-5 px-8 bg-red-500/5 border-b border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-black text-red-400/60 uppercase tracking-[0.3em]">
                            Confirmação de Exclusão
                        </span>
                        <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    </header>

                    <div className="p-8 space-y-6 relative z-10">
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#3B82F6] mb-1">Paciente</span>
                                <p className="text-xl font-bold text-[#EAF2FF]">Nome do Paciente Exemplo</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#3B82F6] mb-1">Data</span>
                                    <p className="text-[#EAF2FF]/80 font-bold">20/05/2026</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#3B82F6] mb-1">Horário</span>
                                    <p className="text-[#EAF2FF]/80 font-bold">14:30h</p>
                                </div>
                            </div>
                        </div>

                        {/* BOTÕES DE AÇÃO - Vermelho ajustado e lógica de Voltar */}
                        <div className="flex flex-col gap-3 pt-6">
                            <button 
                                className="w-full bg-red-600/80 hover:bg-red-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-[1.5rem] transition-all duration-300 shadow-[0_10px_20px_rgba(220,38,38,0.2)] hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3"
                            >
                                <Icon.Trash size={22} weight="bold" />
                                Confirmar Exclusão
                            </button>

                            {/* Botão Cancelar com redirecionamento */}
                           <button 
    onClick={() => navigate('/consultas')}
    className="w-full py-4 text-white font-bold text-base uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer 
               hover:text-[#2DD4BF] hover:bg-[#2DD4BF]/5 hover:shadow-[0_0_20px_rgba(45,212,191,0.1)] rounded-xl"
>
    DESISTIR E VOLTAR
</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarConsulta;