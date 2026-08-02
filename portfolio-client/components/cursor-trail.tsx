"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

const DOT_COUNT = 100;
const DOT_LIFETIME = 2000; // ms
const CURSOR_RING_SIZE = 20;

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<(Dot & { createdAt: number })[]>([]);
  const mouse = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Disable on touch / coarse pointer devices to avoid unnecessary work and visual clutter
    const isTouchOrCoarse = () =>
      typeof window !== "undefined" &&
      (("ontouchstart" in window) ||
        (navigator.maxTouchPoints ?? 0) > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches));

    if (isTouchOrCoarse()) {
      // Hide canvas entirely on touch devices
      const c = canvasRef.current;
      if (c) c.style.display = "none";
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function onMouseMove(e: MouseEvent) {
      dots.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1,
        size: 1,
        createdAt: performance.now(),
      });
      if (dots.current.length > DOT_COUNT) {
        dots.current.shift();
      }
      mouse.current = { x: e.clientX, y: e.clientY };
    }

    function getPrimaryColor() {
      // Returns the full CSS value e.g. "oklch(0.623 0.214 259.815)"
      return getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim() || "oklch(0.623 0.214 259.815)";
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();
      const primary = getPrimaryColor();
      dots.current = dots.current.filter((d) => now - d.createdAt < DOT_LIFETIME);

      // Draw trail dots — newest is largest, oldest is smallest
      for (const dot of dots.current) {
        const age = now - dot.createdAt;
        const t = age / DOT_LIFETIME;
        const progress = 1 - (1 - t) ** 3; // 0 = newest, 1 = oldest
        const alpha = (1 - progress) * 0.1;
        const size = dot.size * (1 + (1 - progress) * 20);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = primary;
        ctx.fill();
        ctx.restore();
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;

      if (mx > -900) {
        // Outer ring — snaps directly to mouse position (no lag), fully opaque
        ctx.beginPath();
        ctx.arc(mx, my, CURSOR_RING_SIZE, 0, Math.PI * 2);
        ctx.strokeStyle = primary;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden
    />
  );
}
