import { useEffect, useRef } from "react";

type Props = { children: React.ReactNode };

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
    };

    resize();
    window.addEventListener("resize", resize);

    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: 1 + Math.random() * 1.2,
    }));

    const colorForTheme = () => {
      const isDark = document.documentElement.classList.contains("theme-dark");
      return {
        node: isDark ? "rgba(140, 240, 230, 0.90)" : "rgba(10, 130, 150, 0.62)",
        line: isDark ? "rgba(45, 212, 191, 0.24)" : "rgba(10, 130, 150, 0.18)",
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

      const { node, line } = colorForTheme();

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
            ctx.strokeStyle = line.replace(/0\.\d+\)/, `${(alpha * 0.9).toFixed(3)})`);
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
