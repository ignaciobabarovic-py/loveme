"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    icon: "◈",
    title: "Sophisticated Scent",
    desc: "Carefully selected notes for a unique and lasting fragrance.",
  },
  {
    icon: "◎",
    title: "Long-Lasting",
    desc: "High-quality formula that stays with you all day long.",
  },
  {
    icon: "◇",
    title: "Premium Design",
    desc: "Every detail reflects luxury and elegance.",
  },
  {
    icon: "◻",
    title: "The Perfect Gift",
    desc: "Surprise someone special with an unforgettable detail.",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "14rem 0",
        background: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background image — no overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/e1297aaa85c259c323771c553a02c279.png"
          alt="Features background"
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top: image + tagline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8rem",
            alignItems: "center",
            marginBottom: "10rem",
          }}
        >
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
            style={{ position: "relative" }}
          >
            <div
              style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
            >
              <Image
                src="/images/ChatGPT Image 27 may 2026, 19_28_54.png"
                alt="Love&Me Product"
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
            {/* Gold corner accents */}
            <div style={{
              position: "absolute", top: "-12px", right: "-12px",
              width: "50px", height: "50px",
              borderTop: "1px solid rgba(201,169,110,0.6)",
              borderRight: "1px solid rgba(201,169,110,0.6)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: "-12px", left: "-12px",
              width: "50px", height: "50px",
              borderBottom: "1px solid rgba(201,169,110,0.6)",
              borderLeft: "1px solid rgba(201,169,110,0.6)",
              pointerEvents: "none",
            }} />
          </motion.div>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <p
              style={{
                color: "#C9A96E",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              The Fragrance
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#fff",
                lineHeight: 1.3,
                letterSpacing: "0.02em",
                marginBottom: "2rem",
              }}
            >
              A fragrance that<br />
              speaks of{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A96E, #E8D5A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                you.
              </span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
                lineHeight: 2,
                fontWeight: 300,
                letterSpacing: "0.04em",
              }}
            >
              Elegant. Authentic. Unforgettable. Crafted for those who understand that
              true luxury is not worn — it is lived.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 + i * 0.15 }}
              style={{
                padding: "3rem 2rem",
                borderRight: i < features.length - 1 ? "1px solid rgba(201,169,110,0.15)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#C9A96E",
                  fontSize: "1.2rem",
                  marginBottom: "1.2rem",
                }}
              >
                {f.icon}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {f.title}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
