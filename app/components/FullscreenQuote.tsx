"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FullscreenQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ scale, position: "absolute", inset: 0 }}>
        <Image
          src="/images/ChatGPT Image 27 may 2026, 06_21_02 p.m..png"
          alt="Quote background"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(5,5,5,0.72)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, y: textY, position: "relative", zIndex: 10, textAlign: "center", padding: "0 3rem" }}
      >
        <motion.div
          initial={false}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{
            height: "1px",
            width: "60px",
            background: "rgba(201,169,110,0.5)",
            margin: "0 auto 2.5rem",
          }}
        />

        <p
          style={{
            color: "#fff",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.02em",
            lineHeight: 1.4,
            maxWidth: "750px",
          }}
        >
          &ldquo;Not for everyone.<br />
          <span style={{
            background: "linear-gradient(135deg, #C9A96E, #E8D5A3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            For you.
          </span>&rdquo;
        </p>

        <motion.div
          initial={false}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          style={{
            height: "1px",
            width: "60px",
            background: "rgba(201,169,110,0.5)",
            margin: "2.5rem auto 0",
          }}
        />
      </motion.div>
    </section>
  );
}
