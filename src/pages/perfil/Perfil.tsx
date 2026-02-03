import React, { useMemo, useState } from "react";
import MedicoFoto from "../../assets/cardiologista.png";

type UserProfile = {
  id: string;
  nome: string;
  email: string;
  especialidade: string;
  photo?: string;
};

function Perfil({ user }: { user: UserProfile }) {
  const [imgOk, setImgOk] = useState(true);

  const initials = useMemo(() => {
    return user.nome
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");
  }, [user.nome]);

  return (
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
        max-w-2xl mx-auto   /* aumentei o card */
        font-[var(--font-sans)]
      "
    >
     
      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-100 rounded-t-[3rem]" />

  
      <div className="absolute -top-24 left-1/2 -translate-x-1/2">
        <div
          className="
            h-48 w-48   /* aumentei a foto */
            overflow-hidden
            rounded-[2.6rem]
            border-4 border-[#2DD4BF]
            bg-[var(--bg)]
            shadow-[0_0_45px_rgba(45,212,191,0.45)]
            scale-110
          "
        >
          {user.photo && imgOk ? (
            <img
              src={user.photo}
              alt={user.nome}
              className="h-full w-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-4xl font-black text-[var(--text)] font-[var(--font-display)]">
              {initials}
            </div>
          )}
        </div>
      </div>

     
      <div className="px-10 pb-14 text-center">
        <h3 className="text-3xl font-black tracking-tight text-[var(--text)] mb-2 font-[var(--font-display)]">
          {user.nome}
        </h3>

        <p className="text-base text-[var(--muted)] mb-3 font-[var(--font-sans)]">
          {user.email}
        </p>

        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2DD4BF] font-[var(--font-sans)]">
          {user.especialidade}
        </p>
      </div>
    </article>
  );
}

export default function PerfilPage() {
  const user: UserProfile = {
    id: "medico123",
    nome: "Dr. João Silva",
    email: "joao.silva@hospital.com",
    especialidade: "cardiologista",
    photo: MedicoFoto,
  };

  return (
    <div className="min-h-screen bg-transparent py-24 font-[var(--font-sans)]">
      <div className="mx-auto w-full max-w-[900px] px-6">
        <header className="text-center mb-30">
          <h1 className="text-5xl font-black text-[var(--text)] tracking-tighter mb-6 font-[var(--font-display)]">
            Meu <span className="text-[#2DD4BF]">Perfil</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 font-[var(--font-sans)]">
            Informações cadastradas no sistema
          </p>
        </header>

        <Perfil user={user} />
      </div>
    </div>
  );
}