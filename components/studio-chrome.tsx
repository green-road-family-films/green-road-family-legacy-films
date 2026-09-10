"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [["STORIES","/stories"],["THE EXPERIENCE","/experience"],["THE FILMS","/films"],["ABOUT","/about"],["FAQ","/faq"]];

export function StudioHeader(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>28);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <header className={`site-header${scrolled?" scrolled":""}`}><Link className="brand" href="/"><span>GREEN ROAD</span><small>PRIVATE LEGACY FILMS</small></Link><nav className={open?"open":""} aria-label="Primary navigation">{links.map(([label,url])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="mobile-inquire" href="/inquire">INQUIRE →</Link></nav><Link className="inquire" href="/inquire">INQUIRE <span>→</span></Link><button className="menu" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?"CLOSE":"MENU"}</button></header>
}

export function StudioFooter(){return <footer className="site-footer"><div className="brand"><span>GREEN ROAD</span><small>PRIVATE LEGACY FILMS</small></div><nav aria-label="Footer navigation">{links.map(([label,url])=><Link key={url} href={url}>{label}</Link>)}<Link href="/inquire">INQUIRE</Link></nav><p className="footer-principle">Commissioned films for families and storytellers.<br/>Private by default.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} GREEN ROAD</span><div><Link href="/privacy">PRIVACY</Link><Link href="/terms">TERMS</Link></div></div></footer>}
