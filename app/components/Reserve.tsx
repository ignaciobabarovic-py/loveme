"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const LAUNCH = new Date("2026-09-01T00:00:00");

function useCountdown() {
  const calc = () => {
    const diff = LAUNCH.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Reserve() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const countdown = useCountdown();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="reserve"
      ref={ref}
      style={{
        position: "relative",
        padding: "16rem 0",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/ChatGPT Image 27 may 2026, 18_20_36.png"
          alt="Reserve background"
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.85)" }} />
      </div>

      <div
        style={{
          maxWidth: "700px",
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
          Be the First
        </motion.p>

        <motion.h2
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "0.04em",
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          Reserve Your<br />
          <span className="gold-text" style={{ fontStyle: "italic" }}>Exclusive Access</span>
        </motion.h2>

        <motion.div
          initial={false}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            margin: "2rem auto",
            maxWidth: "120px",
          }}
        />

        <motion.p
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.85rem",
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.05em",
            marginBottom: "3.5rem",
          }}
        >
          Join the inner circle. Be the first to know when Love&amp;Me launches — and receive
          an exclusive early access invitation.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ display: "flex", gap: "0", justifyContent: "center", marginBottom: "3.5rem" }}
        >
          {[
            { v: countdown.days, l: "Days" },
            { v: countdown.hours, l: "Hours" },
            { v: countdown.minutes, l: "Min" },
            { v: countdown.seconds, l: "Sec" },
          ].map((item, i) => (
            <div key={item.l} style={{ display: "flex", alignItems: "stretch" }}>
              <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
                <p className="gold-text" style={{ fontSize: "2.5rem", fontWeight: 300, lineHeight: 1, minWidth: "3ch", fontVariantNumeric: "tabular-nums" }}>
                  {String(item.v).padStart(2, "0")}
                </p>
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.4rem" }}>
                  {item.l}
                </p>
              </div>
              {i < 3 && (
                <div style={{ color: "rgba(201,169,110,0.3)", fontSize: "2rem", fontWeight: 300, alignSelf: "flex-start", paddingTop: "2px" }}>:</div>
              )}
            </div>
          ))}
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "0", maxWidth: "480px", margin: "0 auto" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                padding: "0.8rem 0",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(201,169,110,0.35)",
                color: "#fff",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                outline: "none",
                transition: "border-color 0.3s",
                fontFamily: "inherit",
              }}
              onFocus={(e) =>
                (e.target.style.borderBottomColor = "#C9A96E")
              }
              onBlur={(e) =>
                (e.target.style.borderBottomColor = "rgba(201,169,110,0.35)")
              }
            />
            <button
              type="submit"
              style={{
                padding: "0.8rem 2rem",
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.5)",
                color: "#C9A96E",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 400,
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,169,110,0.1)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A96E";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,169,110,0.5)";
              }}
            >
              Reserve
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              border: "1px solid rgba(201,169,110,0.3)",
              padding: "2rem 3rem",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            <p style={{ color: "#C9A96E", fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              Welcome to the inner circle.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
