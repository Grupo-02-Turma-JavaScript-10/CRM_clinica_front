import type React from "react";
import { GithubLogo, LinkedinLogo }  from 'phosphor-react';

import CrmedIcon from "../../assets/crmed-icon.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-12"
      style={{
        borderTop: "1px solid var(--border)",
        background: "color-mix(in oklab, var(--surface) 92%, transparent)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-8 pb-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="relative grid place-items-center overflow-hidden"
              style={{
                height: 56,
                width: 56,
                borderRadius: "18px",

                background: "color-mix(in oklab, var(--surface) 18%, transparent)",
                backdropFilter: "blur(14px)",

                border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)",

                boxShadow: "var(--shadow)",
              }}
              aria-hidden="true"
            >
              <span
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 70% at 35% 30%, rgba(45,212,191,0.28), transparent 58%)," +
                    "radial-gradient(70% 70% at 80% 70%, rgba(59,130,246,0.22), transparent 60%)",
                  opacity: 0.95,
                }}
              />

              <span
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.30), rgba(255,255,255,0.02))",
                  opacity: 0.35,
                }}
              />

              <img
                src={CrmedIcon}
                alt="CRMed"
                draggable={false}
                style={{ height: 38, width: 38, position: "relative" }}
              />
            </div>

            <div>
              <p
                className="text-sm font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                CRM<span className="grad-text">ed</span>
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Agilidade • Organização • Simplicidade
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <FooterLink href="/especialidades">Especialidades</FooterLink>
            <Dot />
            <FooterLink href="#termos">Termos</FooterLink>
            <Dot />
            <FooterLink href="#contato">Contato</FooterLink>

            <span
              className="mx-2 hidden h-5 w-px md:inline-block"
              style={{ background: "var(--border)" }}
            />

            <IconLink href="https://github.com/" label="GitHub">
              <GithubLogo size={18} weight="bold" />
            </IconLink>

          </div>
        </div>

        <div className="mt-6 text-xs" style={{ color: "var(--muted)" }}>
          © {year} CRMed | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-xs"
      style={{ color: "var(--muted)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </a>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center"
      style={{
        borderRadius: "12px",
        border: "1px solid var(--border)",
        background: "color-mix(in oklab, var(--surface) 82%, transparent)",
        color: "var(--text)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.borderColor =
          "color-mix(in oklab, var(--primary) 35%, var(--border))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {children}
    </a>
  );
}

function Dot() {
  return (
    <span
      className="inline-block h-1 w-1 rounded-full"
      style={{ background: "var(--border)" }}
    />
  );
}
