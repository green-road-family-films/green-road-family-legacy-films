import Link from "next/link";
import { ConversationCta, PageShell } from "@/components/site-chrome";

const forms = [
  ["01", "The Portrait", "One life", "A considered portrait of the person beyond titles and milestones: their experiences, values, relationships, and lasting influence."],
  ["02", "The Love Story", "Two lives", "A shared life told through the relationship, choices, turning points, and everyday moments that shaped it."],
  ["03", "The Legacy", "What one life sets in motion", "A business, craft, tradition, body of knowledge, or way of seeing the world that continues through others."],
  ["04", "The Heirloom", "What we carry forward", "A recipe, language, song, ritual, object, or lesson whose meaning lives on through the people who carry it."],
];

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <div className="home-hero-image"><img src="/green-road-legacy-hero.jpeg" alt="A mature couple revisiting family photographs together" /></div>
      <div className="home-hero-shade" />
      <div className="home-hero-copy">
        <p className="eyebrow">Green Road Family Legacy Films</p>
        <h1>Your story.<br/><em>Their legacy.</em></h1>
        <p>Private documentary films for the lives, voices, and histories a family wants to carry forward.</p>
        <Link className="button light" href="/inquire">Begin a private conversation <span aria-hidden>↗</span></Link>
      </div>
      <Link className="hero-scroll" href="#story"><span>Discover</span><i aria-hidden /></Link>
    </section>

    <section id="story" className="home-opening page-pad">
      <div><p className="eyebrow">Stories, carefully held</p><h2>A life is more than a timeline of milestones.</h2></div>
      <div className="prose-large"><p>It is shaped by the people we love, the choices we make, the places we carry with us, and the experiences that change how we see the world.</p><p>Through guided conversations, meaningful images, and family archives, Green Road brings a person’s story into focus—in their own voice and on their family’s terms.</p><Link className="text-link" href="/stories">Explore our approach <span>↗</span></Link></div>
    </section>

    <section className="image-statement">
      <img src="/images/legacy/family-archive.jpg" alt="Green Road artwork celebrating a family archive" />
      <div><p className="eyebrow">The life behind the story</p><h2>The smallest details can hold the deepest meaning.</h2><p>A phrase remembered. A photograph rediscovered. A story told differently with time.</p></div>
    </section>

    <section className="forms-overview page-pad">
      <header className="section-heading"><p className="eyebrow">The films</p><h2>Four ways to preserve a story.</h2><Link className="text-link" href="/films">See every form <span>↗</span></Link></header>
      <div className="form-grid">{forms.map(([number,title,kicker,copy])=><article key={title}><span>{number}</span><p>{kicker}</p><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="archive-feature page-pad">
      <div className="archive-art"><img src="/images/legacy/archive-voice.jpg" alt="Green Road artwork about photographs, memories, and generations" /></div>
      <div className="archive-copy"><p className="eyebrow">A family archive, given a voice</p><h2>Meaning lives between the materials.</h2><p>Photographs, letters, home movies, documents, and treasured objects can reveal more when connected to the people and memories behind them.</p><p>We identify the materials that genuinely deepen the film and discuss their use before production.</p></div>
    </section>

    <section className="trust-strip page-pad"><p className="eyebrow">Private by design</p><h2>The audience and use of each film are discussed from the outset.</h2><Link className="text-link" href="/privacy">How we protect your story <span>↗</span></Link></section>

    <section className="filmmaker-tease page-pad">
      <div><p className="eyebrow">Meet the filmmaker</p><h2>Mehdi Rahmani</h2></div>
      <div><p>I’m a filmmaker working across fiction and documentary cinema. At Green Road, I bring a filmmaker’s attention to detail, structure, and human experience to stories entrusted to me.</p><Link className="text-link" href="/about">About Mehdi <span>↗</span></Link></div>
    </section>
    <ConversationCta />
  </PageShell>;
}
