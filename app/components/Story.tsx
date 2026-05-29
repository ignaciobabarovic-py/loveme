"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "100", unit: "ml", label: "Volume" },
  { value: "18", unit: "%", label: "Concentration" },
  { value: "2026", unit: "", label: "Edition" },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="story"
      ref={ref}
      style={{
        padding: "12rem 0",
        background: "#050505",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "100px",
          background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3))",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
          alignItems: "center",
        }}
      >
        {/* Text side */}
        <div>
          <motion.p
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            style={{
              color: "#C9A96E",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            The Story
          </motion.p>

          <motion.h2
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "2.5rem",
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            Awaken<br />
            <span className="gold-text" style={{ fontStyle: "italic" }}>who you are.</span>
          </motion.h2>

          <motion.div
            initial={false}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.4 }}
            style={{
              height: "1px",
              background: "linear-gradient(90deg, #C9A96E, transparent)",
              marginBottom: "2.5rem",
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.9rem",
              lineHeight: 2,
              fontWeight: 300,
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}
          >
            Love&amp;Me was born from a single, radical belief: that the most powerful
            scent you can wear is your own truth. Not for everyone. For you.
          </motion.p>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              borderLeft: "2px solid rgba(201,169,110,0.5)",
              paddingLeft: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.05em",
              fontStyle: "italic",
            }}>
              A fragrance that doesn&apos;t follow trends.<br />It creates them.
            </p>
          </motion.div>

          {/* Animated stats */}
          <div style={{ display: "flex", gap: "0" }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 + i * 0.15 }}
                style={{
                  textAlign: "center",
                  padding: "1.5rem 2.5rem",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(201,169,110,0.2)" : "none",
                  borderTop: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                <p style={{ display: "flex", alignItems: "baseline", gap: "3px", justifyContent: "center" }}>
                  <span className="gold-text" style={{ fontSize: "2.4rem", fontWeight: 300 }}>
                    {s.value}
                  </span>
                  <span style={{ color: "#C9A96E", fontSize: "0.85rem" }}>{s.unit}</span>
                </p>
                <p style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginTop: "0.4rem",
                }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image side with parallax */}
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ position: "relative" }}
        >
          <div
            ref={imgRef}
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
            }}
          >
            <motion.div style={{ y: imgY, position: "absolute", inset: "-10%" }}>
              <Image
                src="/images/ChatGPT Image 27 may 2026, 06_20_53.png"
                alt="Love&Me Story"
                fill
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </motion.div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 60%, rgba(5,5,5,0.6) 100%)",
              }}
            />
          </div>

          {/* Gold border accent */}
          <div style={{
            position: "absolute", top: "-12px", right: "-12px",
            width: "50px", height: "50px",
            borderTop: "1px solid rgba(201,169,110,0.6)", borderRight: "1px solid rgba(201,169,110,0.6)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-12px", left: "-12px",
            width: "50px", height: "50px",
            borderBottom: "1px solid rgba(201,169,110,0.6)", borderLeft: "1px solid rgba(201,169,110,0.6)",
            pointerEvents: "none",
          }} />
        </motion.div>
      </div>
    </section>
  );
}
