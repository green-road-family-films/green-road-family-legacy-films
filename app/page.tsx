import Link from "next/link";
import { StudioFooter, StudioHeader } from "@/components/studio-chrome";
import { InquiryForm } from "@/components/inquiry-form";

const territories = [
  ["A LIFE", "One life. Many chapters.", "M0 28 C28 2 46 54 78 26 C104 4 126 42 160 17"],
  ["A FAMILY", "The story between generations.", "M4 40 L42 15 L82 42 L120 12 L158 38"],
  ["A JOURNEY", "Leaving home. Starting again. Becoming someone new.", "M4 48 C42 4 74 60 108 20 C127 0 142 14 160 7"],
  ["A LEGACY", "What one generation leaves to the next.", "M5 45 L42 45 L42 28 L79 28 L79 14 L116 14 L116 4 L158 4"],
];
const craft = [
  ["LISTEN", "We listen because the important story is often not the first answer."],
  ["OBSERVE", "We observe because a life is more than an interview."],
  ["EXPLORE", "We explore people, places, photographs, objects, and memory."],
  ["FRAME", "We frame because place and detail carry memory."],
  ["SHAPE", "We shape because storytelling happens through selection and editing."],
  ["PRESERVE", "We preserve because the film must outlive the moment."],
];
const stages = [
  ["DISCOVER", "A private conversation."],
  ["DEVELOP", "Research, story direction, archive review, and preparation."],
  ["FILM", "Interviews, observational material, places, and details."],
  ["CRAFT", "Editing, sound, image, and archive integration."],
  ["PRESERVE", "A master, private delivery, and a considered viewing experience."],
];
const filmForms = [
  ["THE LEGACY FILM", "A focused portrait of a life."],
  ["THE FAMILY DOCUMENTARY", "A story across generations."],
  ["THE FAMILY FEATURE", "A deeper cinematic portrait of a family, its history, and the world that shaped it."],
];
const faqs = [
  ["THE FILM", "What is a Legacy Film?", "A Legacy Film is a commissioned documentary shaped around a person, a family, or the story between generations."],
  ["THE FILM", "How is it different from a family video?", "The story is developed before filming, then shaped through interviews, observation, archival material, sound, image, and editing. The result is a documentary, not simply a recording."],
  ["THE FILM", "Who is it for?", "A film may be commissioned for yourself, a parent, grandparent, spouse or partner, or an entire family. You do not need to be famous; the value is in the life and story itself."],
  ["PRIVACY", "Can it remain completely private?", "Yes. Every project is private by default. Nothing is published, shared, or used in a portfolio without explicit permission."],
  ["ARCHIVE", "Can you work with photographs and home movies?", "Yes. Photographs, letters, home movies, documents, objects, recipes, and recorded voices may become narrative material where appropriate."],
  ["THE PROCESS", "What if someone is uncomfortable on camera?", "That is common. Time, preparation, a small presence, and a conversational approach help people feel at ease rather than performed."],
  ["LOGISTICS", "How long does it take?", "The schedule depends on the people, places, archive, and depth of the story. Timing is discussed clearly before the commission begins."],
  ["LOGISTICS", "Where do you film, and do you travel?", "Filming follows the people and places the story genuinely needs. Location and travel are considered during the first conversation."],
  ["INVESTMENT", "How much does a commission cost?", "Every film is developed individually. After discovery, Green Road prepares a clear proposal reflecting the story, access, locations, and creative scope."],
  ["PRIVACY", "Do you publish client films?", "Not without explicit authorization. Your family's memories are not marketing material."],
];

