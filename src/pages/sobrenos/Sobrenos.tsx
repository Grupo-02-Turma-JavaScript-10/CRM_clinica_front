import React, { useMemo, useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  UsersThree,
  Target,
  Eye,
  Star,
} from "@phosphor-icons/react";

import PamelaFoto from "../../assets/team/PamelaFoto.jpg";
import KaliFoto from "../../assets/team/KaliFoto.jpg";
import KarolFoto from "../../assets/team/KarolFoto.jpg";
import LiviaFoto from "../../assets/team/LiviaFoto.jpg";
import EduFoto from "../../assets/team/EduFoto.jpg";
import AlanFoto from "../../assets/team/AlanFoto.jpg";

type Badge = "P.O" | "DEV" | "TESTER";

type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  photo?: string;
  badge?: Badge;
};

function BadgeTag({ badge }: { badge?: Badge }) {
  if (!badge) return null;
  const accent = "var(--accent)";

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black tracking-widest uppercase font-[var(--font-sans)]"
      style={{
        borderColor: `${accent}44`,
        backgroundColor: `${accent}15`,
        color: accent,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full animate-pulse"
        style={{ backgroundColor: accent }}
      />
      {badge}
    </span>
  );
}

function TeamCard({ member }: { member: Member }) {
  const [imgOk, setImgOk] = useState(true);

  const initials = useMemo(() => {
    return member.name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");
  }, [member.name]);

  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-[var(--accent)]/10 bg-[var(--surface)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(45,212,191,0.15)]">
      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

      <header className="relative h-24 w-full border-b border-[var(--accent)]/5 bg-[var(--surface-2)]/30">
        <div className="absolute left-6 top-6">
          <BadgeTag badge={member.badge} />
        </div>
      </header>

      <div className="relative px-8 pb-10 flex flex-col items-center">
        <div className="relative -top-12 h-28 w-28 overflow-hidden rounded-[2.5rem] border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_10px_25px_rgba(45,212,191,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(45,212,191,0.4)]">
          {member.photo && imgOk ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-3xl font-black text-[var(--text)] font-[var(--font-display)]">
              {initials}
            </div>
          )}
        </div>

        <div className="text-center -mt-6">
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] mb-1 font-[var(--font-display)]">
            {member.name}
          </h3>

          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-4 font-[var(--font-sans)]">
            {member.role}
          </p>

          <p className="text-sm leading-relaxed text-[var(--muted)] min-h-[60px] font-[var(--font-sans)]">
            {member.bio}
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--accent)]/10 text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all shadow-sm"
            >
              <GithubLogo size={20} weight="bold" />
            </a>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--accent)]/10 text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all shadow-sm"
            >
              <LinkedinLogo size={20} weight="bold" />
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-[10px] text-[var(--muted)]/40 uppercase tracking-[0.4em] font-[var(--font-sans)]">
            <span className="h-1 w-3 rounded-full bg-[var(--accent)]" />
            TIME CRMed
          </div>
        </div>
      </div>
    </article>
  );
}

function FlipCard({ item }: { item: any }) {
  return (
    <div className="group h-[320px] w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
        <div className="absolute inset-0 rounded-[2.5rem] border border-[var(--accent)]/10 bg-[var(--surface)] flex flex-col items-center justify-center p-8 text-center [backface-visibility:hidden] shadow-xl">
          <div className="w-20 h-20 rounded-[1.5rem] bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 shadow-[0_10px_20px_rgba(45,212,191,0.1)]">
            {item.icon}
          </div>
          <h3 className="text-2xl font-black text-[var(--text)] uppercase tracking-tighter font-[var(--font-display)]">
            {item.title}
          </h3>
          <div className="mt-4 h-1 w-10 bg-[var(--accent)]/40 rounded-full" />
        </div>

        {/* VERSO */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-[var(--accent)]/30 bg-[var(--bg)] flex items-center justify-center p-10 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl">
          <p className="text-lg leading-relaxed text-[var(--text)] font-medium italic font-[var(--font-sans)]">
            "{item.text}"
          </p>
        </div>
      </div>
    </div>
  );
}

export function SobrePage() {
  const team: Member[] = [
    {
      id: "karol",
      name: "Karol",
      role: "P.O & Front-end",
      badge: "P.O",
      bio: "Estrategista de produto focado em escalabilidade.",
      github: "#",
      linkedin: "#",
      photo: KarolFoto,
    },
    {
      id: "pam",
      name: "Pâmela Desirée",
      role: "Front-end Dev",
      badge: "DEV",
      bio: "Especialista em UI/UX e interfaces de alta fidelidade.",
      github: "#",
      linkedin: "#",
      photo: PamelaFoto,
    },
    {
      id: "alan",
      name: "Alan",
      role: "Front-end Dev",
      badge: "DEV",
      bio: "Focado em experiência do usuário e acessibilidade.",
      github: "#",
      linkedin: "#",
      photo: AlanFoto,
    },
    {
      id: "edu",
      name: "Edu",
      role: "Back-end Dev",
      badge: "DEV",
      bio: "Expert em arquitetura de dados e APIs robustas.",
      github: "#",
      linkedin: "#",
      photo: EduFoto,
    },
    {
      id: "livia",
      name: "Lívia",
      role: "Back-end Dev",
      badge: "DEV",
      bio: "Garante a segurança e performance do nosso core.",
      github: "#",
      linkedin: "#",
      photo: LiviaFoto,
    },
    {
      id: "kali",
      name: "Kali",
      role: "QA Tester",
      badge: "TESTER",
      bio: "O olhar crítico que garante a perfeição da entrega.",
      github: "#",
      linkedin: "#",
      photo: KaliFoto,
    },
  ];

  const identity = [
    {
      id: "missao",
      title: "Missão",
      icon: <Target size={40} weight="bold" />,
      text: "Otimizar a gestão médica com tecnologia de ponta para priorizar o cuidado ao paciente.",
    },
    {
      id: "visao",
      title: "Visão",
      icon: <Eye size={40} weight="bold" />,
      text: "Ser a plataforma de gestão médica mais confiável e inovadora do país.",
    },
    {
      id: "valores",
      title: "Valores",
      icon: <Star size={40} weight="bold" />,
      text: "Segurança absoluta, evolução constante e transparência total.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent py-20 transition-colors duration-500">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <header className="text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-5 py-2 text-[10px] font-black text-[var(--accent)] uppercase tracking-[0.3em] mb-8 font-[var(--font-sans)]">
            <UsersThree size={18} weight="bold" />
            Nossa Identidade
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-[var(--text)] tracking-tighter mb-6 font-[var(--font-display)]">
            O coração do <span className="text-[var(--accent)]">CRMed</span>
          </h1>

          <p className="max-w-[750px] mx-auto text-lg text-[var(--muted)] leading-relaxed font-[var(--font-sans)]">
            Conheça os especialistas dedicados a transformar a gestão em saúde
            através da tecnologia.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>

        <section className="mt-48">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl font-black text-[var(--text)] uppercase tracking-tighter mb-4 font-[var(--font-display)]">
              Nosso <span className="text-[var(--accent)]">Propósito</span>
            </h2>
            <div className="h-1.5 w-20 bg-[var(--accent)] rounded-full" />
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {identity.map((item) => (
              <FlipCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SobrePage;
