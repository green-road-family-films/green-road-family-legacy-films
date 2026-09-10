import type { ReactNode } from "react";
import { StudioFooter, StudioHeader } from "@/components/studio-chrome";
export function Subpage({eyebrow,title,intro,children}:{eyebrow:string;title:ReactNode;intro:string;children:ReactNode}){return <main><StudioHeader/><section className="subpage-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><section className="subpage-content shell">{children}</section><StudioFooter/></main>}
