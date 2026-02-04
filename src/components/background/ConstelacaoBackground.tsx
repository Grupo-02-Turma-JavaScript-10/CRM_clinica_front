import { useEffect, useRef } from "react";

type Props = { children: React.ReactNode };

let CACHED_PTS:
  | { x: number; y: number; vx: number; vy: number; r: number }[]
  | null = null;

export default function ConstelacaoBackground({ children }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const SPEED = 2.2;

    const mouse = { x: 0.5, y: 0.5 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX / Math.max(1, window.innerWidth);
      mouse.y = e.clientY / Math.max(1, window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (CACHED_PTS) {
        for (const p of CACHED_PTS) {
          p.x = Math.min(Math.max(p.x, 0), w);
          p.y = Math.min(Math.max(p.y, 0), h);
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const N = 70;

    if (!CACHED_PTS) {
      CACHED_PTS = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12 * SPEED,
        vy: (Math.random() - 0.5) * 0.12 * SPEED,
        r: 1 + Math.random() * 1.2,
      }));
    } else {
      for (const p of CACHED_PTS) {
        p.vx *= SPEED;
        p.vy *= SPEED;
      }
    }

    const pts = CACHED_PTS;

    const getThemeColors = () => {
      const html = document.documentElement;
      const body = document.body;
      const root = document.getElementById("root");

      const dataTheme =
        html.getAttribute("data-theme") ||
        body.getAttribute("data-theme") ||
        root?.getAttribute("data-theme");

      const isDark =
        (dataTheme && dataTheme.toLowerCase() === "dark") ||
        html.classList.contains("dark") ||
        html.classList.contains("theme-dark") ||
        body.classList.contains("dark") ||
        body.classList.contains("theme-dark") ||
        root?.classList.contains("dark") ||
        root?.classList.contains("theme-dark");

      return {
        node: isDark
          ? "rgba(140, 240, 230, 0.92)"
          : "rgba(10, 160, 160, 0.32)",
        line: isDark
          ? "rgba(68, 226, 213, 0.18)"
          : "rgba(10, 160, 160, 0.10)",
      };
    };

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);

      ctx.clearRect(0, 0, w, h);

      const px = (mouse.x - 0.5) * 18;
      const py = (mouse.y - 0.5) * 18;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -40) p.x = w + 40;
        if (p.x > w + 40) p.x = -40;
        if (p.y < -40) p.y = h + 40;
        if (p.y > h + 40) p.y = -40;
      }

      const { node, line } = getThemeColors();

      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 145) {
            const alpha = 1 - dist / 145;
            ctx.strokeStyle = line.replace(
              /0\.\d+\)/,
              `${(alpha * 0.9).toFixed(3)})`
            );
            ctx.beginPath();
            ctx.moveTo(a.x + px, a.y + py);
            ctx.lineTo(b.x + px, b.y + py);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        ctx.fillStyle = node;
        ctx.beginPath();
        ctx.arc(p.x + px, p.y + py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="crm-space-bg" aria-hidden="true">
        <canvas ref={canvasRef} className="crm-space-canvas" />
        <div className="crm-space-overlay" />
      </div>

      {children}
    </>
  );
}
