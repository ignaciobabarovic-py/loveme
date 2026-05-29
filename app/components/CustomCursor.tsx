"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Detect if cursor is over a light background section
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const section = el?.closest("section");
      const bg = section ? getComputedStyle(section).backgroundColor : "";
      const isLight = bg.includes("255, 255, 255") || bg.includes("#fff") ||
        (section?.style?.background ?? "").includes("#fff");

      const color = isLight ? "#0A0A0A" : "#C9A96E";
      const ringColor = isLight ? "rgba(10,10,10,0.4)" : "rgba(201,169,110,0.4)";
      dot.style.background = color;
      ringEl.style.borderColor = ringColor;
    };

    const onEnterLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2.5)";
      ringEl.style.transform = "translate(-50%, -50%) scale(1.8)";
    };

    const onLeaveLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      ringEl.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const animate = () => {
      dot.style.left = `${pos.current.x}px`;
      dot.style.top = `${pos.current.y}px`;

      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#C9A96E",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.2s ease, background 0.3s ease",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.4)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
}
