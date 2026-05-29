"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.5rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.6s ease, backdrop-filter 0.6s ease",
        background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
      }}
    >
      <span
        className="gold-shimmer"
        style={{
          fontSize: "1.1rem",
          letterSpacing: "0.3em",
          fontWeight: 300,
          textTransform: "uppercase",
        }}
      >
        Love&amp;Me
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {["Story", "Notes"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "#C9A96E")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)")
            }
          >
            {item}
          </a>
        ))}
        <a
          href="#reserve"
          style={{
            color: "#050505",
            background: "#C9A96E",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0.6rem 1.5rem",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#E8D5A3";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#C9A96E";
          }}
        >
          Reserve
        </a>
      </div>
    </motion.nav>
  );
}
