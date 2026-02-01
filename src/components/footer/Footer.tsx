import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/crmed-icon.svg";

import { isAuthenticated } from "../../utils/Auth";

export default function Footer() {
  const [logged, setLogged] = useState<boolean>(isAuthenticated());

  useEffect(() => {
    const sync = () => setLogged(isAuthenticated());

    sync();
    window.addEventListener("auth-changed", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("auth-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const links = useMemo(() => {
    if (!logged) {
      return [
        { to: "/", label: "Home" },
        { to: "/sobrenos", label: "Sobre nós" },
      ];
    }

    return [
      { to: "/", label: "Home" },
      { to: "/consultas", label: "Consultas" },
      { to: "/especialidades", label: "Especialidades" },
      { to: "/sobrenos", label: "Sobre nós" },
    ];
  }, [logged]);

  return (
    <footer className="relative z-10 glass-footer topline">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="CRMed"
                className="logo-light h-10 w-auto select-none"
                draggable={false}
              />
              <img
                src={Logo}
                alt="CRMed"
                className="logo-dark h-10 w-auto select-none"
                draggable={false}
              />
              <p
                className="font-extrabold tracking-tight text-[var(--text)] text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CRM
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                  ed
                </span>{" "}
                <span className="grad-text">•</span>
              </p>
            </div>

            <p className="text-sm text-[var(--muted)] max-w-md">
              Experiência moderna para agendamento e gestão de consultas, com foco em agilidade e clareza.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav-glass ${isActive ? "nav-glass--active" : ""}`}
              >
                <>
                  <span className="nav-glass-underline" />
                  {l.label}
                </>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)]/70 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} CRMed. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
