import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const STORAGE_KEY = "crmed_theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    } else {
      setTheme("light");
      localStorage.setItem(STORAGE_KEY, "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <button
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        className={[
          "group relative inline-flex items-center gap-2 rounded-2xl",
          "px-3 py-2",
          "w-fit",
          "border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]",
          "hover:bg-[var(--surface-2)] active:scale-[0.98] transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        ].join(" ")}
        aria-label="Alternar tema"
        title="Alternar tema"
      >
        <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[inset_0_0_0_1px_rgba(45,212,191,0.22)]" />

        <span
          className="relative grid h-8 w-8 place-items-center rounded-2xl"
          style={{ background: "var(--grad)" }}
        >
          <span className="text-white relative h-[18px] w-[18px]">
            <span
              className={[
                "absolute inset-0 grid place-items-center transition-all duration-300 ease-out",
                theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75",
              ].join(" ")}
            >
              <SunIcon />
            </span>

            <span
              className={[
                "absolute inset-0 grid place-items-center transition-all duration-300 ease-out",
                theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75",
              ].join(" ")}
            >
              <MoonIcon />
            </span>
          </span>
        </span>

        <div className="leading-tight">
          <div className="text-sm font-semibold text-[var(--text)]" style={{ fontFamily: "var(--font-display)" }}>
            Tema
          </div>
          <div className="text-[11px] text-[var(--muted)]">
            {theme === "dark" ? "Escuro" : "Claro"}
          </div>
        </div>
      </button>
    </div>
  );
}
