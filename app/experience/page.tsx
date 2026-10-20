import { ConversationCta, PageIntro, PageShell } from "@/components/site-chrome";

export const metadata = { title: "The Experience" };
const steps=[
 ["01","Discover","We begin with a private conversation about the person, relationship, or family history at the heart of the film, along with your goals and intended audience."],
 ["02","Develop","We explore memories, photographs, documents, objects, and meaningful places to identify the people, themes, and materials that can shape the documentary."],
 ["03","Film","Guided conversations and planned filming capture voices, reflections, and details. The approach is tailored to the participants, setting, and story."],
 ["04","Craft","The material is shaped into a cohesive film through story structure, pacing, sound, and imagery, with attention to the details that make the story specific."],
 ["05","Preserve","The film is delivered according to the agreed project plan, with its intended audience, review process, and permitted uses established in advance."],
];
export default function ExperiencePage(){return <PageShell>
 <PageIntro eyebrow="The experience" title="Your story, guided with care." copy="A thoughtful process gives the story room to emerge while keeping each stage clear." image="/images/legacy/story-camera.jpg" imageAlt="Green Road artwork featuring a documentary camera and family keepsakes" />
 <section className="process-list page-pad">{steps.map(([number,title,copy])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
 <section className="experience-feature page-pad"><div className="experience-feature-art"><img src="/images/legacy/carry-forward.jpg" alt="Green Road artwork about carrying a story forward" /></div><div><p className="eyebrow">What to expect</p><h2>Personal, planned, and clear.</h2><p>A personal first conversation, a discovery process shaped around your story, planned filming, careful editorial work, and clear agreements about review, delivery, privacy, and use.</p><p>Each project is individually scoped; details are confirmed before production begins.</p></div></section>
 <ConversationCta />
</PageShell>}
