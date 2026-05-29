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
            bottom: 36px;
            left: 36px;
            z-index: 99999;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Space Mono', monospace;
            font-size: 10px;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: rgba(255,255,255,.7);
            text-decoration: none;
            padding: 10px 18px;
            border: 1px solid rgba(201,169,110,0.4);
            background: rgba(5,5,5,.85);
            backdrop-filter: blur(12px);
            transition: color .3s, border-color .3s, background .3s;
          }
          .hk-back:hover {
            color: #C9A96E;
            border-color: rgba(201,169,110,0.9);
            background: rgba(5,5,5,.95);
          }
        `}</style>
        <a className="hk-back" href="javascript:history.back()">← HokuHele</a>
        {children}
      </body>
    </html>
  );
}
