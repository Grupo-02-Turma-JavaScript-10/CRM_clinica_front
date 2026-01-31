import { useState } from 'react'
import * as Icon from 'phosphor-react'
import CardEspecialidade from '../cardespecialidade/CardEspecialidade'

function ListaEspecialidades() {
    // Dados Mockados para teste visual
    const [especialidades] = useState([
        { id: 1, nome: 'Cardiologia', descricao: 'Cuidado especializado com o coração e sistema circulatório.' },
        { id: 2, nome: 'Ortopedia', descricao: 'Tratamento de lesões e doenças do sistema osteomuscular.' },
        { id: 3, nome: 'Clínico Geral', descricao: 'Atendimento primário e preventivo para todas as idades.' },
    ])

    return (
        <div className="min-h-screen bg-[#0B1220] p-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Cabeçalho da Página */}
                <header className="mb-12">
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                        Especialidades <span className="text-[#2DD4BF]">Médicas</span>
                    </h1>
                    <div className="h-1 w-20 bg-[#2DD4BF] rounded-full" />
                </header>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Botão Adicionar Especialidade (Tracejado) */}
                    <div className="border-2 border-dashed border-white/20 rounded-[2.5rem] flex flex-col items-center justify-center p-12 transition-all duration-300 cursor-pointer group hover:bg-white/5 hover:border-[#2DD4BF]/50 min-h-[350px]">
                        <div className="p-4 rounded-full bg-white/10 mb-4 group-hover:scale-110 group-hover:bg-[#2DD4BF]/20 transition-all">
                            <Icon.Plus size={32} className="text-white group-hover:text-[#2DD4BF]" />
                        </div>
                        <p className="font-black text-sm uppercase tracking-[0.2em]" style={{ color: '#FFFFFF' }}>
                            Adicionar Especialidade
                        </p>
                    </div>

                    {/* Renderização das Especialidades Mockadas */}
                    {especialidades.map((especialidade) => (
                        <CardEspecialidade key={especialidade.id} especialidade={especialidade} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ListaEspecialidades