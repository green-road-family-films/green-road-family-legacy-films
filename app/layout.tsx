import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://green-road-family-legacy-films.vercel.app"),
  title: "Green Road | Private Legacy Films",
  description:
    "A filmmaker-led private documentary studio creating commissioned films for families and storytellers.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "Green Road | Private Legacy Films", description: "Your Story. Their Legacy. A Film for Generations.", type: "website" },
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
