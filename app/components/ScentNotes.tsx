"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const notes = [
  {
    category: "Top Notes",
    icon: "◈",
    items: ["Bergamot", "Cardamom", "Neroli"],
    delay: 0,
  },
  {
    category: "Heart Notes",
    icon: "✦",
    items: ["Jasmine", "Oud Wood", "Rose Absolute"],
    delay: 0.2,
  },
  {
    category: "Base Notes",
    icon: "◎",
    items: ["Amber", "Vanilla", "Vetiver"],
    delay: 0.4,
  },
];

export default function ScentNotes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="notes"
      ref={ref}
      style={{
        padding: "14rem 0",
        background: "#080808",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image with overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/ChatGPT Image 27 may 2026, 18_39_02.png"
          alt="Scent Notes"
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.12 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.85)" }} />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 4rem",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <motion.p
          initial={false}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={{
            color: "#C9A96E",
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          The Composition
        </motion.p>

        <motion.h2
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "0.05em",
            marginBottom: "5rem",
          }}
        >
          A Symphony of <span className="gold-text" style={{ fontStyle: "italic" }}>Rare Notes</span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
            gap: "0",
            alignItems: "start",
          }}
        >
          {notes.map((note, i) => (
            <React.Fragment key={note.category}>
              <motion.div
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 + note.delay }}
                style={{ padding: "0 3rem" }}
              >
                {/* Icon */}
                <motion.p
                  initial={false}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + note.delay }}
                  style={{
                    color: "#C9A96E",
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                  }}
                >
                  {note.icon}
                </motion.p>

                <p
                  style={{
                    color: "#C9A96E",
                    fontSize: "0.55rem",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    marginBottom: "2rem",
                  }}
                >
                  {note.category}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {note.items.map((item, j) => (
                    <motion.p
                      key={item}
                      initial={false}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.7 + note.delay + j * 0.12 }}
                      style={{
                        color: j === 0 ? "rgba(255,255,255,0.9)" : j === 1 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.4)",
                        fontSize: j === 0 ? "1.1rem" : j === 1 ? "0.95rem" : "0.85rem",
                        fontWeight: 300,
                        letterSpacing: "0.08em",
                        fontStyle: "italic",
                      }}
                    >
                      {item}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {i < notes.length - 1 && (
                <motion.div
                  initial={false}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3), transparent)",
                    height: "220px",
                    alignSelf: "center",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