export default function Home() {
  return <main>
    <StudioHeader />
    <section className="hero" id="top">
      <div className="hero-field" aria-hidden="true"><span/><span/><span/></div>
      <div className="hero-content"><p className="eyebrow">GREEN ROAD / PRIVATE LEGACY FILMS</p><h1>Your Story.<br/>Their Legacy.<br/><em>A Film for Generations.</em></h1><div className="hero-actions"><Link className="button ivory" href="/inquire">BEGIN A CONVERSATION <span>→</span></Link><a className="quiet-link" href="#manifesto">DISCOVER GREEN ROAD <span>↓</span></a></div></div>
      <p className="hero-note">A filmmaker-led studio for commissioned family documentaries.</p>
    </section>
    <section className="manifesto shell" id="manifesto"><p className="eyebrow dark">01 / MANIFESTO</p><h2>NOT A FAMILY VIDEO.<br/><em>A FILM ABOUT A LIFE.</em></h2><p>Every life holds more than dates and milestones. Green Road develops intimate documentary films from memory, voice, place, and the details that make a story unmistakably yours.</p></section>
    <section className="signature-film" aria-label="Sixty-second emotional brand film"><div className="film-grain" aria-hidden="true"/><p className="eyebrow">02 / A GREEN ROAD FILM</p><div className="film-words" aria-hidden="true"><span>MEMORY</span><span>VOICE</span><span>TIME</span><span>FAMILY</span></div><div className="signature-copy"><p>There are questions we mean to ask.<br/>Voices we believe we will always remember.<br/>Stories that wait quietly between generations.</p><strong>Some stories are too important to leave behind.</strong></div><p className="film-end">GREEN ROAD <small>PRIVATE LEGACY FILMS</small></p></section>
    <section className="pathways shell"><div className="section-intro"><p className="eyebrow dark">03 / WHO IS THIS FOR?</p><h2>A film can begin<br/><em>from either side of the story.</em></h2></div><div className="pathway-grid"><article><span>01</span><h3>FOR FAMILIES</h3><h4>Give Their Story a Future.</h4><p>Commission a film for a parent, grandparent, spouse or partner, or for the family as a whole.</p><Link href="/stories">EXPLORE FAMILY STORIES →</Link></article><article><span>02</span><h3>FOR STORYTELLERS</h3><h4>Leave More Than Memories.</h4><p>Tell your own story in your own voice, for the people who know you now and those who will come later.</p><Link href="/stories">EXPLORE YOUR STORY →</Link></article></div></section>
    <section className="territories" id="stories"><div className="shell section-intro light"><p className="eyebrow">04 / WHAT WE PRESERVE</p><h2>EVERY FAMILY<br/><em>CARRIES A STORY.</em></h2></div><div className="territory-grid">{territories.map(([name,copy,path],index)=><article key={name}><div className="territory-top"><span>0{index+1}</span><svg viewBox="0 0 164 58" role="img" aria-label={`${name.toLowerCase()} editorial symbol`}><path d={path}/></svg></div><h3>{name}</h3><p>{copy}</p></article>)}</div><div className="whose shell"><p>WHOSE STORY IS IT?</p><div>{["MYSELF","PARENT","GRANDPARENT","SPOUSE","ENTIRE FAMILY"].map(x=><span key={x}>{x}</span>)}</div><Link href="/inquire">BEGIN WITH THE PERSON →</Link></div></section>
    <section className="before shell"><div><p className="eyebrow dark">05 / BEFORE WE FILM</p><h2>The camera is<br/><em>not the beginning.</em></h2></div><div className="before-copy"><p>Before filming, Green Road may spend time learning about the people, places, photographs, letters, recordings, objects, and memories surrounding a story.</p><ol>{["RESEARCH","LISTEN","DISCOVER","PREPARE"].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ol></div></section>
    <section className="archive shell"><p className="eyebrow">06 / THE ARCHIVE</p><h2>YOUR ARCHIVE<br/><em>BELONGS IN MOTION.</em></h2><div className="archive-materials">{["PHOTOGRAPHS","LETTERS","HOME MOVIES","DOCUMENTS","OBJECTS","RECIPES","VOICES"].map((x,i)=><span key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</span>)}</div><p className="archive-note">These materials are treated as parts of the story—not as decoration. The film is not the end of the story.</p></section>
    <section className="outcome shell"><div className="section-intro"><p className="eyebrow dark">07 / BEYOND THE FILM</p><h2>A considered outcome.<br/><em>Not a package.</em></h2></div><div className="outcome-list">{[["THE FILM","The finished documentary."],["THE ARCHIVE","Selected materials gathered or used during the project, where appropriate."],["THE MASTER","A high-quality master made for the family."],["PRIVATE VIEWING","A private delivery and viewing experience."]].map(([x,y],i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>{y}</p></article>)}</div></section>
    <section className="craft" id="craft"><div className="shell section-intro light"><p className="eyebrow">08 / THE CRAFT</p><h2>THE GREEN ROAD<br/><em>SIGNATURE.</em></h2></div><div className="craft-track">{craft.map(([x,y],i)=><article key={x}><span>0{i+1}</span><h3>WE {x}</h3><p>{y}</p></article>)}</div></section>
    <section className="experience shell" id="experience"><div className="section-intro"><p className="eyebrow dark">09 / THE EXPERIENCE</p><h2>From first question<br/><em>to private viewing.</em></h2></div><div className="timeline">{stages.map(([x,y],i)=><article key={x}><span>0{i+1}</span><div><h3>{x}</h3><p>{y}</p></div></article>)}</div></section>
    <section className="film-forms shell" id="films"><div className="section-intro light"><p className="eyebrow">10 / THE FILMS</p><h2>EVERY STORY FINDS<br/><em>ITS OWN FORM.</em></h2><p>No two families arrive with the same people, places, archive, or questions. The form follows the story.</p></div><div className="forms-list">{filmForms.map(([x,y],i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>{y}</p><Link href="/films">DISCOVER THE FORM →</Link></article>)}</div></section>
    <section className="filmmaker shell" id="about"><div className="filmmaker-mark" aria-hidden="true"><span>MR</span><small>FILMMAKER / AUTHOR</small></div><div><p className="eyebrow dark">11 / THE FILMMAKER</p><h2>MEHDI<br/><em>RAHMANI.</em></h2><p className="lead">This work is an extension of a life spent making films—not simply documenting events.</p><p>Green Road is led by the filmmaker. Each commission begins with listening and develops through the same instincts that shape documentary work: attention, patience, image, sound, and the meaning held in small details.</p><Link className="button ink" href="/about">MEET THE FILMMAKER <span>→</span></Link></div></section>
    <section className="privacy shell" id="privacy"><p className="eyebrow">12 / PRIVACY</p><div><h2>YOUR STORY<br/><em>REMAINS YOURS.</em></h2><strong>PRIVATE BY DEFAULT.</strong></div><div><p>No public portfolio use without explicit permission. No social-media publication without permission. No interviews, names, photographs, or sensitive materials are shared without authorization.</p><blockquote>“Your family’s memories are not marketing material.”</blockquote><Link href="/privacy">READ OUR PRIVACY PRINCIPLES →</Link></div></section>
    <section className="faq shell" id="faq"><div className="faq-heading"><p className="eyebrow dark">13 / FAQ</p><h2>Questions,<br/><em>answered quietly.</em></h2><Link href="/faq">VIEW ALL QUESTIONS →</Link></div><div className="faq-list">{faqs.slice(0,6).map(([category,q,a])=><details key={q}><summary><span>{category}</span><b>{q}</b><i>+</i></summary><p>{a}</p></details>)}</div></section>
    <section className="final-cta shell"><p className="eyebrow">14 / BEGIN</p><h2>EVERY LEGACY BEGINS<br/><em>WITH A CONVERSATION.</em></h2><Link className="button ivory" href="/inquire">BEGIN A PRIVATE CONVERSATION <span>→</span></Link></section>
    <section className="home-inquiry shell" aria-labelledby="home-inquiry-title"><div><p className="eyebrow dark">PRIVATE COMMISSION</p><h2 id="home-inquiry-title">Begin a private<br/><em>conversation.</em></h2><p>Every project begins with a private conversation. Tell us only what feels comfortable.</p></div><InquiryForm compact/></section>
    <StudioFooter/>
  </main>;
}
