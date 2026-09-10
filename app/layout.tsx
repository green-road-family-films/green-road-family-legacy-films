import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Road Family Legacy Films | Stories for Generations",
  description:
    "Private, cinematic family legacy documentaries preserving lives, journeys, values, and memories across generations.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
