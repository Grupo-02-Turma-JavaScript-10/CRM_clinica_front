import { Link } from 'react-router-dom'
import * as Icon from 'phosphor-react' 

interface CardConsultaProps {
    consulta?: any;
}

function CardConsulta({ consulta }: CardConsultaProps) {
    if (!consulta) return null;

    return (
        <div className='group relative flex flex-col rounded-[2.5rem] border border-white/10 bg-[#111C2E] overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(45,212,191,0.15)] hover:-translate-y-2'>
            
            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

            <header className='py-4 px-8 bg-[#1e293b]/20 border-b border-white/5 flex items-center justify-between'>
                <div className="flex items-center gap-2">
                    {Icon.Stethoscope && <Icon.Stethoscope size={20} weight="bold" className="text-[#2DD4BF]" />}
                    <span className='text-[10px] font-black uppercase tracking-[0.2em]' style={{ color: '#FFFFFF' }}>
                        Consulta #{consulta?.id || '0'}
                    </span>
                </div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                </div>
            </header>

            <div className='p-8 flex flex-col items-center text-center relative'>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#06B6D4]/10 blur-[40px] rounded-full pointer-events-none" />

                <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-[2rem] bg-[#0B1220] border-2 border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.3)] flex items-center justify-center relative z-10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <span className="font-black text-3xl uppercase" style={{ color: '#FFFFFF' }}>
                            {consulta?.paciente?.nome?.charAt(0) || 'P'}
                        </span>
                    </div>
                </div>

                <p className='text-[11px] text-[#06B6D4] font-black uppercase tracking-[0.2em] mb-1'>
                    {consulta?.especialidade?.nome || 'Especialidade'}
                </p>
                <h2 className='text-2xl font-bold tracking-tight mb-6' style={{ color: '#FFFFFF' }}>
                    {consulta?.paciente?.nome || 'Paciente Exemplo'}
                </h2>

                <div className='w-full flex items-center gap-2 p-1.5 bg-[#0B1220]/60 rounded-2xl border border-white/5'>
                    <div className='flex-1 flex items-center justify-center gap-2 py-2.5 font-bold text-[11px]' style={{ color: '#FFFFFF' }}>
                        {Icon.Calendar && <Icon.Calendar size={18} className="text-[#2DD4BF]" />}
                        {consulta?.data || '00/00/00'}
                    </div>
                    <div className='w-px h-4 bg-white/10' />
                    <div className='flex-1 flex items-center justify-center gap-2 py-2.5 font-bold text-[11px]' style={{ color: '#FFFFFF' }}>
                        {Icon.Clock && <Icon.Clock size={18} className="text-[#2DD4BF]" />}
                        {consulta?.hora || '00:00'}h
                    </div>
                </div>
            </div>

            {/* RODAPÉ - FORÇANDO BRANCO PURO VIA STYLE */}
            <div className="flex border-t border-white/5 bg-[#0B1220]/50">
                <Link to={`/editarConsulta/${consulta?.id}`} 
                    className='flex-1 flex items-center justify-center gap-2 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#06B6D4] transition-all duration-300'
                    style={{ color: '#FFFFFF' }}>
                    {Icon.PencilLine && <Icon.PencilLine size={18} weight="bold" color="#FFFFFF" />}
                    Editar
                </Link>

                <div className="w-px bg-white/10" />

                <Link to={`/deletarConsulta/${consulta?.id}`} 
                    className='flex-1 flex items-center justify-center gap-2 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-red-500/80 transition-all duration-300'
                    style={{ color: '#FFFFFF' }}>
                    {Icon.Trash && <Icon.Trash size={18} weight="bold" color="#FFFFFF" />}
                    Cancelar
                </Link>
            </div>
        </div>
    )
}

export default CardConsulta;