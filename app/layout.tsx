import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Green Road Family Legacy Films", template: "%s | Green Road Family Legacy Films" },
  description: "Private documentary films for the lives, voices, and histories a family wants to carry forward.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
