import { Link } from 'react-router-dom'
import * as Icon from 'phosphor-react'

interface CardEspecialidadeProps {
    especialidade?: any;
}

function CardEspecialidade({ especialidade }: CardEspecialidadeProps) {
    return (
        <div className='group relative flex flex-col rounded-[2.5rem] border border-white/10 bg-[#111C2E] overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(45,212,191,0.15)] hover:-translate-y-2'>
            
            {/* LINHA DE GLOW SUPERIOR */}
            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

            <header className='py-4 px-8 bg-[#1e293b]/20 border-b border-white/5 flex items-center justify-between'>
                <div className="flex items-center gap-2">
                    {Icon.Tag && <Icon.Tag size={20} weight="bold" className="text-[#2DD4BF]" />}
                    <span className='text-[10px] font-black uppercase tracking-[0.2em]' style={{ color: '#FFFFFF' }}>
                        Especialidade #{especialidade.id}
                    </span>
                </div>
            </header>

            <div className='p-8 flex flex-col items-center text-center relative min-h-[220px] justify-center'>
                {/* AURA TURQUESA AO FUNDO */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#06B6D4]/10 blur-[40px] rounded-full pointer-events-none" />

                <h4 className='text-2xl font-black uppercase tracking-tight mb-3' style={{ color: '#FFFFFF' }}>
                    {especialidade.nome}
                </h4>
                
                <p className='text-sm leading-relaxed opacity-80' style={{ color: '#EAF2FF' }}>
                    {especialidade.descricao || 'Nenhuma descrição informada para esta especialidade.'}
                </p>
            </div>

            {/* BOTÕES COM TEXTO BRANCO PURO */}
            <div className="flex border-t border-white/5 bg-[#0B1220]/50">
                <Link 
                    to={`/editarEspecialidade/${especialidade.id}`} 
                    className='flex-1 flex items-center justify-center gap-2 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#06B6D4] transition-all duration-300'
                    style={{ color: '#FFFFFF' }}
                >
                    {Icon.PencilLine && <Icon.PencilLine size={18} weight="bold" color="#FFFFFF" />}
                    Editar
                </Link>

                <div className="w-px bg-white/10" />

                <Link 
                    to={`/deletarEspecialidade/${especialidade.id}`} 
                    className='flex-1 flex items-center justify-center gap-2 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-red-500/80 transition-all duration-300'
                    style={{ color: '#FFFFFF' }}
                >
                    {Icon.Trash && <Icon.Trash size={18} weight="bold" color="#FFFFFF" />}
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardEspecialidade