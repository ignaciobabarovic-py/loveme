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
      <body>{children}</body>
    </html>
  );
}
