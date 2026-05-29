"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      style={{
        padding: "6rem 4rem",
        background: "#030303",
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <p
            className="gold-text"
            style={{
              fontSize: "1.8rem",
              fontWeight: 300,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Love&amp;Me
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "0.55rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            The power of being you
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{
            height: "1px",
            width: "100%",
            maxWidth: "400px",
            background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)",
          }}
        />

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            display: "flex",
            gap: "3rem",
          }}
        >
          {["Instagram", "Privacy", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#C9A96E")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)")
              }
            >
              {item}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={false}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            color: "rgba(255,255,255,0.12)",
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
          }}
        >
          © 2026 Love&amp;Me. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
