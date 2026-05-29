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
        <style>{`
          .hk-back {
            position: fixed;
            top: 22px;
            left: 30px;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Space Mono', monospace;
            font-size: 10px;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: rgba(255,255,255,.55);
            text-decoration: none;
            padding: 8px 14px;
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(5,5,5,.7);
            backdrop-filter: blur(10px);
            transition: color .3s, border-color .3s;
          }
          .hk-back:hover {
            color: #fff;
            border-color: rgba(255,255,255,.4);
          }
        `}</style>
        <a className="hk-back" href="https://hokuhele.studio">← HokuHele</a>
        {children}
      </body>
    </html>
  );
}
