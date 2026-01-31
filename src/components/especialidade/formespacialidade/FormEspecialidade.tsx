import * as Icon from 'phosphor-react'

function FormEspecialidade() {
    return (
        <div className="min-h-screen bg-[#0B1220] flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-[#111C2E] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Cabeçalho do Formulário */}
                <header className="py-6 px-10 bg-[#1e293b]/20 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#2DD4BF]/10">
                            <Icon.Tag size={24} weight="bold" className="text-[#2DD4BF]" />
                        </div>
                        <h1 className="text-xl font-black uppercase tracking-widest text-white">
                            Nova Especialidade
                        </h1>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <Icon.X size={24} className="text-white/50 hover:text-white" />
                    </button>
                </header>

                <form className="p-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Campo Nome */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] ml-1" style={{ color: '#FFFFFF' }}>
                            Nome da Especialidade
                        </label>
                        <div className="relative group">
                            <input 
                                type="text"
                                placeholder="Ex: Cardiologia"
                                className="w-full bg-[#0B1220] border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-[#2DD4BF] focus:shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-all placeholder:text-white/20"
                            />
                        </div>
                    </div>

                    {/* Campo Descrição */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] ml-1" style={{ color: '#FFFFFF' }}>
                            Descrição Curta
                        </label>
                        <textarea 
                            rows={4}
                            placeholder="Descreva as principais atribuições desta especialidade..."
                            className="w-full bg-[#0B1220] border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-[#2DD4BF] focus:shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-all resize-none placeholder:text-white/20"
                        />
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-col gap-4 pt-4">
                        <button 
                            type="submit"
                            className="w-full py-5 bg-[#2DD4BF] hover:bg-[#25b3a1] text-[#0B1220] font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_10px_20px_rgba(45,212,191,0.2)] hover:-translate-y-1 active:scale-[0.98]"
                        >
                            Cadastrar Especialidade
                        </button>

                        <button 
                            type="button"
                            className="w-full py-5 text-white font-black text-sm uppercase tracking-[0.2em] transition-all hover:text-[#2DD4BF] hover:bg-[#2DD4BF]/5 rounded-2xl"
                        >
                            Desistir e Voltar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEspecialidade;