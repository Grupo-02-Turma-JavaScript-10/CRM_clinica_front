import * as Icon from 'phosphor-react'

function DeletarEspecialidade() {
    // Dados mockados para exemplo visual
    const especialidade = {
        nome: "Cardiologia",
        descricao: "Cuidado especializado com o coração e sistema circulatório."
    }

    return (
        <div className="min-h-screen bg-[#0B1220] flex items-center justify-center p-4">
            <div className="w-full max-w-xl bg-[#111C2E] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Cabeçalho de Alerta */}
                <header className="py-6 px-10 bg-red-500/10 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/20">
                            <Icon.WarningOctagon size={24} weight="bold" className="text-red-500" />
                        </div>
                        <h1 className="text-xl font-black uppercase tracking-widest text-white">
                            Excluir Especialidade
                        </h1>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                </header>

                <div className="p-10 text-center">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-6" style={{ color: '#FFFFFF' }}>
                        Você tem certeza que deseja excluir?
                    </p>

                    {/* Card de Visualização da Especialidade a ser deletada */}
                    <div className="bg-[#0B1220]/60 border border-white/5 rounded-3xl p-6 mb-10">
                        <h2 className="text-2xl font-black text-white uppercase mb-2">
                            {especialidade.nome}
                        </h2>
                        <p className="text-sm text-white/60 leading-relaxed">
                            {especialidade.descricao}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Botão de Confirmação (Vermelho) */}
                        <button 
                            className="w-full py-5 bg-red-500 hover:bg-red-600 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_10px_20px_rgba(239,68,68,0.2)] hover:-translate-y-1 active:scale-[0.98]"
                        >
                            Sim, Confirmar Exclusão
                        </button>

                        {/* Botão Desistir (Com o seu estilo Turquesa) */}
                        <button 
                            type="button"
                            className="w-full py-5 text-white font-black text-sm uppercase tracking-[0.2em] transition-all hover:text-[#2DD4BF] hover:bg-[#2DD4BF]/5 rounded-2xl"
                        >
                            Não, Desistir e Voltar
                        </button>
                    </div>
                </div>

                {/* Detalhe de acabamento inferior */}
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            </div>
        </div>
    )
}

export default DeletarEspecialidade;