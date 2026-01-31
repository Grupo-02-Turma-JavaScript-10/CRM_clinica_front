import * as Icon from 'phosphor-react'
import CardConsulta from '../cardconsulta/CardConsulta'

function ListaConsultas() {
    // Dados fictícios apenas para visualização da estilização
    const consultasMock = [
        { id: 1, paciente: { nome: 'Paciente 1' }, especialidade: { nome: 'Cardiologia' }, data: '20/05/2026', hora: '14:30' },
        { id: 2, paciente: { nome: 'paciente 2' }, especialidade: { nome: 'Ortopedia' }, data: '21/05/2026', hora: '09:00' },
        { id: 3, paciente: { nome: 'paciente 3' }, especialidade: { nome: 'Clínico Geral' }, data: '22/05/2026', hora: '10:15' },
    ];

    return (
        <div className="min-h-screen bg-[#0B1220] pb-20 font-['Sora',_sans-serif]">
            
            {/* HEADER DA PÁGINA */}
            <header className="relative bg-[#111C2E] border-b border-white/5 pt-20 pb-16 mb-12 overflow-hidden">
                {/* Efeito de luz ambiente ao fundo */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#3B82F6]/5 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3B82F6]/5 blur-[120px] rounded-full" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#3B82F6] border border-[#3B82F6]/20">
                                <Icon.CircleNotch size={16} className="animate-spin" />
                                Sistema Live
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-[#EAF2FF] tracking-tight">
                                Painel de <span className="text-[#3B82F6]">Consultas</span>
                            </h1>
                            <p className="text-[#EAF2FF]/40 max-w-xl text-lg font-medium">
                                Gestão em tempo real de agendamentos e pacientes.
                            </p>
                        </div>

                        {/* BOTÃO DE AÇÃO PRINCIPAL */}
                        <button className="group flex items-center justify-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-5 px-10 rounded-[2rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] active:scale-95">
                            <Icon.PlusCircle size={24} weight="bold" />
                            <span className="tracking-wide">Novo Agendamento</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* GRID DE CONTEÚDO */}
            <main className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Mapeamento dos cards estilizados */}
                    {consultasMock.map((consulta) => (
                        <CardConsulta key={consulta.id} consulta={consulta} />
                    ))}

                    {/* SLOT VAZIO (OPCIONAL: APENAS PARA DESIGN) */}
                    <div className="border-2 border-dashed border-white/20 rounded-[2.5rem] flex flex-col items-center justify-center p-12 transition-all duration-300 cursor-pointer group hover:bg-white/5 hover:border-[#2DD4BF]/50">
    <div className="p-4 rounded-full bg-white/10 mb-4 group-hover:scale-110 group-hover:bg-[#2DD4BF]/20 transition-all">
        {/* Ícone agora brilha em Turquesa no hover */}
        <Icon.Plus size={32} className="text-white group-hover:text-[#2DD4BF]" />
    </div>
    
    {/* Texto em Branco Puro e nome alterado */}
    <p className="text-white font-black text-sm uppercase tracking-[0.2em]">
        Adicionar Consulta
    </p>
</div>
                </div>
            </main>
        </div>
    )
}

export default ListaConsultas;