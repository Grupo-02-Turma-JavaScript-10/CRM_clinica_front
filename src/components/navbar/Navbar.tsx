import { useContext, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import LogoDark from "../../assets/dark-theme.svg";
import LogoLight from "../../assets/light-theme.svg";

import { isAuthenticated } from "../../utils/Auth";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  const {handleLogout} = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [logged, setLogged] = useState<boolean>(isAuthenticated());

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isPerfilActive = logged && pathname.startsWith("/perfil");

  const links = useMemo(() => {
    if (!logged) {
      return [
        { to: "/", label: "Home" },
        { to: "/sobrenos", label: "Sobre nós" },
      ];
    }

    return [
      { to: "/consultas", label: "Painel de Consultas" },
    ];
  }, [logged]);

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

  const rightBtnSize = "min-w-[118px] px-[14px] py-[10px] text-[0.95rem]";

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

  function deslogar() {
    handleLogout();
    setOpen(false);
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-[999] w-full glass-header topline h-20">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={LogoLight}
            alt="CRMed"
            className="logo-light h-20 w-auto select-none"
            draggable={false}
          />
          <img
            src={LogoDark}
            alt="CRMed"
            className="logo-dark h-20 w-auto select-none"
            draggable={false}
          />
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `nav-glass ${focusRing} ${isActive ? "nav-glass--active" : ""}`
                  }
                  end={l.to === "/"}
                >
                  <>
                    <span className="nav-glass-underline" />
                    {l.label}
                  </>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {!logged ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `hidden md:inline-flex items-center justify-center ${rightBtnSize} nav-glass ${focusRing} ${
                    isActive ? "nav-glass--active" : ""
                  }`
                }
              >
                <>
                  <span className="nav-glass-underline" />
                  Login
                </>
              </NavLink>

              <NavLink
                to="/cadastro"
                className={
                  `hidden sm:inline-flex items-center justify-center ${rightBtnSize} ` +
                  "rounded-2xl font-extrabold grad-btn glow cta-jump " +
                  "hover:brightness-[1.04] transition " +
                  focusRing
                }
              >
                Cadastro
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/perfil"
                className={
                  `hidden md:inline-flex items-center justify-center ${rightBtnSize} nav-glass ${focusRing} ` +
                  (isPerfilActive ? "nav-glass--active" : "")
                }
              >
                <>
                  <span className="nav-glass-underline" />
                  Meu Perfil
                </>
              </NavLink>

              <button
                type="button"
                className={`hidden sm:inline-flex items-center justify-center ${rightBtnSize} nav-glass nav-danger ${focusRing}`}
                title="Sair"
                onClick={deslogar}
              >
                <>
                  <span className="nav-glass-underline" />
                  Sair
                </>
              </button>
            </>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            className={
              "md:hidden grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border)] " +
              "bg-[var(--surface)] hover:bg-[var(--surface-2)] transition active:scale-[0.98] " +
              focusRing
            }
            aria-label="Abrir menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-[var(--muted)]"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `nav-glass ${focusRing} block ${isActive ? "nav-glass--active" : ""}`
                    }
                  >
                    <>
                      <span className="nav-glass-underline" />
                      {l.label}
                    </>
                  </NavLink>
                </li>
              ))}

              {logged && (
                <li>
                  <NavLink
                    to="/perfil"
                    onClick={() => setOpen(false)}
                    className={`nav-glass ${focusRing} block ${isPerfilActive ? "nav-glass--active" : ""}`}
                  >
                    <>
                      <span className="nav-glass-underline" />
                      Meu Perfil
                    </>
                  </NavLink>
                </li>
              )}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {!logged ? (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `nav-glass ${focusRing} text-center block ${isActive ? "nav-glass--active" : ""}`
                    }
                  >
                    <>
                      <span className="nav-glass-underline" />
                      Login
                    </>
                  </NavLink>

                  <NavLink
                    to="/cadastro"
                    onClick={() => setOpen(false)}
                    className={
                      "inline-flex items-center justify-center rounded-2xl " +
                      `${rightBtnSize} ` +
                      "font-extrabold grad-btn glow cta-jump " +
                      "hover:brightness-[1.04] transition " +
                      focusRing
                    }
                  >
                    Cadastro
                  </NavLink>
                </>
              ) : (
                <button
                  type="button"
                  className={`nav-glass nav-danger ${focusRing}`}
                  title="Sair"
                  onClick={deslogar}
                >
                  <>
                    <span className="nav-glass-underline" />
                    Sair
                  </>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}