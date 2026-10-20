"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  ["Stories", "/stories"],
  ["The Films", "/films"],
  ["The Experience", "/experience"],
  ["About", "/about"],
  ["FAQ", "/faq"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={pathname === "/" ? "site-header home-header" : "site-header"}>
      <Link className="site-brand" href="/" aria-label="Green Road Family Legacy Films home">
        <span>GREEN ROAD</span>
        <small>FAMILY LEGACY FILMS</small>
      </Link>
      <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation">
        <span>{open ? "Close" : "Menu"}</span><i aria-hidden />
      </button>
      <nav id="primary-navigation" className={open ? "primary-nav open" : "primary-nav"} aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
      <Link className="header-cta" href="/inquire">Inquire <span aria-hidden>↗</span></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div className="footer-brand"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></div>
        <p>Personal documentary films preserving the stories that connect generations.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/stories">Stories</Link><Link href="/films">The Films</Link><Link href="/experience">The Experience</Link>
        <Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/inquire">Inquire</Link>
      </nav>
      <div className="footer-contact">
        <a href="mailto:hello@greenroadlegacy.com">hello@greenroadlegacy.com</a>
        <a href="tel:+14158161060">+1 415 816 1060</a>
        <span>Sacramento</span>
      </div>
      <div className="footer-base"><span>© Green Road Family Legacy Films</span><Link href="/privacy">Privacy &amp; Trust</Link></div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function PageIntro({ eyebrow, title, copy, image, imageAlt, className = "" }: { eyebrow: string; title: string; copy: string; image?: string; imageAlt?: string; className?: string }) {
  return (
    <section className={`page-intro${className ? ` ${className}` : ""}`}>
      <div className="page-intro-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div>
      {image && <div className="page-intro-art"><img src={image} alt={imageAlt ?? ""} /></div>}
    </section>
  );
}

export function ConversationCta({ quiet = false }: { quiet?: boolean }) {
  return (
    <section className={quiet ? "conversation-cta quiet" : "conversation-cta"}>
      <p className="eyebrow">A private beginning</p>
      <h2>Every story begins with a conversation.</h2>
      <Link className="button" href="/inquire">Begin a private conversation <span aria-hidden>↗</span></Link>
    </section>
  );
}
