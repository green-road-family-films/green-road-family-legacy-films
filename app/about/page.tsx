import { ConversationCta, PageShell } from "@/components/site-chrome";

export const metadata = { title: "About" };

export default function AboutPage(){return <PageShell>
 <section className="about-intro page-pad"><div><p className="eyebrow">About</p><h1>Mehdi<br/><em>Rahmani</em></h1><p className="role">Filmmaker</p></div><div className="about-lead"><p>For more than 25 years, I have worked with moving images to explore human experience, relationships, and the choices that shape a life.</p></div></section>
 <section className="about-body page-pad"><div className="about-monogram" aria-hidden>MR</div><div className="prose"><p>My work across fiction and documentary cinema has taught me to look beyond the obvious—to listen closely, notice revealing details, and find the story beneath the facts.</p><p>Green Road Family Legacy Films brings that approach into a more personal form of filmmaking, shaped around the lives and histories individuals and families want to carry forward.</p><p>I work closely with each family to understand what matters, who should be heard, and which memories or materials can help tell the story. A photograph may lead to a place; a place may bring a memory into focus. The camera comes later. First comes trust.</p></div></section>
 <section className="recognition page-pad"><p className="eyebrow">Filmography &amp; recognition</p><h2>A filmmaker’s eye,<br/>brought to personal history.</h2><p>My work has received international recognition, including a Best Film award at the Asia Pacific Screen Awards. My films have also been featured at Avanca Film Festival, Cinequest Film Festival, and Reading Film Festival.</p><a className="button" href="https://www.imdb.com/name/nm4428749/" target="_blank" rel="noreferrer">Explore my filmography on IMDb <span aria-hidden>↗</span></a></section>
 <ConversationCta />
</PageShell>}
