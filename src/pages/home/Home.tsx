import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscar } from "../../services/Service";

function detectDark(): boolean {
  const html = document.documentElement;
  const body = document.body;
  const root = document.getElementById("root");

  const dataTheme =
    html.getAttribute("data-theme") ||
    body.getAttribute("data-theme") ||
    root?.getAttribute("data-theme");

  if (dataTheme) return dataTheme.toLowerCase() === "dark";

  const hasClass = (el: Element | null) =>
    !!el && (el.classList.contains("dark") || el.classList.contains("theme-dark"));

  return hasClass(html) || hasClass(body) || hasClass(root);
}

type Slide = {
  tag?: string;
  title: string;
  subtitle: string;
  cta: string;
};

type FeatureCard = {
  tag: string;
  title: string;
  role: string;
  summary: string;
  backTitle: string;
  backText: string;
  chips: string[];
  icon: React.ReactNode;
};

export default function Home() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const token = usuario?.token ?? "";

  const [isDark, setIsDark] = useState<boolean>(() => detectDark());

  useEffect(() => {
    const update = () => setIsDark(detectDark());
    const obsHtml = new MutationObserver(update);
    const obsBody = new MutationObserver(update);
    const root = document.getElementById("root");

    obsHtml.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    obsBody.observe(document.body, { attributes: true, attributeFilter: ["class", "data-theme"] });

    let obsRoot: MutationObserver | null = null;
    if (root) {
      obsRoot = new MutationObserver(update);
      obsRoot.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });
    }

    update();
    return () => {
      obsHtml.disconnect();
      obsBody.disconnect();
      obsRoot?.disconnect();
    };
  }, []);

  function handleCtaPainel() {
    
    navigate("/marcarconsulta");
  }

  const slides: Slide[] = useMemo(
    () => [
      {
        tag: "CRMed • Sistema Clínico",
        title: "Gestão moderna para consultas e agenda.",
        subtitle: "Um CRM pensado para médicos: organizado, profissional e intuitivo para o seu dia a dia.",
        cta: "Agende sua consulta",
      },
      {
        tag: "Visão do médico",
        title: "Agenda e consultas, sem complicação.",
        subtitle: "Tenha controle total da agenda e das consultas, com um fluxo claro para cadastro e acompanhamento.",
        cta: "Agende sua consulta",
      },
      {
        tag: "Fluxo do paciente",
        title: "Solicitação por formulário, direto para o médico.",
        subtitle: "O paciente encontra o site, escolhe especialidade e envia um formulário para solicitar a consulta.",
        cta: "Agende sua consulta",
      },
    ],
    []
  );
                           
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;

    intervalRef.current = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 5200);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, slides.length]);

  function goTo(i: number) {
    setActive(i);
    setAnimKey((k) => k + 1);
  }
  function next() {
    setActive((p) => (p + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }
  function prev() {
    setActive((p) => (p - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }

  const current = slides[active];

  const features: FeatureCard[] = useMemo(
    () => [
      {
        tag: "GESTÃO",
        title: "Agenda",
        role: "CRM • GESTÃO",
        summary: "Organize sua agenda médica com horários, encaixes e retornos em um só lugar.",
        backTitle: "Detalhes",
        backText:
          "Tenha controle total da sua agenda clínica: gerencie horários, encaixes e retornos com praticidade e uma visão clara do seu dia.",
        chips: ["Agenda do dia", "Encaixes", "Retornos"],
        icon: <IconCalendar />,
      },
      {
        tag: "ROTINA",
        title: "Consultas",
        role: "CRM • ROTINA",
        summary: "Cadastre e acompanhe consultas com um fluxo simples e organizado.",
        backTitle: "Detalhes",
        backText:
          "Registre consultas de forma rápida e mantenha sua rotina clínica organizada, acompanhando atendimentos e informações importantes do dia.",
        chips: ["Atendimentos", "Histórico", "Acompanhamento"],
        icon: <IconStethoscope />,
      },
      {
        tag: "CADASTRO",
        title: "Especialidades",
        role: "CRM • CADASTRO",
        summary: "Centralize especialidades e profissionais para agilizar o agendamento.",
        backTitle: "Detalhes",
        backText:
          "Cadastre especialidades e profissionais para padronizar o sistema e tornar o processo de solicitação mais rápido e eficiente.",
        chips: ["Padronização", "Profissionais", "Organização"],
        icon: <IconPlus />,
      },
      {
        tag: "ACESSO",
        title: "Segurança",
        role: "CRM • ACESSO",
        summary: "Painel exclusivo para médicos, com acesso controlado por login.",
        backTitle: "Detalhes",
        backText:
          "Acesso controlado para garantir privacidade e organização: o painel do CRMed é exclusivo para médicos autenticados.",
        chips: ["Autenticação", "Privacidade", "Controle"],
        icon: <IconShield />,
      },
      {
        tag: "EXPERIÊNCIA",
        title: "Responsivo",
        role: "UI • EXPERIÊNCIA",
        summary: "Gerencie sua agenda no celular ou no computador, sem perder usabilidade.",
        backTitle: "Detalhes",
        backText:
          "Interface responsiva para o médico acessar e organizar a agenda de qualquer dispositivo — mantendo legibilidade, fluidez e conforto na navegação.",
        chips: ["Mobile", "Desktop", "Fluidez"],
        icon: <IconBolt />,
      },
      {
        tag: "IDENTIDADE",
        title: "Profissional",
        role: "UI • IDENTIDADE",
        summary: "Interface moderna e confiável para uma gestão clínica mais profissional.",
        backTitle: "Detalhes",
        backText:
          "Visual clean e sofisticado, com identidade consistente e foco em produtividade — ideal para o dia a dia do médico.",
        chips: ["Consistência", "Clareza", "Produtividade"],
        icon: <IconStar />,
      },
    ],
    []
  );

  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  function toggleFlip(key: string) {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const [totalEspecialidades, setTotalEspecialidades] = useState<number>(0);
  const [totalMedicos, setTotalMedicos] = useState<number>(0);

  useEffect(() => {
    async function loadCounts() {
      const header = token ? { headers: { Authorization: token } } : undefined;

      try {
        let esp: any = null;
        await buscar("/especialidades", (data: any) => (esp = data), header ?? {});
        setTotalEspecialidades(Array.isArray(esp) ? esp.length : 0);
      } catch {
        setTotalEspecialidades(0);
      }

      try {
        let users: any = null;
        try {
          await buscar("/usuarios", (data: any) => (users = data), header ?? {});
        } catch {
          await buscar("/medicos", (data: any) => (users = data), header ?? {});
        }
        setTotalMedicos(Array.isArray(users) ? users.length : 0);
      } catch {
        setTotalMedicos(0);
      }
    }

    if (token) loadCounts();
  }, [token]);

  const sectionTitleClass = isDark ? "text-white" : "text-slate-900";
  const sectionSubClass = isDark ? "text-white/80" : "text-slate-600";

  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="
            relative overflow-hidden
            rounded-[34px]
            border border-white/10
            bg-[#0B1024]/55
            backdrop-blur-md
            shadow-[0_26px_90px_rgba(0,0,0,0.40)]
          "
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/15 to-black/35" />
            <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#80B8ED]/28 blur-3xl" />
            <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-[#44E2D5]/14 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative z-10 px-8 py-10 md:px-12 md:py-12">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-white/80 font-inter">
                <span className="h-2 w-2 rounded-full bg-[#44E2D5]" />
                <span className="tracking-wide">{current.tag}</span>
              </div>

              <button
                onClick={() => navigate("/login")}
                className="
                  rounded-full px-4 py-2 text-sm font-semibold
                  border border-white/12 bg-white/5 hover:bg-white/10
                  text-white transition font-inter
                "
              >
                Área do médico
              </button>
            </div>

            <div className="mt-7 grid lg:grid-cols-2 gap-8 items-start">
              <div className="max-w-2xl">
                <div key={animKey} className="animate-[slideFade_420ms_ease-out]">
                  <h1 className="font-jakarta text-4xl md:text-5xl font-extrabold leading-tight">
                    <span className="bg-gradient-to-r from-[#80B8ED] via-white to-[#44E2D5] bg-clip-text text-transparent">
                      {current.title}
                    </span>
                  </h1>

                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/78 font-inter">
                    {current.subtitle}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleCtaPainel}
                    className="
                      rounded-full px-7 py-3 font-semibold
                      bg-gradient-to-r from-[#80B8ED] to-[#44E2D5]
                      text-[#051018]
                      shadow-[0_18px_60px_rgba(128,184,237,0.28)]
                      hover:shadow-[0_22px_70px_rgba(68,226,213,0.28)]
                      transition font-inter
                    "
                  >
                    {current.cta}
                  </button>

                  <button
                    onClick={() => navigate("/sobrenos")}
                    className="
                      rounded-full px-7 py-3 font-semibold
                      border border-white/14 bg-white/5 hover:bg-white/10
                      text-white transition font-inter
                    "
                  >
                    Área do  Médico
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Chip>Somente médicos acessam</Chip>
                  <Chip>Interface responsiva</Chip>
                  <Chip>Solicitação por formulário</Chip>
                </div>
              </div>

              <div className="w-full">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="font-jakarta text-lg font-bold text-white">Visão geral</p>

                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <MiniStatCard label="Especialidades cadastradas" value={totalEspecialidades} />
                    <MiniStatCard label="Médicos que utilizam CRMed" value={totalMedicos.toLocaleString("pt-BR")} />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-white/78 leading-relaxed font-inter">
                    Organize profissionais da saúde e suas especialidades. Pacientes encontram o site e enviam um formulário
                    para solicitar a consulta diretamente ao médico.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="h-10 w-10 rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition text-white font-inter"
                  aria-label="Slide anterior"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition text-white font-inter"
                  aria-label="Próximo slide"
                >
                  ›
                </button>
              </div>

              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Ir para slide ${i + 1}`}
                    className={[
                      "h-2.5 rounded-full transition-all",
                      i === active ? "w-9 bg-[#44E2D5]" : "w-2.5 bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideFade {
            from { opacity: 0; transform: translateY(10px); filter: blur(2px); }
            to   { opacity: 1; transform: translateY(0px); filter: blur(0px); }
          }
        `}</style>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className={["font-jakarta text-2xl md:text-3xl font-extrabold", sectionTitleClass].join(" ")}>
              Recursos do CRMed
            </h2>

            <p className={["mt-2 max-w-2xl font-inter", sectionSubClass].join(" ")}>
              Clique em um card para virar e ver mais detalhes.
            </p>
          </div>

          <button
            onClick={handleCtaPainel}
            className="
              rounded-full px-6 py-3 font-semibold
              bg-gradient-to-r from-[#80B8ED] to-[#44E2D5]
              text-[#051018]
              shadow-[0_18px_60px_rgba(128,184,237,0.22)]
              hover:shadow-[0_22px_70px_rgba(68,226,213,0.22)]
              transition font-inter
            "
          >
            Acessar painel
          </button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const key = f.title;
            const isFlipped = !!flipped[key];

            return (
              <ProfileFlipCard
                key={key}
                isDark={isDark}
                tag={f.tag}
                name={f.title}
                role={f.role}
                summary={f.summary}
                detailsTitle={f.backTitle}
                detailsText={f.backText}
                chips={f.chips}
                icon={f.icon}
                flipped={isFlipped}
                onToggle={() => toggleFlip(key)}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

function ProfileFlipCard({
  isDark,
  tag,
  name,
  role,
  summary,
  detailsTitle,
  detailsText,
  chips,
  icon,
  flipped,
  onToggle,
}: {
  isDark: boolean;
  tag: string;
  name: string;
  role: string;
  summary: string;
  detailsTitle: string;
  detailsText: string;
  chips: string[];
  icon: React.ReactNode;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="text-left group"
      aria-pressed={flipped}
      aria-label={`Card ${name}. Clique para ${flipped ? "voltar" : "ver detalhes"}.`}
    >
      <div className="relative h-[310px] w-full [perspective:1200px]">
        <div
          className={[
            "relative h-full w-full transition-transform duration-500",
            "[transform-style:preserve-3d]",
            flipped ? "[transform:rotateY(180deg)]" : "",
          ].join(" ")}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <ProfileCardFront isDark={isDark} tag={tag} name={name} role={role} summary={summary} icon={icon} />
          </div>

          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <ProfileCardBack isDark={isDark} title={detailsTitle} text={detailsText} chips={chips} />
          </div>
        </div>
      </div>
    </button>
  );
}

function ProfileCardFront({
  isDark,
  tag,
  name,
  role,
  summary,
  icon,
}: {
  isDark: boolean;
  tag: string;
  name: string;
  role: string;
  summary: string;
  icon: React.ReactNode;
}) {
  const cardBg = isDark
    ? "bg-[#070B18]/88"
    : "bg-[linear-gradient(160deg,rgba(255,255,255,0.90),rgba(240,252,252,0.90))]";
  const border = isDark ? "border-white/10" : "border-transparent";
  const textMain = isDark ? "text-white" : "text-slate-900";
  const textSub = isDark ? "text-white/70" : "text-slate-600";

  const chipClass = isDark
    ? "border border-[#44E2D5]/30 bg-[#44E2D5]/10 text-[#BFFAF4]"
    : "border border-[#0AA0A0]/30 bg-[#0AA0A0]/10 text-[#063B3B]";

  const avatarBg = isDark
    ? "bg-gradient-to-br from-[#80B8ED]/35 to-[#44E2D5]/20 border-[#44E2D5]/40"
    : "bg-gradient-to-br from-[#80B8ED]/45 to-[#44E2D5]/35 border-[#0AA0A0]/25";

  const shadow = isDark ? "shadow-[0_18px_70px_rgba(0,0,0,0.25)]" : "shadow-[0_18px_60px_rgba(6,182,212,0.18)]";

  return (
    <div
      className={[
        "relative h-full overflow-hidden rounded-[26px] border backdrop-blur-md",
        cardBg,
        border,
        shadow,
        "transition-transform duration-300 group-hover:-translate-y-1",
        isDark
          ? "group-hover:shadow-[0_26px_90px_rgba(68,226,213,0.18)]"
          : "group-hover:shadow-[0_26px_90px_rgba(6,182,212,0.22)]",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#44E2D5]/14 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#80B8ED]/14 blur-3xl" />
        <div className={["absolute inset-0", isDark ? "bg-gradient-to-b from-white/0 to-black/30" : "bg-gradient-to-b from-white/0 to-white/55"].join(" ")} />
      </div>

      <div className="relative z-10 h-full p-6 flex flex-col">
        <div className="flex items-start justify-between">
          <span className={["inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold font-inter", chipClass].join(" ")}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#44E2D5]" />
            {tag}
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative">
            <div className={["absolute -inset-2 rounded-full blur-md", isDark ? "bg-[#44E2D5]/18" : "bg-[#06B6D4]/14"].join(" ")} />
            <div className={["relative grid place-items-center h-[86px] w-[86px] rounded-full border", avatarBg].join(" ")}>
              <div className={isDark ? "text-[#051018]" : "text-slate-900"}>{icon}</div>
            </div>
          </div>

          <h3 className={["mt-4 font-jakarta text-xl font-extrabold", textMain].join(" ")}>{name}</h3>

          <p className={["mt-1 text-[11px] tracking-[0.22em] font-inter", isDark ? "text-[#44E2D5]/90" : "text-[#0AA0A0]"].join(" ")}>
            {role}
          </p>

          <p className={["mt-4 text-sm leading-relaxed font-inter px-2 w-full", textSub].join(" ")}>
            {summary}
          </p>
        </div>

        <div className={["mt-3 flex items-center justify-between text-xs font-inter", isDark ? "text-white/55" : "text-slate-500"].join(" ")}>
          <span className="truncate">Clique para ver detalhes</span>
          <span className="transition group-hover:translate-x-1">↻</span>
        </div>
      </div>
    </div>
  );
}

function ProfileCardBack({
  isDark,
  title,
  text,
  chips,
}: {
  isDark: boolean;
  title: string;
  text: string;
  chips: string[];
}) {
  const cardBg = isDark
    ? "bg-[#07131B]/92"
    : "bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(238,252,252,0.92))]";
  const border = isDark ? "border-white/10" : "border-transparent";
  const textMain = isDark ? "text-white" : "text-slate-900";
  const textSub = isDark ? "text-white/78" : "text-slate-700";

  const chip = isDark
    ? "border border-white/10 bg-white/5 text-white/70"
    : "border border-[#0AA0A0]/20 bg-[#0AA0A0]/10 text-[#063B3B]";

  return (
    <div className={["relative h-full overflow-hidden rounded-[26px] border backdrop-blur-md", cardBg, border, "shadow-[0_18px_70px_rgba(0,0,0,0.25)]"].join(" ")}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#80B8ED]/12 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#44E2D5]/10 blur-3xl" />
        <div className={["absolute inset-0", isDark ? "bg-gradient-to-b from-white/0 to-black/32" : "bg-gradient-to-b from-white/0 to-white/55"].join(" ")} />
      </div>

      <div className="relative z-10 h-full p-6 flex flex-col">
        <div className="flex-1 min-h-0">
          <h4 className={["font-jakarta text-base font-extrabold", textMain].join(" ")}>{title}</h4>

          <p className={["mt-4 text-sm leading-relaxed font-inter", textSub].join(" ")}>{text}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {chips.slice(0, 3).map((c) => (
              <span key={c} className={["rounded-full px-3 py-1 text-xs font-inter", chip].join(" ")}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className={["mt-3 flex items-center justify-between text-xs font-inter", isDark ? "text-white/55" : "text-slate-500"].join(" ")}>
          <span className="truncate">Clique para voltar</span>
          <span>↩</span>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/75 font-inter">
      {children}
    </span>
  );
}

function MiniStatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-white/70 font-inter">{label}</p>

      <p className="mt-2 font-jakarta font-extrabold text-3xl bg-gradient-to-r from-[#80B8ED] to-[#44E2D5] bg-clip-text text-transparent">
        {value}
      </p>
    </div>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M8 3v3M16 3v3M4 8h16M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M8 12h4M8 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconStethoscope() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M6 2v5a6 6 0 0 0 12 0V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 13v2a4 4 0 0 0 8 0v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M9.5 12.5 11 14l3.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.6 6.3 6.8.5-5.2 4.3 1.7 6.6L12 16.7 6.1 19.7l1.7-6.6L2.6 8.8l6.8-.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
