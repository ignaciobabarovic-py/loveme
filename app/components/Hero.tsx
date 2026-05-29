"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Particles from "./Particles";

// Video aspect ratio: 1376x768 = 16:9
const VIDEO_RATIO = 1376 / 768;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const fwdRef = useRef<HTMLVideoElement>(null);
  const revRef = useRef<HTMLVideoElement>(null);
  const [showForward, setShowForward] = useState(true);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Crossfade starts this many seconds before the video ends
  const CROSSFADE_BEFORE_END = 1.5;
  // CSS transition duration — must match CROSSFADE_BEFORE_END
  const FADE_DURATION = 1.5;

  useEffect(() => {
    const fwd = fwdRef.current;
    const rev = revRef.current;
    if (!fwd || !rev) return;

    rev.load();

    let fwdFading = false;
    let revFading = false;

    const onFwdTime = () => {
      if (!fwdFading && fwd.duration && fwd.currentTime >= fwd.duration - CROSSFADE_BEFORE_END) {
        fwdFading = true;
        // start reverse immediately so it's already playing when fade completes
        rev.currentTime = 0;
        rev.play();
        setShowForward(false);
      }
    };

    const onRevTime = () => {
      if (!revFading && rev.duration && rev.currentTime >= rev.duration - CROSSFADE_BEFORE_END) {
        revFading = true;
        fwd.currentTime = 0;
        fwd.play();
        setShowForward(true);
      }
    };

    const onFwdEnded = () => { fwdFading = false; };
    const onRevEnded = () => { revFading = false; };

    fwd.addEventListener("timeupdate", onFwdTime);
    rev.addEventListener("timeupdate", onRevTime);
    fwd.addEventListener("ended", onFwdEnded);
    rev.addEventListener("ended", onRevEnded);

    return () => {
      fwd.removeEventListener("timeupdate", onFwdTime);
      rev.removeEventListener("timeupdate", onRevTime);
      fwd.removeEventListener("ended", onFwdEnded);
      rev.removeEventListener("ended", onRevEnded);
    };
  }, []);

  // Both videos share this style — fill container edge to edge with no borders
  const videoStyle: React.CSSProperties = {
    position: "absolute",
    // Force the video to always cover the full viewport regardless of aspect ratio.
    // By setting both min-width and min-height relative to the container and using
    // the known video ratio we guarantee no black bars on any screen size.
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: `opacity ${FADE_DURATION}s ease-in-out`,
  };

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
      }}
    >
      {/* Background videos with parallax */}
      <motion.div style={{ y, position: "absolute", inset: "-10%", zIndex: 0 }}>
        {/* Forward video */}
        <video
          ref={fwdRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ ...videoStyle, opacity: showForward ? 1 : 0 }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Reverse video */}
        <video
          ref={revRef}
          muted
          playsInline
          preload="auto"
          style={{ ...videoStyle, opacity: showForward ? 0 : 1 }}
        >
          <source src="/video-reverse.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.05) 40%, rgba(5,5,5,0.6) 100%)",
          }}
        />
      </motion.div>

      {/* Golden particles */}
      <Particles />

      {/* Center content */}
      <motion.div
        style={{ opacity, position: "relative", zIndex: 10, textAlign: "center", padding: "0 2rem" }}
      >
        <motion.p
          initial={false}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{
            color: "#C9A96E",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontWeight: 300,
          }}
        >
          Eau de Parfum
        </motion.p>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="gold-shimmer"
          style={{
            fontSize: "clamp(4rem, 10vw, 9rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          Love<span style={{ fontStyle: "italic" }}>&amp;</span>Me
        </motion.h1>

        <motion.div
          initial={false}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
            margin: "2rem auto",
            maxWidth: "200px",
          }}
        />

        <motion.p
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Your skin. Your story. Your scent.
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          style={{ marginTop: "3.5rem" }}
        >
          <a
            href="#story"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              border: "1px solid rgba(201,169,110,0.5)",
              color: "#C9A96E",
              padding: "0.9rem 3rem",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.4s ease",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,110,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A96E";
              const arrow = e.currentTarget.querySelector(".discover-arrow") as HTMLElement;
              if (arrow) arrow.style.transform = "translateY(3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,169,110,0.5)";
              const arrow = e.currentTarget.querySelector(".discover-arrow") as HTMLElement;
              if (arrow) arrow.style.transform = "translateY(0)";
            }}
          >
            Discover
            <span
              className="discover-arrow"
              style={{ transition: "transform 0.3s ease", display: "inline-block", lineHeight: 1 }}
            >
              ↓
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #C9A96E, transparent)",
          }}
        />
        <span style={{ color: "rgba(201,169,110,0.5)", fontSize: "0.55rem", letterSpacing: "0.25em" }}>
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
