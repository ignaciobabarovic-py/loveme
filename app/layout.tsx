import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Love&Me — The Morning Before Everyone Else",
  description: "A fragrance that speaks of you. Elegant. Authentic. Unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="https://hokuhele.studio"
          style={{
            position: "fixed",
            top: "22px",
            left: "30px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,.55)",
            textDecoration: "none",
            padding: "8px 14px",
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(5,5,5,.7)",
            backdropFilter: "blur(10px)",
            transition: "color .3s, border-color .3s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = "#fff";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.4)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.55)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.12)";
          }}
        >
          ← HokuHele
        </a>
        {children}
      </body>
    </html>
  );
}
