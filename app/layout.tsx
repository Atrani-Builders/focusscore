import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusScore — Judgment OS",
  description:
    "Not a sleep score. A judgment forecast. FocusScore tells you when your judgment is sharp, when it's compromised, and exactly what to defer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
