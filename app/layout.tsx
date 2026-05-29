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
            gap: 8px;
            font-family: 'Space Mono', monospace;
            font-size: 10px;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: #050505;
            text-decoration: none;
            padding: 10px 18px;
            border: none;
            background: #EFEDE6;
            transition: background .3s, color .3s;
          }
          .hk-back:hover {
            background: #FF4D2E;
            color: #fff;
          }
          .hk-back:hover .hk-star {
            fill: #fff;
          }
          .hk-star {
            flex-shrink: 0;
            transition: fill .3s;
          }
        `}</style>
        <a className="hk-back" href="https://loveme-umber.vercel.app">
          <svg className="hk-star" width="10" height="10" viewBox="-12 -12 24 24" fill="#FF4D2E">
            <path d="M0,-11 C0,-4 4,0 11,0 C4,0 0,4 0,11 C0,4 -4,0 -11,0 C-4,0 0,-4 0,-11 Z"/>
          </svg>
          HokuHele
        </a>
        {children}
      </body>
    </html>
  );
}
