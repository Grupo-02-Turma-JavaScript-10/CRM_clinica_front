import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Perfil() {
  const {usuario, handleLogout} = useContext(AuthContext)
  console.log(usuario)
  const navigate = useNavigate()
  useEffect(()=>{
    if(usuario.token === '') {
      navigate('/login')
    }
  }, [usuario.token])

  return (
    <div className="min-h-screen bg-transparent my-20 py-24 font-[var(--font-sans)]">
      <div className="mx-auto w-full max-w-[900px] px-6">

        <article
          className="
            relative
            overflow-visible
            rounded-[3rem]
            border border-[#2DD4BF]/30
            bg-[var(--surface)]
            pt-32
            transition-all duration-500
            shadow-[0_25px_60px_rgba(45,212,191,0.25)]
            max-w-2xl mx-auto
            font-[var(--font-sans)]
          "
        >
          {/* Linha superior decorativa */}
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-100 rounded-t-[3rem]" />

          {/* Foto de perfil */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <div
              className="
                h-48 w-48
                overflow-hidden
                rounded-[2.6rem]
                border-4 border-[#2DD4BF]
                bg-[var(--bg)]
                shadow-[0_0_45px_rgba(45,212,191,0.45)]
                scale-110
              "
            >
              <div className="grid h-full w-full place-items-center text-4xl font-black text-[var(--text)] font-[var(--font-display)]">
                <img src={usuario.foto} alt={usuario.nome} />
              </div>
            </div>
          </div>

          {/* Informações do perfil */}
          <div className="px-10 pb-14 text-center">
            <h3 className="text-3xl font-black tracking-tight text-[var(--text)] mb-2 font-[var(--font-display)]">
              {usuario.nome}
            </h3>

            <p className="text-base text-[var(--muted)] mb-3 font-[var(--font-sans)]">
              {usuario.usuario}
            </p>

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2DD4BF] font-[var(--font-sans)]">
              {usuario.especialidade.nome}
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Perfil