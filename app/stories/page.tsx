import { ConversationCta, PageIntro, PageShell } from "@/components/site-chrome";

export const metadata = { title: "Stories" };

export default function StoriesPage(){return <PageShell>
  <PageIntro eyebrow="Stories · The approach" title="A documentary, shaped around a life." copy="A Green Road film begins with listening. We explore the memories, relationships, places, and questions that matter to you, then shape them into a documentary with a clear point of view." image="/images/legacy/stories-stay.jpg" imageAlt="Green Road artwork about stories staying with us forever" />
  <section className="editorial-split page-pad">
    <div><p className="eyebrow">A considered process</p><h2>Each element is chosen for what it contributes to the story.</h2></div>
    <div className="prose"><p>The process may include filmed conversations, family photographs, home movies, letters, documents, objects, and meaningful locations.</p><p>A familiar photograph may open a new conversation. An old letter may change how a family understands a turning point. A place may bring back a voice or gesture that no archive can hold.</p><p>The film connects these details into a fuller portrait.</p></div>
  </section>
  <section className="story-method page-pad">
    <header className="story-method-intro">
      <p className="eyebrow">How a story takes shape</p>
      <h2>Attention before production.</h2>
      <p>The work begins long before the camera. Each step brings the life, details, and meaning into clearer focus.</p>
    </header>
    <div className="story-method-steps">
      <article>
        <span>01</span>
        <div><small>Begin with trust</small><h3>Listen first</h3></div>
        <p>The camera comes later. We begin by understanding who and what matters.</p>
      </article>
      <article>
        <span>02</span>
        <div><small>Find the details</small><h3>Look closer</h3></div>
        <p>Small details often reveal the connections that make a life distinct.</p>
      </article>
      <article>
        <span>03</span>
        <div><small>Create the film</small><h3>Shape with purpose</h3></div>
        <p>Memories and materials become a coherent film with a clear point of view.</p>
      </article>
    </div>
  </section>
  <section className="wide-quote page-pad"><p className="eyebrow">Who these films are for</p><blockquote>Individuals reflecting on a life. Couples preserving a shared journey. Families seeking to understand what shaped them.</blockquote><p>The story does not need to be fully formed before we begin. Discovery is part of the work.</p></section>
  <ConversationCta />
</PageShell>}
